import { useState } from "react";
import "./index.css";
export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);
  const date = new Date();
  const actualdate = new Date();
  actualdate.setDate(date.getDate() + count);

  function handleStepNext() {
    setStep((s) => s + 1);
  }
  function handleStepPrevious() {
    setStep((s) => s - 1);
  }
  function handlePrevious() {
    setCount((c) => c - step);
  }
  function handleNext() {
    setCount((c) => c + step);
  }

  return (
    <div className="divMare">
      <div className="div1">
        <button onClick={handleStepPrevious}>-</button>
        <h1>{step}</h1>
        <button onClick={handleStepNext}>+</button>
      </div>
      <div className="div1">
        <button onClick={handlePrevious}>-</button>
        <h1>{count}</h1>
        <button onClick={handleNext}>+</button>
      </div>
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
