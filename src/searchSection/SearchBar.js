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
        this.changeThisUserMovieArr = this.changeThisUserMovieArr.bind( this )
        this.refreshRead = this.refreshRead.bind( this )
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
            // this.state.userMovieArr.push(res.data)
            // let temp = this.state.moviesArr.slice()
            // temp.push(res.data)
            this.setState({
                userMovieArr: res.data
            })
        })
    }
    changeThisUserMovieArr(res){
        this.setState({
            userMovieArr: res
        })
    }
    refreshRead(){
        axios.get(`/api/usermovies`).then((res) =>{
            this.setState({
                userMovieArr: res.data
            })
        })
    }


    render(){
        let moviesSearchList = this.state.moviesArr.map((e,i) => {
            return(
                <p className="searchMovieItems" key={i}>
                <span className="searchArrayTitle">{e.title}</span><br/>
                <button  className="addButton" onClick = {() => this.addToUser(e)}>+</button>
                <span className="searchArrayRelease">Release Date: {e.release_date}</span>
                </p>
            )
        })
        return(
            <div>
                <div className="searchList">
                    <div className="searchBox">
                        <input placeholder="Search for Movies!" onChange = {(e) => this.handleInput(e.target.value)} />
                        <button onClick = {() => this.filterSearch()}>Search</button>
                    </div>
                    {moviesSearchList}
                </div>
                <MovieComponent userMovieArr={this.state.userMovieArr} changeThisUserMovieArr={this.changeThisUserMovieArr} refreshReadFn={this.refreshRead}/>

            </div>
        )
    }
}
