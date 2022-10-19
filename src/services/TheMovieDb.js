class TheMovieDb {
    static async getMovies(page) {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=${
                    page ?? 1
                }&include_adult=false`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    static async searchMovies(query, page) {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&query=${query}&page=${
                    page ?? 1
                }&include_adult=false`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    static async getMovieGenres() {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default TheMovieDb;
