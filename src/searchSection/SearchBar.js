import React, {Component} from 'react';
import axios from 'axios';
import MovieComponent from './userSection/MovieComponent'

import '../App.css'

export default class SearchBar extends Component{
    constructor(){
        super()

        this.state = {
            input: '',
            api_key:"04e815387301602505c1d844776145df",
            moviesArr: [],
            userMovieArr: []
        }
        this.filterSearch = this.filterSearch.bind( this )
        this.addToUser = this.addToUser.bind( this )
        this.handleInput = this.handleInput.bind( this )
    }
    filterSearch(){
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.api_key}&language=en-US&query=${this.state.input}&page=1&include_adult=false`).then((res) =>{
            this.setState({
                moviesArr: res.data.results,
            })
        })
    }
    handleInput(val){
        this.setState({
            input: val
        })
    }
    addToUser(e){
        axios.post('/api/usermovies', e).then(res =>{
            this.state.userMovieArr.push(res.data)
        })
        console.log(this.state.userMovieArr)
    }


    render(){
        let moviesSearchList = this.state.moviesArr.map((e,i) => {
            return(
                <p key={e.id}><span className="searchArrayTitle">{e.title}</span> <span className="searchArrayRelease">{e.release_date}</span>
                <button onClick = {() => this.addToUser(e)}>+</button>
                </p>
            )
        })
        return(
            <div>
                <input placeholder="Search for Movies!" onChange = {(e) => this.handleInput(e.target.value)} />
                <button onClick = {() => this.filterSearch()}>Search</button>
                {moviesSearchList}
                <MovieComponent userMovieArr={this.state.userMovieArr}/>
            </div>
        )
    }
}

// {
//     id: 76342,
//     title: "Mad Max: Fury Road",
//     overview: "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
//     "release_date": "2015-05-13"
// },
// {
//     id: 300,
//     title: "The Science of Sleep",
//     overview: "A man entranced by his dreams and imagination is lovestruck with a French woman and feels he can show her his world.",
//     release_date: "2006-02-11"
// }