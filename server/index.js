require('.env').config()
const express = require('express')
const { SERVER_PORT }= process.env
const app = express()

app.use(express.json())

app.use(express.static( `${__dirname}/../build`) )



const port = SERVER_PORT || 4040;

app.listen(port, () => console.log(`Server running on port ${port}`))