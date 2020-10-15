function picked (array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateShortUrl () {
  // define the character
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '0123456789'
  const allCharacters = [lowerCaseLetters, upperCaseLetters, numbers]

  console.log(allCharacters)
  // create a collection to store things user picked up
  let collection = []

  allCharacters.forEach((characters) => {
    collection = collection.concat(characters.split(''))
  })

  // start generating shortUrl
  let shortUrl = ''
  for (let i = 0; i < 5; i++) {
    shortUrl += picked(collection)
  }

  // return the short-Url
  console.log('This function will generate shorted url')
  return shortUrl
}

generateShortUrl()

module.exports = generateShortUrl
