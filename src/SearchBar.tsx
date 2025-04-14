import React from "react";

type SearchQuery = {
    query: string;
    setQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = (props: SearchQuery) => {   
    return (
        <div className="search-bar">
            <input type={props.query} id="search" placeholder="Search contacts..." className="search-input" onChange={e => props.setQuery(e)} />
        </div>
    );
}

export default SearchBar;