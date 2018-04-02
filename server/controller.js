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

        const movieIndex = userMovieArr.findIndex( movie => movie.id === id)
        let movie = userMovieArr[ movieIndex ]

        userMovieArr[ movieIndex ] = {
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            release_date: movie.release_date,
            note: note
        }
        res.status(200).send( userMovieArr )
    },
    delete: (req,res) =>{
        console.log(req.params)
        const {id} = req.params
        // console.log(id)
        // const movieIndex = userMovieArr.findIndex( movie => movie.id === id )
        let index = null
        userMovieArr.forEach((movie,i) => {
            if(movie.id === i){
                index = i;
            }
        })
        userMovieArr.splice( index, 1)
        res.status(200).send( userMovieArr )
    }
}


//Endpoint handler functions 