export type Gender = 'm' | 'f' | 'n'
// gender, word, plural form (optional)
export type Noun = {
  gender: Gender,
  singular: string,
  plural?: string,
}
