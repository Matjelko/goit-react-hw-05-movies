import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PropTypes from "prop-types"
import "./Reviews.css"

const Reviews = () => {
    const KEY = "6cd416a210a971fc6ba2d58e4253069e"
    const { id } = useParams()
    const URL = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}`
    
    const [ movies, setMovies ] = useState()

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(URL)
            const fetchedMovies = await response.json()
            setMovies(fetchedMovies)
        }
        fetchMovies()
    }, [URL])

    if(!movies){
        return(
            <div>Loading...</div>
        )
    }

    // if(!movies){
    //     return(
    //         <div>We don't have any reviews for this movie.</div>
    //     )
    // }

    const { results } = movies

    return(
        <div className="reviews__section">
            {movies.results.length === 0 ? (
                <div>We don't have any reviews for this movie.</div>
            ) : (
            <ul className="reviews__unlisted-list">
                {results.map((result) => (
                    <li key={result.id}>
                        <span className="reviews__author">Author: {result.author}</span>
                        <p className="reviews__paragraph">{result.content}</p>
                        </li>
                ))}
            </ul>
            )}
        </div>
    )
}

Reviews.propTypes = {
    KEY: PropTypes.string,
    URL: PropTypes.string,
    id: PropTypes.number,
    handleSubmit: PropTypes.func,
    fetchMovies: PropTypes.func
}

export default Reviews