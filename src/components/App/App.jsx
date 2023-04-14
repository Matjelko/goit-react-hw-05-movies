import { NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components"
import MainPage from "../HomePage/MainPage";
import MoviePage from "../MoviePage/MoviePage";
import MovieDetails from "../MovieDetails/MovieDetails";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  width: 80px;
  background-color: black;
  font-size: 20px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 10px;

  &.active {
    color: lightblue;
  }
`

const App = () => {
  return (
    <div style={{
      marginLeft: 20,
      marginTop: 20,
      maxWidth: 800
    }}>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/movies" element={<MoviePage/>}/>
        <Route path="/movies/:id" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<MainPage/>}/>
      </Routes>
    </div>
  );
};

export default App
