/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */

const crypto = use('crypto')
const Helpers = use('Helpers')

/**
 * @param { int } length - O tamanho da string que vocÇe quer gear
 * @return { string } uma string randomica do tamanho de length
 */

// eslint-disable-next-line camelcase
const strRandom = async (length = 40) => {
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

/**
  * Move um único arquivo para o caminho especificado, se nenhum for especificado então
  * o caminho 'public/upload' será usado
  * @param { File } file o arquivoa ser gerenciado
  * @param { string } path o caminho para onde o arquivo deve sermovido
 */

const manageSingleUpload = async (file, path = null) => {
  path = path || Helpers.publicPath('images')
  // gera um nome aleatório
  const randomName = await strRandom(30)
  const filename = `${new Date().getTime()}-${randomName}.${file.subtype}`

  // renomeia o arquivo e move ele para opath
  await file.move(path, {
    name: filename
  })

  return file
}

/**
 * Move multiplos único arquivos para o caminho especificado, se nenhum for especificado então
 * o caminho 'public/upload' será usado
 * @param { FileJas } fileJar os arquivoa a serem gerenciado
 * @param { string } path o caminho para onde os arquivos deve ser movido
 * @return { Onject<FileJar> }
*/

const manageMutipleUploads = async (fileJar, path = null) => {
  path = path || Helpers.publicPath('images')
  let successes = []
  let errors = []

  await Promise.all(
    fileJar.files.map(async file => {
      let randomName = await strRandom(30)
      let filename = `${new Date().getTime()}-${randomName}.${
              file.subtype
          }`
      await file.move(path, {
        name: filename
      })

      if (file.moved()) {
        successes.push(file)
      } else {
        errors.push(file.error())
      }
    })
  )
  return { successes, errors }
}

module.exports = {
  strRandom,
  manageSingleUpload,
  manageMutipleUploads
}
