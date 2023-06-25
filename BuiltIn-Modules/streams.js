const fs = require('fs')

const readableStream = fs.createReadStream("./readFile.txt", {
    encoding: "utf-8",
    highWaterMark: 2
})
const writeableStream = fs.createWriteStream("./streamFile.txt")

//Streams emit an event called 'data' and are instances of event emitter class
readableStream.on("data", (chunk) => {
    console.log(chunk)
    writeableStream.write(chunk)
})