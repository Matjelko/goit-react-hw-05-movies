import Searchbar from "../../components/Searchbar/Searchbar"
import MovieItem from "../../components/MovieItem/MovieItem"
import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types"

const MoviePage = () => {
    const KEY = "6cd416a210a971fc6ba2d58e4253069e"
    
    const [ movies, setMovies ] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("query") ?? "";

    // const visibleMovies = movies.filter((movie) => 
    //     movie.name.toLowerCase().includes(query.toLowerCase())
    // );

    const updateQueryString = (query) => {
        const nextParams = query !== "" ? { query } : {}
        setSearchParams(nextParams);
    }

    const handleSubmit = async event => {
        event.preventDefault()

        const input = event.target[0].value;
        // console.log(event)
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${input}`
  
        const fetchMovies = async () => {
            const response = await fetch(URL)
            const fetchedMovies = await response.json()
            setMovies(fetchedMovies.results)
        }
        fetchMovies()
    }

    return(
        <div style={{
            marginTop: 40
        }}>
            <Searchbar 
                handleSubmit={handleSubmit}
                value={query}
                onChange={updateQueryString}
            />
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

MoviePage.propTypes = {
    KEY: PropTypes.string,
    URL: PropTypes.string,
    handleSubmit: PropTypes.func,
    fetchMovies: PropTypes.func
}

export default MoviePage