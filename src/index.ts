import { Noun, Gender } from './types'
import { nounList } from './parseData'

export const articles: Record<Gender, string> = {
  m: 'der',
  f: 'die',
  n: 'das',
}

export const buildNoun = (n: Noun, isPlural: boolean): string => {
  // If plural, use "die"
  const art = isPlural ? articles.f : articles[n.gender]
  // If plural, use plural form. If no plural form, use singular form
  const word = isPlural ? (n.plural || n.singular) : n.singular
  return `${art} ${word}`
}

export const getRandNoun = () => nounList[Math.floor(Math.random() * nounList.length)]
export const getRandIsPlural = () => Math.random() > 0.5

document.body.innerHTML = buildNoun(getRandNoun(), getRandIsPlural())
