import React from "react";
import { ACTIONS } from "../libs/const";
import "./All.css";

export default function Calc(props) {
  const { valueOne, valueTwo, setResult, action, text } = props;

  const multyple = () => {
    const valueOneInt = parseInt(valueOne.current.value);
    const valueTwoInt = parseInt(valueTwo.current.value);
    setResult(valueOneInt * valueTwoInt);
  };

  const sum = () => {
    const valueOneInt = parseInt(valueOne.current.value);
    const valueTwoInt = parseInt(valueTwo.current.value);
    setResult(valueOneInt + valueTwoInt);
  };

  const minus = () => {
    const valueOneInt = parseInt(valueOne.current.value);
    const valueTwoInt = parseInt(valueTwo.current.value);
    setResult(valueOneInt - valueTwoInt);
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
