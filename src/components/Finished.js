function Finished({ points, maxPoints, dispatch }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <div>
      <p className="result">
        You scored <strong> {points} </strong>out of {maxPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default Finished;
