const fs = require('fs')
const path = require('path')


/*
 * Takes a folderPath and the depth of the
 * file with an unknown or variable name.
 * Returns the filename.
 */
const getFileName = (folderPath, depth) => {
  const fileNames = fs.readdirSync(path.resolve(__dirname, folderPath))

  if (depth > fileNames.length - 1)
    return
  return fileNames[depth]
}

/*
 * Takes a folderPath and returns an
 * array of files contained in the folder.
 */
const getFileNames = (folderPath) => {
  return fs.readdirSync(path.resolve(__dirname, folderPath))
}

module.exports = {
  getFileName,
  getFileNames
}
