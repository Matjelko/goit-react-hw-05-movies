import { NavLink, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react"
import styled from "styled-components"
const MainPage = lazy(() => import("../../pages/HomePage/MainPage"))
const MoviePage = lazy(() => import("../../pages/MoviePage/MoviePage"))
const MovieDetails = lazy(() => import("../../pages/MovieDetails/MovieDetails"))
const Cast = lazy(() => import("../Cast/Cast"))
const Reviews = lazy(() => import("../Reviews/Reviews"))

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/movies" element={<MoviePage/>}/>
          <Route path="/movies/:id" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<MainPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App
