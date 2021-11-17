const fs = require('fs')
const express = require('express')
const app = express()

const port = 8000

app.get('/', (req, res) => {
    try {
        let data = fs.readFileSync('count.txt', 'utf8')
        res.send(`<h1>${data}</h1>`)
        fs.writeFileSync('count.txt', `${Number(data) + 1}`)
    } catch (e) {
        fs.writeFileSync('count.txt', `${0 + 1}`)
        res.send(`<h1>0</h1>`)
    }
})

app.listen(port)