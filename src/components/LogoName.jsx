import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LogoName() {
    return (
        <>
            <FontAwesomeIcon icon={faLeaf} style={{ color: "#63E6BE" }} />
            <span className="logo-lg">mint<span className="m-color">M</span>arket</span>
        </>
    );
}