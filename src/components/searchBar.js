import React, {useState} from 'react';
import axios from 'axios';

const searchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    if (searchInput.length > 0) {
        // This 'articles' is a placeholder for API linkage
        articles.filter((articles) => {
            return articles.name.match(searchInput);
        });
    }
    return <form>
        <input type="text" name="search" id='search' placeholder='Search Hacker News' onChange={handleChange} value={searchInput} />
        <button>Search</button>
    </form>
};

export default searchBar;