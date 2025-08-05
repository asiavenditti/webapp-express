require('dotenv').config()
const express = require('express')
const app = express()
const moviesRouter = require('./routes/moviesRouter')
const errorsHandler = require('./middlewares/errorsHandler')
const notFound = require('./middlewares/notfound')
app.use(express.static('public'))
const PORT = process.env.PORT


const cors = require("cors");
app.use(cors());
app.use(express.json())


app.use('/api/movies', moviesRouter)

app.use('/movies_cover', express.static('movies_cover'));

app.get('/', (req, res) => {

    res.send('Welcome to my App!')
})


app.use(errorsHandler)

app.use(notFound)

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})
