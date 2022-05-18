import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Calc from "./components/Calc";
import { ACTIONS } from "./libs/const";

function App() {
  const [count, setCount] = useState(0);
  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bismillah</h1>
        <div className="App-container">
          <div className="App-count">
            <p>Count number</p>
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
                  value={valueOne}
                  onChange={(e) => setValueOne(e.target.value)}
                />
                <input
                  className="App-input"
                  type="number"
                  value={valueTwo}
                  onChange={(e) => setValueTwo(e.target.value)}
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
