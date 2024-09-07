import { useReducer } from "react";
const initialState = { count: 0, step: 1 };
function reducer(state, action) {
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };

    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };

    case "reset":
      return initialState;
    default:
      throw new Error("unkown ");
  }
}
function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  const inc = function () {
    dispatch({ type: "inc" });
  };
  const dec = function () {
    dispatch({ type: "dec" });
  };
  const rest = function () {
    dispatch({ type: "reset" });
  };
  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };
  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };
  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={dec}>-</button>
        <input type="text" value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>
      <p>{date.toDateString()}</p>
      <div>
        <button onClick={rest}>Rest</button>
      </div>
    </div>
  );
}
export default DateCounter;
