var userMovieArr = [ { "id": 788,
    "overview": "Loving but irresponsible dad Daniel Hillard, estranged from his exasperated spouse, is crushed by a court order allowing only weekly visits with his kids. When Daniel learns his ex needs a housekeeper, he gets the job -- disguised as an English nanny. Soon he becomes not only his children\"s best pal but the kind of parent he should have been from the start.",
    "release_date": "1993-11-24",
    "title": "Mrs. Doubtfire" },
  { "id": 489,
    "title": "Good Will Hunting",
    "overview": "Will Hunting has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau, who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he will get treatment from therapist Sean Maguire.",
    "release_date": "1997-12-05" },
  { "id": 343693,
    "title": "Aladdin",
    "overview": "A young man's life is turned around with the help of a genie inside a lamp.",
    "release_date": "1992-04-27" } ]

module.exports={
    read:(req,res) =>{
        res.status(200).send( userMovieArr )
    },
    create:(req,res) =>{
        const {id, title, overview, release_date} = req.body;
        userMovieArr.push({id, title, overview, release_date})
        console.log(userMovieArr)
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