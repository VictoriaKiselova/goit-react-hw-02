import css from "./Options.module.css";

export default function Options({ propsFunc, setFunc, totalReview }) {
  return (
    <div className={css.container}>
      <button onClick={() => propsFunc("good")}>Good</button>
      <button onClick={() => propsFunc("neutral")}>Neutral</button>
      <button onClick={() => propsFunc("bad")}>Bad</button>
      {totalReview > 0 ? <button onClick={setFunc}>Reset</button> : null}
    </div>
  );
}
