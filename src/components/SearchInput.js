import "../styles/components/searchInput.css";
import { useState } from "react";

const SearchInput = ({ searchMovies }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            if (query.length > 0) {
                searchMovies(query);
            }
        }
    };

    return (
        <div className="search-input-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search for movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSubmit}
            />
            <button
                className="search-button"
                type="button"
                onClick={() => {
                    if (query.length > 0) {
                        searchMovies(query);
                    }
                }}
            >
                <i className="fa fa-search"></i>
            </button>
        </div>
    );
};

export default SearchInput;
