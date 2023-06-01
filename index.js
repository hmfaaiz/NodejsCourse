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



//Now Creating Web server *********************************


// const filelog = require('fs');
// const http = require('http')

// const webServer = http.createServer((req, res) => {
//     if (req.url === '/favicon.ico') return res.end();

//     filelog.appendFile("./filefolder/test.txt", `${new Date().toLocaleString()} ${req.method} ${req.url}\n`, () => {
//         switch (req.url) {
//             case "/":
//                 if (req.method === 'GET') res.end("You are in Home Page");
//                 break;
//             case "/about":
//                 if (req.method === 'GET') res.end("We are developer");
//                 break
//             case "/login":
//                 if (req.method === 'GET') res.end("Login Form");
//                 else if(req.method === 'POST') res.end("Success");
//                 break
//             default:
//                 res.end("404 Error");
//         }
//     })

// })
// webServer.listen(9000, () => {
//     console.log("Server is Connected")
// })


// Express api **************************


// const express = require('express');
// const app = express();
// const jsonData = require('./filefolder/MOCK_DATA')

// app.get("/", (req, res) => {
//     const html = `
//    <ul> ${jsonData.map((u) => `<li>${u.email}</li>`).join("")}
//    </ul>`
//     return res.send(html)
// })


// app.get("/users", (req, res) => {
//     return res.json(jsonData)
// })

// app.get("/users/:id", (req, res) => {
//     const id = Number(req.params.id)
//     const user = jsonData.find((user) => user.id === id);
//     return res.json(user)
// })

// app.listen(1000, (req, res) => {
//     console.log("Connected with api")
// })



// Express restful api **************************



const { json } = require('express');
const express = require('express');
const app = express();
const fs = require("fs");
const jsonData = require('./filefolder/MOCK_DATA.json')

app.use(express.json());


app.get("/api/users", (req, res) => {
    return res.json(jsonData)
})

app.post("/api/users", (req, res) => {

    jsonData.push({ ...req.body, id: jsonData.length + 1 })
    fs.writeFile('./filefolder/MOCK_DATA.json', JSON.stringify(jsonData), (err, data) => {
        if (err) {
            return res.json(err)
        }
        else {
            return res.json(jsonData)
        }

    })

})
    ;

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    const user = jsonData.find((user) => user.id === id);
    return res.json(user)
})



app.put("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    const a = fs.readFileSync("./filefolder/MOCK_DATA.json", 'utf-8')
    let data = JSON.parse(a);
    try{
        let user= data.map((obj)=>{
            if(obj.id===id){
                obj.id=id,
                obj.first_name= req.body.first_name !== undefined ? req.body.first_name:obj.first_name,
                obj.last_name= req.body.last_name !== undefined ? req.body.last_name:obj.last_name,
                obj.email= req.body.email !== undefined ? req.body.email:obj.email,
                obj.gender = req.body.gender !== undefined ? req.body.gender : obj.gender;

            }
            return obj;
          
            
        });
        fs.writeFile('./filefolder/MOCK_DATA.json', JSON.stringify(user), (err, data) => {
            if (err) {
                return res.json(err)
            }
            else {
                return res.json(user)
            }
    
        })
        

    }
    catch{

        return res.json("Invalid request")
    }


})



app.patch("/api/users:/id", (req, res) => {
    return res.json(jsonData)
})

app.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    // const user = jsonData.find((user) => user.id === id);
    // return res.json(user)

    const a = fs.readFileSync("./filefolder/MOCK_DATA.json", 'utf-8')
    let data = JSON.parse(a);
    try{
        const user = data.find((user) => user.id === id);
        console.log(data)


        // let user= data.map((obj)=>{
        //     if(obj.id===id){
        //        console.log("obj")

        //     }
            
          
            
        // });
        // console.log(user)
        // fs.writeFile('./filefolder/MOCK_DATA.json', JSON.stringify(user), (err, data) => {
        //     if (err) {
        //         return res.json(err)
        //     }
        //     else {
        //         return res.json(user)
        //     }
    
        // })
        

    }
    catch{

        return res.json("Invalid request")
    }
})


app.listen(1000, (req, res) => {
    console.log("Connected with api")
})
