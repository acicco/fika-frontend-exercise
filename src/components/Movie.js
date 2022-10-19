import "../styles/components/movie.css";

const Movie = ({ movie, genres, filterByGenre}) => {
    const getGenreName = (genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre.name;
    };

    return (
        <div className="movie">
            <div className="movie-card">
                <div className="movie-card-image">
                    <img
                        src={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                : "https://via.placeholder.com/500x750/232323/FFFFFF?text=No+Image+Available"
                        }
                        alt={movie.title}
                    />
                </div>
                <div className="card-content column">
                    <div className="movie-title">{movie.title}</div>
                </div>
                {movie.genre_ids.length > 0 && (
                    <div className="movie-genres">
                        {movie.genre_ids.map((genreId) => (
                            <span key={genreId} className="movie-genre" onClick={() => filterByGenre(genreId)}>
                                {getGenreName(genreId)}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Movie;
