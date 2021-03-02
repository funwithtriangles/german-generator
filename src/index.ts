import { Noun, Gender, PersonalPronoun, Case, Person } from './types'
import { nounList, verbList } from './parseData'
import { randFromArray } from './utils'
import { getArticle } from './articles'

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
  ['ihr', 'p2'],
  ['sie', 'p3'],
]

const buildNounWithArticle = (n: Noun, isPlural: boolean, germanCase: Case = 'nominative'): string => {
  const art = getArticle({
    type: 'definite',
    gender: n.gender,
    germanCase,
    isPlural,
  })
  // If plural, use plural form. If no plural form, use singular form
  const word = isPlural ? (n.plural || n.singular) : n.singular
  return `${art} ${word}`
}

const getRandIsPlural = () => Math.random() > 0.5

const randNounWithArticle = (germanCase: Case) => buildNounWithArticle(randFromArray(nounList), getRandIsPlural(), germanCase)
const randVerb = (person: Person) => randFromArray(verbList)[person]

let sentence

const sentenceNum = Math.floor(Math.random() * 2)

// Randomize between different sentence structures
switch (sentenceNum) {
  case 0: {
    // Pronoun - verb - noun (e.g. "Ich esse die wurst")
    const pPronoun = randFromArray(personalPronouns)
    const person = pPronoun[1]
    sentence = `${pPronoun[0]} ${randVerb(person)} ${randNounWithArticle('accusative')}`
  } break
  case 1: {
    // Noun - verb - noun (e.g. "Die katze isst die wurst")
    const isPlural = getRandIsPlural()
    const noun0 = buildNounWithArticle(randFromArray(nounList), isPlural)
    const person = isPlural ? 'p3' : 's3'
    sentence = `${noun0} ${randVerb(person)} ${randNounWithArticle('accusative')}`
  } break
}

document.body.innerHTML = sentence
