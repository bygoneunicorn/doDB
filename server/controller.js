var userMovieArr = []

module.exports={
    read:(req,res) =>{
        res.status(200).send( userMovieArr )
    },
    create:(req,res) =>{
        const {id, title, overview, release_date} = req.body;
        userMovieArr.push({id, title, overview, release_date})
        res.status(200).send ( userMovieArr )
    },
    // createNote:(req,res) =>{
    //     const {id, note} = req.body;
    //     const movieIndex = userMovieArr.findIndex( movie => +movie.id === +id)
    //     let movie = userMovieArr[ movieIndex ]

    //     userMovieArr[ movieIndex ] = {
    //         id: movie.id,
    //         title: movie.title,
    //         overview: movie.overview,
    //         release_date: movie.release_date,
    //         note: note
    //     }
    //     res.status(200).send ( userMovieArr )
    // },
    updateNote: (req,res) =>{
        const {id, note} = req.body;
        // const updateId = req.params.id
        const movieIndex = userMovieArr.findIndex( movie => +movie.id === +updateId)
        let movie = userMovieArr[ movieIndex ]

        userMovieArr[ movieIndex ] = {
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            release_date: movie.release_date,
            note: note
        }
        res.status(200).send ( userMovieArr[movieIndex].note )
    },
    delete: (req,res) =>{
        const {id} = req.props
        const movieIndex = userMovieArr.findIndex( movie => +movie.id === +id )
        userMovieArr.splice( movieIndex, 1)
        userMovieArr[ movieIndex ] = {
            // id: movie.id,
            // title: movie.title,
            // overview: movie.overview,
            // release_date: movie.release_date,
            // note: ''           
        }
        res.status(200).send ( userMovieArr )
    }
}


//Endpoint handler functions 