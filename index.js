const { sub, add } = require("./module")
const file = require('fs');

// console.log(add(1,5))

// file.mkdirSync("filefolder")
// file.writeFileSync('./filefolder/test.txt',`${new Date().toLocaleString()} Hello world\n`)
file.appendFileSync('./filefolder/test.txt',`${new Date().toLocaleString()} This is again append statement\n`)
const read = file.readFileSync('./filefolder/test.txt', 'utf-8')
const stats = file.statSync('./filefolder/test.txt')
const readableDate = {
    "Creation": new Date(stats.birthtimeMs).toLocaleString(),
    "Access": new Date(stats.atimeMs).toLocaleString(),
    "Modified": new Date(stats.mtimeMs).toLocaleString(),
    "LastAccess": new Date(stats.ctimeMs).toLocaleString()
}

// file.cpSync("./filefolder/test.txt","copy.text")
// file.unlinkSync("copy.text")
console.log(read)
// console.log(stats)
console.log(readableDate)






