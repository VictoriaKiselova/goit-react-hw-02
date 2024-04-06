export default function Feedback({
  props: { good, neutral, bad },
  totalFeedback,
  percent,
}) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {percent}%</p>
    </div>
  );
}
