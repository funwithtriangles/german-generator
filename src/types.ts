export type Person = 's1' | 's2' | 's3' | 'p1' | 'p2' | 'p3'

export type Gender = 'm' | 'f' | 'n'

export type Case = 'nominative' | 'accusative' | 'dative'

export type ArticleType = 'definite' | 'indefinite'

// Nouns have a gender. The plural form is also stored because there is no
// fixed rule. Dative plural always has an "n" on the end, if one isn't already there.
// Could probably generate this instead of storing in the data
export type Noun = {
  gender: Gender,
  singular: string,
  plural: string,
  pluralDative: string,
}

// Verbs have many forms. They are "conjugated" depending on the personal pronoun
export type Verb = {
  germanCase: Case,
  // Singular (1st person, 2nd person, 3rd person)
  s1: string,  // Ich - I
  s2: string,  // du - you
  s3: string,  // er/sie/es - he/she/it
  // Plural (1st person, 2nd person, 3rd person)
  p1: string,  // wir - we
  p2: string,  // ihr - you
  p3: string,  // sie - they
}

// e.g. "Ich", s1 (1st person singular)
export type PersonalPronoun = [string, Person]
