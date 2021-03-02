import nounsRaw from './data/nouns.txt'
import verbsRaw from './data/verbs.txt'

import { Noun, Verb, Gender, Person, Case } from './types'

const parseRaw = (text: string) => text.split('\n').map((l: string) => l.split(' '))

export const nounList: Noun[] = parseRaw(nounsRaw).map(
  (arr: [Gender, string, string, string]) => ({
    gender: arr[0],
    singular: arr[1],
    plural: arr[2],
    pluralDative: arr[3],
  }),
)

export const verbList: Verb[] = parseRaw(verbsRaw).map(
  (arr: [Person, Person, Person, Person, Person, Person, Case]) => ({
    s1: arr[0],
    s2: arr[1],
    s3: arr[2],
    p1: arr[3],
    p2: arr[4],
    p3: arr[5],
    germanCase: arr[6],
  }),
)
