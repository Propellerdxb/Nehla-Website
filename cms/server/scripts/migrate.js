import 'dotenv/config'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { pool } from '../src/db.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const migrationsDir = path.resolve(__dirname, '../migrations')

const files = fs
  .readdirSync(migrationsDir)
  .filter((f) => f.endsWith('.sql'))
  .sort()

for (const file of files) {
  const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8')
  console.log(`→ ${file}`)
  await pool.query(sql)
}

console.log(`Applied ${files.length} migration(s).`)
await pool.end()
