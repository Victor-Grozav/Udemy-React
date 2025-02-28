import { useState } from "react";
import "./index.css";
export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);
  const date = new Date();
  const actualdate = new Date();
  actualdate.setDate(date.getDate() + count);

  function handlePrevious() {
    setCount((c) => c - step);
  }
  function handleNext() {
    setCount((c) => c + step);
  }
  function handleChange(e) {
    const changeImput = Number(e.target.value);
    setCount(changeImput);
  }
  function handleRange(e) {
    const changeRange = Number(e.target.value);
    setStep(changeRange);
  }
  function resetAll(e) {
    setCount((c) => 0);
    setStep((s) => 1);
  }

  return (
    <div className="divMare">
      <div className="div1">
        <input
          type="range"
          value={step}
          onChange={handleRange}
          min="0"
          max="10"
        ></input>

        <h1>{step}</h1>
      </div>
      <div className="div1">
        <button onClick={handlePrevious}>-</button>
        <h1>
          <input type="text" value={count} onChange={handleChange}></input>
        </h1>
        <button onClick={handleNext}>+</button>
      </div>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={resetAll}>Reset</button>
        </div>
      ) : null}
      <h1>
        {count < 0 ? (
          <p>
            We are {count} days from
            {date.toDateString()} today is {actualdate.toDateString()}
          </p>
        ) : (
          <p>
            We are {count} days after {date.toDateString()} today is{" "}
            {actualdate.toDateString()}
          </p>
        )}
      </h1>
    </div>
  );
}
