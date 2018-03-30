import React, {Component} from 'react';
import AddButton from './AddButton';
import SearchBar from './SearchBar';

export default class MovieList extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <SearchBar />
        )
    }
}