const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
});



app.get('/', (req, res) => {

    res.send('Welcome to my App!')
})


// index

app.get('/api/movies', (req, res) => {

    res.send('Show all the movies')
})


// show

app.get('api/movies/:id', (req, res) => {

    console.log('Show a single movie')
    res.send(`show the movie ${req.params.id}`)
})