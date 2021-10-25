import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./movie.css"
// style={{backgroundColor : "red"}}
function Movie({id, year, title, summary, poster, genres}){
    return (
      <Link to={{
          pathname:`/movie/${id}`,
          state:{
              year,
              title,
              summary,
              poster,
              genres
          }
      }}>
            <li className="movie">
                <img src={poster} alt={title} title={title}/>
                <ul className="movie_data">
                    <li className="movie_title" >{title}</li>
                    <li className="movie_year">{year}</li>
                    <ul className="genres"> 
                    {genres.map(( genre , index) =>(
                        <li key= {index} className="genres_genre"> {genre} </li>
                    ))}
                    </ul>
                    <li className="movie_summary">{summary.slice(0,100)}...</li>
                
                </ul>
            </li>
      </Link>  
    )
}
Movie.prototype = {
    id : PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;