import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

export default function Button({ text, name, handleClick }) {
    return (
        <button
            className={`btn ${name}`}
            onClick={() => handleClick()}
        >
            <FontAwesomeIcon icon={faCirclePlus} />
            {text}
        </button>
    );
}