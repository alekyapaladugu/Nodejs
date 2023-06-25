const fs= require("fs")

const fileContentsSync = fs.readFileSync('./readFile.txt','utf-8') //Synchronous - Buffer return type
console.log(fileContentsSync)

fs.readFile('./readFile.txt','utf-8',(error, data) => {     //Asynchronous - Buffer return type
    if(error)
        console.log(error)
    else
        console.log(data)
})

fs.writeFileSync('./writeFile.txt','I am a Master\'s student')

fs.writeFile('./writeFile.txt','I am a Master\'s student Async', (error) => {
    if(error)
        console.log(error)
    else {
        console.log('File written')
    }
})
