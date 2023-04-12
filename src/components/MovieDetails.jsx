import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import Cast from "./Cast";
// import Reviews from "./Reviews";

const MovieDetails = () => {
    const KEY = "6cd416a210a971fc6ba2d58e4253069e"
    const { id } = useParams();
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`

    const [movies, setMovies ] = useState(null)

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

    const { title, poster_path, vote_average, overview, genres } = movies
    return(
        <>
            Now showing movie with id - {id}
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${title}`} />
            </div>
            <div>
                <h3>{title}</h3>
                <p>User score: {vote_average}</p>

                <h3>Overview</h3>
                <p>{overview}</p>

                <h3>Genres</h3>
                <ul>
                    {genres.map((genre) => (
                        <li>{genre.name}</li>
                    ))}
                </ul>
            </div>
            <div>Additional information</div>
            <ul>
                <Link to={`/movies/${id}/cast`}><li>Cast</li></Link>
                <Link to={`/movies/${id}/reviews`}><li>Reviews</li></Link>
            </ul>
            {/* <Cast/> */}
            {/* <Reviews/> */}
        </>
    )
}

export default MovieDetails

//Zmiany
//Zmiany ostatnie