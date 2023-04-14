import { NavLink } from "react-router-dom";
import styled from "styled-components"
import PropTypes from 'prop-types';
import "./MovieItem.css"

const StyledNavLink = styled(NavLink)`
  color: black;
  font-size: 20px;
`

const MovieItem = ({ id, title }) => {
    return(
        <li id={id}>
            <StyledNavLink to={`/movies/${id}`}>{title}</StyledNavLink>
        </li>
    )
}

MovieItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string
}

export default MovieItem