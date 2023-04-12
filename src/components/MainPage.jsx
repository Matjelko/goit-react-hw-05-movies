import { useState, useEffect } from "react"
import MovieItem from "./MovieItem"
// import PropTypes from 'prop-types';

const MainPage = () => {
    const KEY = "6cd416a210a971fc6ba2d58e4253069e"
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`

    const [ movies, setMovies ] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(URL)
            const fetchedMovies = await response.json()
            setMovies(fetchedMovies.results)
        }
        fetchMovies();
    }, [URL])
    
    return(
        <div>
            <h2>Trending today</h2>
            <ul>
                {movies.map(movie => (
                    <MovieItem
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                    />
                ))}
            </ul>
        </div>
    )
}

export default MainPage