/* eslint-disable no-useless-escape */
interface IGetDateFromContent {
  (text: string): string[]
}

const getDateFromContent: IGetDateFromContent = text => {
  let results = text.match(/[0-9]{1,2}([\-\/ \.])[0-9]{1,2}([\-\/ \.])((19)|(20))[0-9]{2}/g)

  if (!results) {
    return []
  }
  return results
}

export default getDateFromContent
