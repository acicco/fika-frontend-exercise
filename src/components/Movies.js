import "../styles/components/movie.css";
import Movie from "./Movie";
import { useState, useEffect } from "react";

const Movies = ({ movies, genres }) => {
    const [selectedGenre, setSelectedGenre] = useState("all");
    const [filteredMovies, setFilteredMovies] = useState(movies);

    const filterByGenre = (genre) => {
        setSelectedGenre(genre);
        if (genre === "all") {
            setFilteredMovies(movies);
            return;
        }

        setFilteredMovies(
            movies.filter((movie) => movie.genre_ids.includes(+genre))
        );
    };

    useEffect(() => {
        setSelectedGenre("all");
        setFilteredMovies(movies);
    }, [movies]);

    return (
        <>
            <div className="filters">
                <i className="fas fa-filter"></i>
                <select
                    name="genre"
                    id="genre"
                    value={selectedGenre}
                    onChange={(e) => filterByGenre(e.target.value)}
                >
                    <option value="all">All</option>
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    ))}
                </select>
            </div>

            {filteredMovies.length === 0 && (
                <div className="no-results">
                    <span>No movies were found under this filter. <i className="far fa-frown"></i></span>
                </div>
            )}

            <div className="grid-4">
                {filteredMovies.map((movie) => (
                    <Movie key={movie.id} movie={movie} genres={genres} filterByGenre={filterByGenre}/>
                ))}
            </div>
        </>
    );
};

export default Movies;
