import '../styles/button.css';

function Button({name, onClick}) {
    return (
        <button
            className="btn"
            onClick={onClick}
        >
            {name}
        </button>
    )
}

export default Button;