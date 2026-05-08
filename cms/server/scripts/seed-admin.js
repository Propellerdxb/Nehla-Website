import 'dotenv/config'
import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import bcrypt from 'bcryptjs'
import { pool } from '../src/db.js'

const ENV_EMAIL = process.env.SEED_ADMIN_EMAIL
const ENV_PASSWORD = process.env.SEED_ADMIN_PASSWORD

async function readMasked(question) {
  return new Promise((resolve) => {
    process.stdout.write(question)
    let value = ''
    process.stdin.setRawMode?.(true)
    process.stdin.resume()
    const onData = (chunk) => {
      const s = chunk.toString('utf8')
      const code = s.charCodeAt(0)
      // Enter / EOF
      if (s === '\n' || s === '\r' || code === 4) {
        process.stdin.removeListener('data', onData)
        process.stdin.setRawMode?.(false)
        process.stdin.pause()
        process.stdout.write('\n')
        resolve(value)
        return
      }
      // Ctrl+C
      if (code === 3) process.exit(1)
      // Backspace / Delete
      if (code === 127 || code === 8) {
        value = value.slice(0, -1)
        return
      }
      value += s
    }
    process.stdin.on('data', onData)
  })
}

async function main() {
  let email = ENV_EMAIL
  let password = ENV_PASSWORD

  if (!email || !password) {
    const rl = readline.createInterface({ input, output })
    if (!email) email = (await rl.question('Email: ')).trim()
    rl.close()
    if (!password) password = await readMasked('Password: ')
  }

  email = String(email || '').toLowerCase().trim()
  password = String(password || '')

  if (!email || !password) {
    console.error('Email and password are required.')
    process.exit(1)
  }

  const hash = await bcrypt.hash(password, 12)
  await pool.query(
    `INSERT INTO admins (email, password_hash) VALUES (?, ?)
     ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash)`,
    [email, hash]
  )
  console.log(`Admin upserted: ${email}`)
  await pool.end()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
