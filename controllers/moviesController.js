const connection = require('../database/connection')


// function index

function index(req, res) {

    const sql = 'SELECT * FROM movies'
    connection.query(sql, (err, result) => {
        if (err) return res.status(500).json({
            error: true,
            message: err.message
        })
        console.log(result)
        result.map(item => item.image = `http://localhost:3000/movies_cover/${item.image}`)
        res.json(result)

    })


}



// function show 

function show(req, res) {
    const { id } = req.params
    const sql = 'SELECT * FROM movies WHERE id = ?'

    connection.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({
            error: true,
            message: err.message
        })

        if (result.length === 0) {
            return res.status(404).json({
                error: true,
                message: 'Movie not found'
            })
        }

        const movie = result[0]

        const reviews = 'SELECT * FROM reviews WHERE movie_id = ?'
        connection.query(reviews, [id], (err, reviewsMovies) => {
            if (err) return res.status(500).json({
                error: true,
                message: err.message
            })

            movie.image = `http://localhost:3000/movies_cover/${movie.image}`
            movie.reviews = reviewsMovies

            res.json(movie)
        })
    })
}

module.exports = {
    index,
    show
}