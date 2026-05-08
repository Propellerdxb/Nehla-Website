// Estimate reading time from a markdown string.
// 220 wpm is a common middle ground (Medium uses ~265, news sites ~200).

const WORDS_PER_MINUTE = 220

const stripMarkdown = (md) =>
  String(md || '')
    .replace(/```[\s\S]*?```/g, ' ')         // fenced code blocks
    .replace(/`[^`]*`/g, ' ')                 // inline code
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')    // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')  // links → label
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1') // bold / italic
    .replace(/^#{1,6}\s+/gm, '')              // headings
    .replace(/^>\s?/gm, '')                   // blockquotes
    .replace(/^[-*+]\s+/gm, '')               // list bullets
    .replace(/^---+$/gm, ' ')                 // horizontal rules
    .replace(/<[^>]+>/g, ' ')                 // any html tags
    .replace(/\s+/g, ' ')
    .trim()

export function countWords(content) {
  const text = stripMarkdown(content)
  if (!text) return 0
  return text.split(' ').filter(Boolean).length
}

export function estimateReadTime(content) {
  const words = countWords(content)
  if (!words) return null
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE))
  return { words, minutes, label: `${minutes} min read` }
}
