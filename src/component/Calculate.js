import { useState } from "react";
import "./Calculate.css";
import { evaluate } from "mathjs";

function Calculator() {
  let [result, setResult] = useState("");
  let [hasDot, setHasDot] = useState(false);

  let changeHandler = (text) => {
    if (text === "÷") return "/";
    if (text === "×") return "*";
    return text;
  };

  const clickHandler = (e) => {
    let input = changeHandler(e.target.innerHTML);
    if (input === ".")
      if (hasDot === true) return;
      else setHasDot(true);
    setResult(result + input);
    if (input === "-" || input === "+" || input === "/" || input === "*")
      setHasDot(false);
  };

  let clearHandler = () => {
    setResult("");
    setHasDot(false);
  };

  let deleteHandler = () => {
    if(result.endsWith('.'))
      setHasDot(false);
    setResult(result.slice(0, -1));
  };

  const equalHandler = () => {
    setResult(String(evaluate(result)));
    setHasDot(false);
  };

  return (
    <div className="view">
      <div className="container">
        <div className="screen">{result}</div>
        <div className="main">
          <button onClick={clearHandler} className="color col">
            Clear
          </button>
          <button onClick={deleteHandler} className="color">
            C
          </button>
          <button onClick={clickHandler} className="color">
            ÷
          </button>
          <button onClick={clickHandler}>7</button>
          <button onClick={clickHandler}>8</button>
          <button onClick={clickHandler}>9</button>
          <button onClick={clickHandler} className="color">
            ×
          </button>
          <button onClick={clickHandler}>4</button>
          <button onClick={clickHandler}>5</button>
          <button onClick={clickHandler}>6</button>
          <button onClick={clickHandler} className="color">
            -
          </button>
          <button onClick={clickHandler}>1</button>
          <button onClick={clickHandler}>2</button>
          <button onClick={clickHandler}>3</button>
          <button onClick={clickHandler} className="color">
            +
          </button>
          <button onClick={clickHandler}>0</button>
          <button onClick={clickHandler}>.</button>
          <button onClick={equalHandler} className="color col">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
