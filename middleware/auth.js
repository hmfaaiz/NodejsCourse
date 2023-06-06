

const log=()=>{
    fs.appendFile("./log.txt",`${new Date.toString()} ${req.ip} ${req.path} ${req.method}`)
}

module.exports=log;