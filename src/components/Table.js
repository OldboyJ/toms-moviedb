import React from 'react';

const Table = props => {
    console.log(props.movies)

    const renderRows = props.movies.map(movie => {
        console.log(movie);
        return (
            <tr>
                <td>{movie.movie_title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year_released}</td>
                <td>{movie.box_office_gross}</td>
                <td>{movie.grossed_per_year}</td>
            </tr>
        )
    })
    return (
        <div>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Year Released</th>
                        <th>Total Grossed</th>
                        <th>Grossed Per Year</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows}
                </tbody>
            </table>
        </div>
    )
}

export default Table;