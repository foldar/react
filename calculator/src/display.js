import './display.css';

function Display(props) {
    return(
        <input className="calc-input" type="text" value={props.value}/>
    );
}

export default Display;