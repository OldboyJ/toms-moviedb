import React, { Component } from 'react';
import Table from './Table';
import movieApi from '../api/movies-api';

class App extends Component {

    // 'https://tommartin-moviesapi.herokuapp.com'
    
    state = {
        movieList: []
    }

    componentDidMount = async () => {
        const response = await movieApi.get('/api/movies');
        console.log(response);
        // const updatedMovieList = response.data.map(movie => {
        //     return {...movie, ['grossed_per_year']: movie.box_office_gross / (2019 - movie.year_released)}
        // })
        this.setState({movieList: response.data})
    }
    
    render() {
        return (
            <div>
                <Table movies={this.state.movieList}/>
            </div>
        )
    }
}

export default App;