import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

const MovieItem = ({ id, title }) => {

    // console.log(`${title} : ${id}`) // show id

    return(
        <li id={id}>
            <Link to={`${id}`}>{title}</Link>
        </li>
    )
}

export default MovieItem