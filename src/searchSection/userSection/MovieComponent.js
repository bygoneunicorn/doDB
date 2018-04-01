import React, {Component} from 'react';
import axios from 'axios'

export default class MovieComponent extends Component{
    constructor(){
        super()

        this.state = {
            input: '',
            note: ''
        }
    }
    handleInput(val){
        this.setState({
            input: val
        })
    }
    addNote(e){
        axios.put(`/api/usermovies/:${e.id}`, e).then((res) =>{
            this.setState({
                note: res.data
            })
        })
    }

    render(){
        let movieList = this.props.userMovieArr.map((e,i) =>{
            return(
                <p key={e[i].id}>
                    Title: {e[i].title}<br/> 
                    Overview: {e[i].overview}<br/>
                    Release Date: {e[i].release_date}
                    {console.log(e)}
                    <input placeholder="Add Movie Note" onChange={(e) => this.handleInput(e.target.value)}/>
                    <button onClick={()=> this.addNote(e)}>Add</button>
                    {this.state.note}
                </p>
            )
        })
            
        return(
            <section>{movieList}</section>
        )
    }
}