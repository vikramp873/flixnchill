import React, { useEffect, useState } from 'react';
import axios from "axios"
import './row.css'
const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {

   const [movie, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState("");

   console.log("process.env.REACT_APP_API", process.env.REACT_APP_API)

   useEffect(() => {
      const fetchData = async () => {
         const response = await axios.get(`${process.env.REACT_APP_API}${fetchUrl}`)
         setMovies(response.data.results);
         return response
      }
      fetchData();
   }, [])


   return (
      <div className='row'>
         <h2>{title}</h2>
         <div className="row-posters">
            {movie && movie.map((movies, index) => {
               { console.log(movies.original_title) }
               return (
                  <div>
                     <img
                        key={index}

                        className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
                        src={`${base_url}${isLargeRow ? movies.poster_path : movies.backdrop_path}`}
                        alt={movies.name} />
                     <p>{movies.original_title}</p>
                  </div>
               )


            })
            }
         </div>

      </div>)
};

export default Row