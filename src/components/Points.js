function Points({ index, numQuestions, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Questions {index + 1} / {numQuestions}
      </p>
      <p>
        {points} / {maxPoints} points
      </p>
    </header>
  );
}

export default Points;
