import { useRef, useEffect, useState, useReducer } from 'react';
import ReactDOM from "react-dom/client";

function App() {

  const initialState = {
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',
    email: '',
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'changeValue':
        return {...state, [action.field]: action.value};
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Value: {state.firstName}
      <button onClick={() => dispatch({
        type: 'changeValue',
        field: 'firstName',
        value: 'Upmostly'
      })}>Change value</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);