import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  
  const handleInput = (value) => {
    setInput(input + value);
  };
  
  const calculateResult = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };
  
  const clearInput = () => {
    setInput('');
  };

  return (<div className='maincontainer'>
    <div className="calculator">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='typebar'
      />
      <div className="buttons">
      
        <button onClick={() => handleInput('7')} className='btn'>7</button>
        <button onClick={() => handleInput('8')} className='btn'>8</button>
        <button onClick={() => handleInput('9')} className='btn'>9</button>
        <button onClick={() => clearInput()} className='btn'>AC</button>
        <button onClick={() => handleInput('4')} className='btn'>4</button>
        <button onClick={() => handleInput('5')} className='btn'>5</button>
        <button onClick={() => handleInput('6')} className='btn'>6</button>
        <button onClick={() => handleInput('/')} className='btn'>/</button>
        <button onClick={() => handleInput('1')} className='btn'>1</button>
        <button onClick={() => handleInput('2')} className='btn'>2</button>
        <button onClick={() => handleInput('3')} className='btn'>3</button>
        <button onClick={() => handleInput('*')} className='btn'>x</button> 
        <button onClick={() => handleInput('+')} className='btn'>+</button>
        <button onClick={() => handleInput('0')} className='btn'>0</button>
        <button onClick={() => handleInput('-')} className='btn'>-</button>
        <button onClick={() => handleInput('.')} className='btn'>.</button>
        <button onClick={() => calculateResult()} className='btn result'>=</button>
        
       
       
      </div>
    </div>
    </div>
  );
}

export default Calculator;