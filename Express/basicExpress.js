const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send('Welcome to Express Web Server')
})

app.get('/weather', (req, res) => {
    res.send('Your Weather')
})

app.listen(3000, () => {
    console.log('Server is running')
})