import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

const MovieItem = ({ id, title }) => {
    return(
        <li id={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
        </li>
    )
}

export default MovieItem