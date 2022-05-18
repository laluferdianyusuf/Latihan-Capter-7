import React from "react";
import { ACTIONS } from "../libs/const";
import "./All.css";

export default function Calc(props) {
  const { valueOne, valueTwo, setResult, action, text } = props;
  const multyple = () => {
    setResult(valueOne * valueTwo);
  };

  const sum = () => {
    setResult(Number(valueOne) + Number(valueTwo));
  };

  const minus = () => {
    setResult(valueOne - valueTwo);
  };

  return (
    <button
      onClick={() => {
        if (action === ACTIONS.MULTYPLE) return multyple();
        else if (action === ACTIONS.SUM) return sum();
        else if (action === ACTIONS.MINUS) return minus();
      }}
      className="button-action"
    >
      {text}
    </button>
  );
}
