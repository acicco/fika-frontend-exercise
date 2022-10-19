import Movie from "./Movie";

const Movies = ({ movies, genres }) => {
    return (
        <div className="grid-4">
            {movies.map((movie) => (
                <Movie key={movie.id} movie={movie} genres={genres} />
            ))}
        </div>
    );
};

export default Movies;
