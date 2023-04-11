import Searchbar from "./Searchbar"
import MovieItem from "./MovieItem"
import { useState } from "react"

const MoviePage = () => {
    const KEY = "6cd416a210a971fc6ba2d58e4253069e"
    
    const [ movies, setMovies ] = useState([])

    const handleSubmit = async event => {
        event.preventDefault()

        const input = event.target[0].value;
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${input}`
  
        const fetchMovies = async () => {
            const response = await fetch(URL)
            const fetchedMovies = await response.json()
            setMovies(fetchedMovies.results)
        }
        fetchMovies()
    }

    return(
        <>
            <Searchbar handleSubmit={handleSubmit}/>
            <ul>
                {movies.map(movie => (
                    <MovieItem
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                    />
                ))}
            </ul>
        </>
    )
}

export default MoviePage