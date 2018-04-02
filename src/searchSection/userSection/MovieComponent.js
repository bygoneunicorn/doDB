import React, {Component} from 'react';
import axios from 'axios'
import './UserSection.css'

export default class MovieComponent extends Component{
    constructor(){
        super()

        this.state = {
            input: '',
            noteArr: []
        }
        // this.state.handleInput = this.state.handleInput.bind( this );
        // this.state.addNote = this.state.addNote.bind( this );
        // this.state.deleteNote = this.state.deleteNote.bind( this );
    }
    handleInput(val){
        this.setState({
            input: val
        })
    }
    addNote(movie, note){
        movie.note = note
        console.log(movie)
        axios.put(`/api/usermovies`, (movie)).then((results) =>{
            this.props.changeThisUserMovieArr(results.data)
            console.log(results.data)
        })
    }
    // addNote(movie,note){
    //     console.log(note)
    //     this.state.noteArr.push(note);
    //     console.log(this.state.noteArr)
    // }
    deleteMovie(movie){
        console.log(movie)
        axios.delete(`/api/usermovies/${movie.id}`).then((results)=>{
            this.props.changeThisUserMovieArr(results.data)
        })
    }

    render(){
        let movieList = this.props.userMovieArr.map((e,i) =>{
            return(
                <div key={i} className="movieList">

                        <span className="title">{e.title}</span><br/> 
                        <span className="overview">Overview: {e.overview}</span><br/>
                        <span className="release">Release Date: {e.release_date}</span>
                        <br/>
                        <span className="notes">Personal Notes: {e.note}</span>
                        <br/>

                        <input placeholder="Add Movie Note" onChange={(e) => this.handleInput(e.target.value)} className="input"/>
                        <button onClick={()=> this.addNote(e,this.state.input)}>Save Note</button>
                        <br />
                        <button onClick={()=> this.deleteMovie(e)}>Delete Movie From List</button>

                </div>
            )
        })
            
        return(
            <section><h2>Your Movie List</h2>{movieList}</section>
        )
    }
}