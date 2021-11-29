const fs = require('fs')
const path = require('path')
const _ = require('lodash')

const root = path.resolve(__dirname, '../trek')
let trekSidebarObject = {}
let fileArray = []

function getAllFiles(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach((file) => {
    const filePath = dirPath + '/' + file
    const fileStat = fs.statSync(filePath)
    const originPath = filePath.replace(root + '/', '').split('/')
    if (fileStat.isDirectory()) {
      const _obj = _.get(trekSidebarObject, originPath)
      if (!_obj) {
        _.set(trekSidebarObject, originPath, [])
      }
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
    } else {
      if (originPath.length > 1) {
        _.get(trekSidebarObject, originPath.slice(0, originPath.length - 1)).push(filePath.replace(root + '/', ''))
      }
      arrayOfFiles.push(path.join(dirPath, '/', file).replace(root + '/', ''))
    }
  })

  return arrayOfFiles
}

function flattenNestedKeyArrayToObject(item, collapsable = true) {
  // console.log('flattenNestedKeyArrayToObject: ', typeof item, JSON.stringify(item, null, 2))
  return _.keys(item).map((key) => (isNaN(+key) ? {
    title: key,
    collapsable,
    children: flattenNestedKeyArrayToObject(item[key]),
  } : item[key]?.replace(/README\.md$|\.md$/gi, '')))
}

function startToParse() {
  getAllFiles(path.resolve(__dirname, '../trek'), fileArray)
  const ret = flattenNestedKeyArrayToObject(trekSidebarObject, false)
  return ret
  // console.log(JSON.stringify(ret, null, 2))
}

module.exports.trekSidebar = startToParse()
