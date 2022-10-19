import TheMovieDb from "./services/TheMovieDb";
import SearchInput from "./components/SearchInput";
import Movies from "./components/Movies";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);

    const getMovies = async () => {
        const data = await TheMovieDb.getMovies();
        setMovies(data.results);
    };

    const getGenres = async () => {
        const data = await TheMovieDb.getMovieGenres();
        setGenres(data.genres);
    };

    const searchMovies = async (query) => {
        const data = await TheMovieDb.searchMovies(query);
        setMovies(data.results);
    };

    useEffect(() => {
        getGenres();
        getMovies();
    }, []);

    return (
        <div className="container">
            <header className="column justify-center align-center">
                <h1 className="page-title">
                    <span className="fikaText">fika</span>Search
                </h1>
                <SearchInput searchMovies={searchMovies} />
            </header>
            <main className="main-container">
                {movies.length > 0 && <Movies movies={movies} genres={genres}/>}
            </main>
        </div>
    );
}

export default App;
