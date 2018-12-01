import JSZip from 'jszip'

var zipFile = undefined

function getFolderDepth(pth) {
  return pth.split('/').length - 1
}

var funcs = {
  loadFile: (fileObj, callback) => {
    var reader = new FileReader()

    // Read file to and give to JSZip
    reader.onloadend = (readerOutput) => {
      zipFile= new JSZip()
      zipFile.loadAsync(reader.result)
      .then(callback)
    }
    reader.readAsArrayBuffer(fileObj)
  },

  filesInPath: (relativePath) => {
    // E.G /files/folder/image.png is depth 2
    var folderDepth = getFolderDepth(relativePath)
    var returnVals = {
      files: [],
      folders: []
    }

    for (let f in zipFile.files) {
      // We don't count ourselves as an empty file
      if (f === relativePath) {
        continue
      }
      
      if (f.includes(relativePath)) {
        const fDepth = getFolderDepth(f)
        const relName = f.replace(relativePath, '')

        if (fDepth === folderDepth) {
          // It's a file
          returnVals.files.push(relName)
          continue
        }

        console.log(`${f} depth: ${fDepth}, my depth: ${folderDepth}`)
        if ((fDepth === folderDepth + 1) && /\/$/.test(f)) {
          // It's a sub-folder!
          returnVals.folders.push(relName.replace('/', ''))
        }
      }
    }

    console.log(`Files in ${relativePath}:`)
    console.dir(returnVals)

    return returnVals
  }
}

export default funcs
