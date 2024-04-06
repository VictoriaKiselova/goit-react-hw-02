import { useState, useEffect } from "react";
// import css from "./App.module.css";
import Description from "./Components/Description/Description.jsx";
import Feedback from "./Components/Feedback/Feedback.jsx";
import Options from "./Components/Options/Options.jsx";
import Notification from "./Components/Notification/Notification.jsx";

export default function App() {
  const [typesReview, setTypesReview] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setTypesReview({
      ...typesReview,
      [feedbackType]: typesReview[feedbackType] + 1,
    });
  };

  const totalFeedback =
    typesReview.good + typesReview.neutral + typesReview.bad;

  return (
    <div>
      <Description />
      <Options props={typesReview} propsFunc={updateFeedback} />
      {totalFeedback > 0 ? <Feedback props={typesReview} /> : <Notification />}
    </div>
  );
}
