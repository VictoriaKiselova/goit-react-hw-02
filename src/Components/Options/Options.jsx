export default function Options({ propsFunc }) {
  return (
    <div>
      <button onClick={() => propsFunc("good")}>Good</button>
      <button onClick={() => propsFunc("neutral")}>Neutral</button>
      <button onClick={() => propsFunc("bad")}>Bad</button>
      <button>Reset</button>
    </div>
  );
}
