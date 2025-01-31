import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"
import LogoName from "./LogoName";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <header>
            <div className="header-c">
                <div className="logo-c">
                    <LogoName />
                </div>
                <div className="search-bar-c">
                    <SearchBar />
                </div>
                <div className="profile-c">
                    <div className="cart-c">
                        <FontAwesomeIcon icon={faCartShopping} style={{ color: "#fff" }} />
                    </div>
                    <FontAwesomeIcon icon={faUser} style={{ color: "#fff" }} />
                </div>
                <div className="hamburger-btn-c">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </div>
            </div>
        </header>
    );
}