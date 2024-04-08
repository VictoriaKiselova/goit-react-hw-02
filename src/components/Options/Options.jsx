import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  resetFeedbacks,
  totalFeedbacks,
}) {
  return (
    <div className={css.container}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedbacks > 0 ? (
        <button onClick={resetFeedbacks}>Reset</button>
      ) : null}
    </div>
  );
}
