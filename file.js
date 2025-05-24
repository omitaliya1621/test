const { isUtf8 } = require('buffer');
const fs = require('fs');
const os=require('os')

// console.log(os.cpus().length)

// console.log("1")
// fs.readFile("test.txt", "utf-8",(err,res)=>{console.log(res)})
// // console.log(result)
// console.log("2")
// console.log("3")
// fs.writeFileSync('./test.txt',"my name is om")
// const result=fs.readFile('./test.txt',"utf-8",(err,result)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(result)
//     }
// })
// console.log(result)

// fs.appendFileSync('./test.txt',new Date().toLocaleString()+"\n")
// fs.copyFileSync("./test.txt","./copy.txt")
// fs.unlinkSync('./copy.txt')
// console.log(fs.statSync('./test.txt').isFile)
// fs.mkdirSync("mo")