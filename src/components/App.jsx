import { useState, useEffect } from "react";
import css from "./App.module.css";
import Description from "./Description/Description.jsx";
import Feedback from "./Feedback/Feedback.jsx";
import Options from "./Options/Options.jsx";
import Notification from "./Notification/Notification.jsx";

export default function App() {
  const [typesReview, setTypesReview] = useState(() => {
    const savedReviews = localStorage.getItem("reviews");
    const date = JSON.parse(savedReviews);
    return savedReviews !== null ? date : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = feedbackType => {
    setTypesReview({
      ...typesReview,
      [feedbackType]: typesReview[feedbackType] + 1,
    });
  };

  const resetClicks = () => {
    setTypesReview({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback =
    typesReview.good + typesReview.neutral + typesReview.bad;

  let positivePercent;
  if (totalFeedback > 0) {
    positivePercent = Math.round((typesReview.good / totalFeedback) * 100);
    console.log(positivePercent);
  }

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(typesReview));
  }, [typesReview]);

  return (
    <div className={css.text}>
      <Description />
      <Options
        typesReview={typesReview}
        resetFeedbacks={resetClicks}
        updateFeedback={updateFeedback}
        totalFeedbacks={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          typesReview={typesReview}
          totalFeedback={totalFeedback}
          percent={positivePercent}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
