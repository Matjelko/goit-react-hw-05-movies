import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components"
import PropTypes from 'prop-types';
import "./MovieDetails.css"

const StyledNavLink = styled(NavLink)`
    color: black;
    list-style-type: none;

    &.active {
        color: lightblue;
    }
`

const MovieDetails = () => {
    const KEY = "6cd416a210a971fc6ba2d58e4253069e"
    const { id } = useParams()
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`

    const [movies, setMovies ] = useState()

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
            <div style={{
                marginTop: 40,
                display: 'flex'
            }}>
                {/* Now showing movie with id - {id} */}
                <div>
                    <img className="movieDetails__poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${title}`} />
                </div>
                <div className="movieDetails__section">
                    <h3 className="movieDetails__header">{title}</h3>
                    <p className="movieDetails__paragraph">User score: {vote_average}</p>
                    <hr/>

                    <h3 className="movieDetails__header">Overview</h3>
                    <p className="movieDetails__paragraph">{overview}</p>
                    <hr/>

                    <h3 className="movieDetails__header">Genres</h3>
                    <ul>
                        {genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    <hr/>
                </div>
                
            </div>
            <div>
                <h4 className="movieDetails__header--additional">Additional information</h4>
                <ul className="movieDetails__unlisted-list">
                    <li className="movieDetails__unlisted-list--list-item">
                        <StyledNavLink to={`/movies/${id}/cast`}>Cast</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to={`/movies/${id}/reviews`}>Reviews</StyledNavLink>
                    </li>
                </ul>
                <hr/>
                <Outlet/>
            </div>
        </>
    )
}

MovieDetails.propTypes = {
    KEY: PropTypes.string,
    URL: PropTypes.string,
    id: PropTypes.number,
    fetchMovies: PropTypes.func,
}

export default MovieDetails