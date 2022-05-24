import { useState, useRef } from "react";
import {FaSearch} from "react-icons/fa"
export function GoogleLink(){
    const searchInput = useRef("");
    const [searchText, setSearchText] = useState("");
    return(
        <div className="searchbar">
          <form
            method="get"
            action="https://www.google.com/search"
            className="search-form"
            target="_blank"
            rel="noopener noreferrer"
          >
            <input
              type="text"
              name="q"
              className="search-input"
              placeholder="Google Search"
              ref={searchInput}
              value={searchText}
              onChange={() => setSearchText(searchInput.current.value)}
            />
            <button className="floating-btn" type="submit">
            <span className="floating-btn-icon">
              {/* <i className="fas fa-search"></i> */}
              <FaSearch/>
            </span>
            </button>
          </form>
        </div>
    );
}