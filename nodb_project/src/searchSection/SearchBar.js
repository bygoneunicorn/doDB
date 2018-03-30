import React, {Component} from 'react';
import axios from 'axios'

export default class SearchBar extends Component{
    constructor(){
        super()

        this.state = {
            input: '',
            api_key:"04e815387301602505c1d844776145df",
            moviesArr: []

        }
    }
    filterSearch(){
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.api_key}&language=en-US&query=${this.state.input}&page=1&include_adult=false`).then((res) =>{
            this.state.moviesArr.push(res.results)
        })
    }
    handleInput(val){
        this.setState({
            input: val
        })
    }
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/1924?api_key=${this.state.api_key}`).then( res => {
            this.state.moviesArr.push(res.results)
        });
      }


    render(){
        let moviesSearchList = this.state.moviesArr.map((e) => {
            return(
            <p  key={e.id}>{e.title}</p>
            )
        })
        return(
            <div>
                <input onChange = {(e) => this.handleInput(e.target.value)} />
                <button onClick = {() => this.filterSearch()}>Search</button>
                {moviesSearchList}
            </div>
        )
    }
}