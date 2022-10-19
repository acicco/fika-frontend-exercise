import TheMovieDb from "./services/TheMovieDb";
import SearchInput from "./components/SearchInput";
import Movies from "./components/Movies";
import Pagination from "./components/Pagination";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [movies, setMovies] = useState(null);
    const [genres, setGenres] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [query, setQuery] = useState("");

    const getMovies = async (pageNum) => {
        const data = await TheMovieDb.getMovies(pageNum);
        if (!data) {
            setMovies([]);
            return;
        }
        setMovies(data.results);
        setTotalPages(data.total_pages);
    };

    const getGenres = async () => {
        const data = await TheMovieDb.getMovieGenres();
        if (!data) {
            setGenres([]);
            return;
        }
        setGenres(data.genres);
    };

    const searchMovies = async (query, page) => {
        setQuery(query);
        const data = await TheMovieDb.searchMovies(query, page);
        if (!data) {
            setMovies([]);
            return;
        }
        setMovies(data.results);
        setTotalPages(data.total_pages);
        if (page) {
            setPage(page);
            return;
        }
        setPage(1);
    };

    useEffect(() => {
        getGenres();
        getMovies();
    }, []);

    useEffect(() => {
        if (query !== "") {
            searchMovies(query, page);
            return;
        }
        getMovies(page);
    }, [page]);

    return (
        <div className="container">
            <header className="column justify-center align-center">
                <h1 className="page-title">
                    <span className="fikaText">fika</span>Search
                </h1>
                <SearchInput searchMovies={searchMovies} />
            </header>
            <main className="main-container">
                {movies && movies.length === 0 && (
                    <div className="no-results">
                        <span>
                            No movies were found
                            <i className="far fa-frown"></i>
                        </span>
                    </div>
                )}
                {movies && movies.length > 0 && (
                    <>
                        <Pagination
                            page={page}
                            totalPages={totalPages}
                            setPage={setPage}
                        />
                        <Movies movies={movies} genres={genres} />
                        <Pagination
                            page={page}
                            totalPages={totalPages}
                            setPage={setPage}
                        />
                    </>
                )}
            </main>
        </div>
    );
}

export default App;
