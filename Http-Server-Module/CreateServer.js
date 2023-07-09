const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res) => {
    //To read post data
    req.on('data', chunk => {
        console.log('chunk of data ', JSON.parse(chunk))
    })
    const DetailsResponse = {  //JavaScript Object type
        "firstName": "Alekya",
        "lastName": "Paladugu"
    }
    // res.writeHead(200, {"Content-Type": "text/plain"})
    res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify(DetailsResponse))   //Stringify to convert JS Object to String/JSON

    // res.writeHead(200, {"Content-Type": "text/html"})
    // const name = "Alekya"
    // fs.createReadStream('./example.html','utf-8').pipe(res)
    // let html = fs.readFileSync('./example.html','utf-8')
    // html = html.replace("{{name}}", name)
    // res.end(html)
})

server.listen(3000, () => {
    console.log("Server is listening on Port 3000")
})