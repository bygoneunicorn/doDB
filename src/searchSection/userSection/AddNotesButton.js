import React, {Component} from 'react';
import axios from 'axios'

export default class AddNotesButton extends Component{
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
    addNote(id){
        axios.put(`/api/usermovies/:${id}`).then((res) =>{
            this.setState({
                note: res.data
            })
        })
    }
    render(){
        const {id} = this.props.userMovieArr
        return(
            <span>

            
            </span>
        )
    }
}