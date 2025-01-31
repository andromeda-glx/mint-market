import './Button.css'

export default function Button({text, name}){
    return (
        <button className={`btn ${name}`}>{text}</button>
    );
}