import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
        <>
            <ul>
                {cast.map((el) => (
                    <li key={el.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${el.profile_path}`} alt={el.name} />
                        <p>{el.name}</p>
                        {el.character}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Cast