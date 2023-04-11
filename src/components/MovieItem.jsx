// import PropTypes from 'prop-types';

const MovieItem = ({ id, title }) => {
    return(
        <li id={id}>
            {title}
        </li>
    )
}

export default MovieItem