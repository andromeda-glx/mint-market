import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"
import LogoName from "./LogoName";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

export default function Header() {
    return (
        <header>
            <div className="header-c">
                <div className="logo-c">
                    <FontAwesomeIcon icon={faLeaf} style={{color: "#63E6BE"}} />
                    <LogoName />
                </div>
                <div className="profile-c">
                    <div className="cart-c">
                        <FontAwesomeIcon icon={faCartShopping} style={{color: "#fff"}} />
                    </div>
                    <FontAwesomeIcon icon={faUser} style={{color: "#fff"}} />
                </div>
            </div>
        </header>
    );
}