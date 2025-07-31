require('dotenv').config()
const express = require('express')
const app = express()
const moviesRouter = require('./routes/moviesRouter')
const PORT = process.env.PORT


app.use('/api/movies', moviesRouter)



app.get('/', (req, res) => {

    res.send('Welcome to my App!')
})


app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})
