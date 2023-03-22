import { useState } from "react"

const App = () => {
  const [calc, setCalc] = useState('')
  const [results, setResults] = useState('')

  const ops = ['/', '*', '+', '-', '.']

  const updateCalc = (value) =>{
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }
    setCalc(calc + value)
    if(!ops.includes(value)){
      setResults(eval(calc + value).toString())
    }
  }

  const createDigits = () =>{
    const digits = []
    for(let i = 1; i <= 9; i++){
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits
  }

  const calculate = () =>{
    setCalc(eval(calc).toString())
  }

  const deleteLast = () =>{
    if(calc === ''){
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value)
  }

  return (
    <div className="app">
      <div className='calculator'>
        <div className='display-res'>
          {results ? <span>({results})</span>: ''}&nbsp;
          {calc || '0'}
        </div>
        <div className='operators'>
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className='digits'>
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
          <button id="clear" onClick={() => setResults('0')}>CLEAR</button>
        </div>
      </div>
    </div>
  );
}

export default App;
