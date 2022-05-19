import logo from "./logo.svg";
import "./App.css";
import { useState, useRef, useEffect } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Calc from "./components/Calc";
import { ACTIONS } from "./libs/const";

function App() {
  const [count, setCount] = useState(0);
  const valueOne = useRef(0);
  const valueTwo = useRef(0);
  const [result, setResult] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => setRenderCount(renderCount + 1), [result]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Render count: {renderCount}</h1>
        <h1>Bismillah</h1>

        <div className="App-container">
          <div className="App-count">
            <h3>Count number</h3>
            <h1>{count}</h1>
            <div>
              <Button
                count={count}
                setCount={setCount}
                action={ACTIONS.DECREMENT}
                text="Minus"
              />
              <Button
                count={count}
                setCount={setCount}
                action={ACTIONS.INCREMENT}
                text="Plus"
              />
            </div>
          </div>

          <div className="App-calculator">
            <form>
              <label className="App-label">
                <h3>Input your number here</h3>
                <input
                  className="App-input"
                  type="number"
                  ref={valueOne}
                  placeholder="0"
                />
                <input
                  className="App-input"
                  type="number"
                  ref={valueTwo}
                  placeholder="0"
                />

                <h1>{result}</h1>
              </label>
            </form>
            <Calc
              valueOne={valueOne}
              valueTwo={valueTwo}
              setResult={setResult}
              action={ACTIONS.MULTYPLE}
              text="Multyple"
            />

            <Calc
              valueOne={valueOne}
              valueTwo={valueTwo}
              setResult={setResult}
              action={ACTIONS.SUM}
              text="Sum"
            />

            <Calc
              valueOne={valueOne}
              valueTwo={valueTwo}
              setResult={setResult}
              action={ACTIONS.MINUS}
              text="Minus"
            />
          </div>
        </div>

        <Card
          title="React JS"
          name="Lalu Ferdian Yusuf"
          description="Learn React"
        />
      </header>
    </div>
  );
}

export default App;
