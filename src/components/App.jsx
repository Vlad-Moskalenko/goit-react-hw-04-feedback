import { Section } from './Statistics/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Statistics/FeedbackOptions';
import { Notification } from './Statistics/Notification';
import { useState } from 'react';

export const App = () => {
  const feedbackOptions = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(feedbackOptions);

  const onLeaveFeedBack = e =>
    setFeedback({ ...feedback, [e.target.name]: feedback[e.target.name] + 1 });

  const countTotalFeedback = () =>
    Object.values(feedback).reduce((a, b) => a + b, 0);

  const countPositiveFeedbackPercentage = () => {
    if (feedback.good) {
      return Math.floor((feedback.good / countTotalFeedback()) * 100);
    }
    return 0;
  };

  return (
    <div className="app">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedback}
          onLeaveFeedBack={e => onLeaveFeedBack(e)}
        />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
