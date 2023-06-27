const http = require("http")

const server = http.createServer((req,res) => {
    const DetailsResponse = {  //JavaScript Object type
        "firstName": "Alekya",
        "lastName": "Paladugu"
    }
    // res.writeHead(200, {"Content-Type": "text/plain"})
    res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify(DetailsResponse))   //Stringify to convert JS Object to String/JSON
})

server.listen(3000, () => {
    console.log("Server is listening on Port 3000")
})