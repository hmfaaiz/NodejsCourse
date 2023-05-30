// const { sub, add } = require("./module")
// const file = require('fs');

// // console.log(add(1,5))

// // file.mkdirSync("filefolder")
// // file.writeFileSync('./filefolder/test.txt',`${new Date().toLocaleString()} Hello world\n`)
// file.appendFileSync('./filefolder/test.txt',`${new Date().toLocaleString()} This is again append statement\n`)
// const read = file.readFileSync('./filefolder/test.txt', 'utf-8')
// const stats = file.statSync('./filefolder/test.txt')
// const readableDate = {
//     "Creation": new Date(stats.birthtimeMs).toLocaleString(),
//     "Access": new Date(stats.atimeMs).toLocaleString(),
//     "Modified": new Date(stats.mtimeMs).toLocaleString(),
//     "LastAccess": new Date(stats.ctimeMs).toLocaleString()
// }

// // file.cpSync("./filefolder/test.txt","copy.text")
// // file.unlinkSync("copy.text")
// // console.log(read)
// // // console.log(stats)
// // console.log(readableDate)


// //Async and Sync

// // console.log(1)
// file.readFile('./filefolder/test.txt',(err,res)=>{
//     if(err){
//             console.log(err)

//     }
//     else{
//         console.log("done")
//     }
// })

// const readAgain = file.readFileSync('./filefolder/test.txt', 'utf-8')
// // console.log(readAgain)
// // console.log(2)

// const threats=require("os")
// console.log(threats.cpus().length)


//Now Creating Web server
const filelog = require('fs');
const http=require('http')

const webServer=http.createServer((req,res)=>{
   
    filelog.appendFile("./filefolder/test.txt",`${new Date().toLocaleString()} ${req.url}\n`,(err,data)=>{
        switch(req.url){
            case "/":res.end("You are in Home Page");
                break
            case "/about":res.end("We are developer");
                break
            case "/login":res.end("Please register first");
                break
            default:
                res.end("404 Error");
        }
    })
    
})
webServer.listen(9000,()=>{
    console.log("Server is Connected")
})

