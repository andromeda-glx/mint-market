import './Button.css'

export default function Button({text, name, handleClick}){
    return (
        <button className={`btn ${name}`} onClick={() => handleClick()}>{text}</button>
    );
}