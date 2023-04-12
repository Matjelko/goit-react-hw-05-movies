import { Link, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import MoviePage from "./MoviePage";
import MovieDetails from "./MovieDetails";
import Cast from "./Cast";
import Reviews from "./Reviews";

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/movies" element={<MoviePage/>}/>
        <Route path="/:id" element={<MovieDetails/>}/>
        <Route path="/movies/:id" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App
