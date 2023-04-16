import { NavLink } from "react-router-dom";
import styled from "styled-components"
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  color: black;
  font-size: 20px;
`

const MovieItem = ({ id, title }) => {
    const location = useLocation();

    return(
        <li id={id}>
            <StyledNavLink to={`/movies/${id}`} state={{ from: location }}>{title}</StyledNavLink>
        </li>
    )
}

MovieItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string
}

export default MovieItem