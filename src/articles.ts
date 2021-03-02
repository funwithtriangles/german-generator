import { Noun, Gender, PersonalPronoun, Case, ArticleType } from './types'

const articles = {
  definite: {
    nominative: {
      m: 'der',
      f: 'die',
      n: 'das',
      p: 'die',
    },
    accusative: {
      m: 'den',
      f: 'die',
      n: 'das',
      p: 'die',
    },
    dative: {
      m: 'dem',
      f: 'der',
      n: 'dem',
      p: 'den',
    },
  },
  indefinite: {
    nominative: {
      m: 'ein',
      f: 'einen',
      n: 'ein',
      p: '---',
    },
    // TODO
    accusative: {
      m: 'xxx',
      f: 'xxx',
      n: 'xxx',
      p: '---',
    },
    dative: {
      m: 'xxx',
      f: 'xxx',
      n: 'xxx',
      p: '---',
    },
  },
}

type Params = {
  type: ArticleType,
  gender: Gender,
  isPlural: boolean,
  germanCase: Case, // Can't use "case" because its a special word in JS
}

export const getArticle = ({ type, gender, isPlural, germanCase }: Params) => {
  const code = isPlural ? 'p' : gender

  return articles[type][germanCase][code]
}
