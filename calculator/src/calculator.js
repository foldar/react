import React, { useState } from 'react';
import './calculator.css';
import Button from './Button.js';
import Display from './display.js';
import * as math from "mathjs";


function Calculator() {
    const [input, setInput] = useState("");
    const addToInput = (value) => {setInput(input + value);};
    const clearInput = (value) => {setInput("");};
    
    const calculate = (value) => {setInput(math.evaluate(input));};

    return(
    <div className="calc-wrapper">
        <div className='calc-row'><Display value={input} />
        </div>
        <div className="calc-row">
            <Button value="7" handleClick={addToInput}/><Button value="8" handleClick={addToInput}/><Button value="9" handleClick={addToInput}/><Button value="*" handleClick={addToInput}/>
        </div>
        <div className="calc-row">
            <Button value="4" handleClick={addToInput}/><Button value="5" handleClick={addToInput}/><Button value="6" handleClick={addToInput}/><Button value="-" handleClick={addToInput}/>
        </div>
        <div className="calc-row">
            <Button value="1" handleClick={addToInput}/><Button value="2" handleClick={addToInput}/><Button value="3" handleClick={addToInput}/><Button value="+" handleClick={addToInput}/>
        </div>
        <div className="calc-row">
            <Button value="C" handleClick={clearInput}/><Button value="0" handleClick={addToInput}/><Button value="." handleClick={addToInput}/><Button value="=" handleClick={calculate}/>
        </div>
    </div>
    );
}

//function clearInput() 
//{
//    input="";
//}

export default Calculator;
