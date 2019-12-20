import nounsRaw from './data/nouns.txt'

// Parse noun list text
export const nounList: Noun[] = nounsRaw.split('\n').map((l: string) => l.split(' '))

export type gender = 'm' | 'f' | 'n'

export const articles: Record<gender, string> = {
  m: 'der',
  f: 'die',
  n: 'das',
}

// gender, word, plural form (optional)
export type Noun = [gender, string, string?]

export const buildNoun = (n: Noun, isPlural: boolean): string => {
  // If plural, use "die"
  const art = isPlural ? articles.f : articles[n[0]]
  // If plural, use plural form. If no plural form, use singular form
  const word = isPlural ? (n[2] || n[1]) : n[1]
  return `${art} ${word}`
}

export const getRandNoun = () => nounList[Math.floor(Math.random() * nounList.length)]
export const getRandIsPlural = () => Math.random() > 0.5
document.body.innerHTML = buildNoun(getRandNoun(), getRandIsPlural())
