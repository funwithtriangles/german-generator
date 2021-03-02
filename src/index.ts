import { Noun, Gender, PersonalPronoun } from './types'
import { nounList, verbList } from './parseData'
import { randFromArray } from './utils'

// Definitive articles (e.g. "the", instead of "an") change
// depending on the gender of the noun
const definitiveArticles: Record<Gender, string> = {
  m: 'der',
  f: 'die',
  n: 'das',
}

// Personal pronouns defined with their person (e.g. 1st Person singular)
const personalPronouns: PersonalPronoun[] = [
  ['Ich', 's1'],
  ['du', 's2'],
  ['er', 's3'],
  ['sie', 's3'],
  ['es', 's3'],
  ['wir', 'p1'],
  ['ihr', 's2'],
  ['sie', 's3'],
]

const buildNoun = (n: Noun, isPlural: boolean): string => {
  // If plural, use "die"
  const art = isPlural ? definitiveArticles.f : definitiveArticles[n.gender]
  // If plural, use plural form. If no plural form, use singular form
  const word = isPlural ? (n.plural || n.singular) : n.singular
  return `${art} ${word}`
}

const getRandIsPlural = () => Math.random() > 0.5

const articleNoun = buildNoun(randFromArray(nounList), getRandIsPlural())

const personalPronoun = randFromArray(personalPronouns)

// Conjugate the verb based on the personal pronoun
const verb = randFromArray(verbList)[personalPronoun[1]]

const sentence = `${personalPronoun[0]} ${verb} ${articleNoun}`

document.body.innerHTML = sentence
