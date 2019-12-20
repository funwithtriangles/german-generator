import nounsRaw from './data/nouns.txt'
import { Noun, Gender } from './types'

const parseRaw = (text: string) => text.split('\n').map((l: string) => l.split(' '))

export const nounList: Noun[] = parseRaw(nounsRaw).map(
  (arr: [Gender, string, string?]) => ({
    gender: arr[0],
    singular: arr[1],
    plural: arr[2],
  }),
)
