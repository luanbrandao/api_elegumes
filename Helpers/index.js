
const crypto = use('crypto')

/**
 * @param { int } length - O tamanho da string que vocÇe quer gear
 * @return { string } uma string randomica do tamanho de length
 */

// eslint-disable-next-line camelcase
const str_random = async (length = 40) => {
  let string = ''
  const len = string.length

  if (len < length) {
    const size = length - len
    const bytes = await crypto.randomBytes(size)
    const buffer = Buffer.from(bytes)

    string = buffer
      .toString('base64')
      .replace(/[^a-zA-Z0-9]/g, '')
      .substr(0, size)
  }

  return string
}

module.exports = {
  str_random
}
