import './Button.css';
function Button(props) {
    return (
        <button type="button" className="calc-button" onClick={buttonClick}>
          {props.value}
        </button>
      );

      function buttonClick()
      {
          props.handleClick(props.value);
      }
    }

export default Button;