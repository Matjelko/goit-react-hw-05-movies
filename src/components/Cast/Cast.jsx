import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PropTypes from 'prop-types'
import "./Cast.css"

const Cast = () => {
    const KEY = "6cd416a210a971fc6ba2d58e4253069e"
    const { id } = useParams()
    const URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`

    const [ movies, setMovies ] = useState()

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(URL)
            const fetchedMovies = await response.json()
            setMovies(fetchedMovies)
        }
        fetchMovies();
    }, [URL])

    if (!movies) {
        return <div>Loading...</div>;
    }

    const { cast } = movies

    return(
        <div className="cast__section">
            <ul className="cast__unlisted-list">
                {cast.map((el) => (
                    <li key={el.id}>
                        <img className="cast__poster" src={`https://image.tmdb.org/t/p/w500${el.profile_path}`} alt={el.name} />
                        <div className="cast__actor-data-section">
                            <p>{el.name}</p>
                            <span>{el.character}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

Cast.propTypes = {
    KEY: PropTypes.string,
    URL: PropTypes.string,
    id: PropTypes.number,
    fetchMovies: PropTypes.func,
    cast: PropTypes.array
}

export default Cast