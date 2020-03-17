const fs = require("fs");

//callback

// fs.appendFile("test.txt", "Hello from test.txt", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file updated!");
//     }
// })

// fs.writeFile("test.txt", "File updated!", (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file updated")
//     }
// })

//readfile
fs.readFile("test.txt", (err, data)=>{
    if(err){
        console.log(err)
        // errorLogFunc("errLog.txt", err);
    }else{
        console.log(data.toString());
    }
})

// //logs files example
// errorLogFunc = (fileName, logtext) => {
//     fs.appendFile(fileName, logtext, (err)=>{
//         console.log(err)
//     })
// }

// fs.watch("test.txt", (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File Changed");
//     }
// })
