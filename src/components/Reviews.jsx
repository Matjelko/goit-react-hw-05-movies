import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
            <div>We don't have any reviews for this movie.</div>
        )
    }

    const { results } = movies

    return(
        <>
            <ul>
                {results.map((result) => (
                    <li key={result.id}>
                        <span>Author: {result.author}</span>
                        <p>{result.content}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Reviews