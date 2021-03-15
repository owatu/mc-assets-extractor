const fs = require("fs")
const path = require("path")

let pathAssets = " !CHANGE ME! " // /home/user/.minecraft/assets
let pathIndex = " !CHANGE ME! " // /home/user/.minecraft/assets/indexes/1.16.json

let index = JSON.parse(fs.readFileSync(pathIndex).toString())

Object.keys(index.objects).forEach((name) => {
  let object = index.objects[name]
  let hash = object.hash

  let pathObject = path.join(pathAssets, "objects", hash.substring(0, 2), hash)
  let pathOut = path.join(__dirname, "out", name)

  if (fs.existsSync(path.dirname(pathOut))) {
    fs.copyFileSync(pathObject, pathOut)
  } else {
    fs.mkdirSync(path.dirname(pathOut), { recursive: true })
    fs.copyFileSync(pathObject, pathOut)
  }
})
