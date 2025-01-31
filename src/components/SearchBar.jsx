import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css"

export default function SearchBar() {
    return (
        <>
            <input className="search-input" type="search" name="search" id="search" placeholder="Search mintMarket" />
            <button className="btn search-btn">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </>
    );
}