import { Section } from './Statistics/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Statistics/FeedbackOptions';
import { Notification } from './Statistics/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedBack = e => {
    const currentState = e.target.name;
    switch (currentState) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.warn(`${currentState} не найден`);
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (good) {
      return Math.floor((good / countTotalFeedback()) * 100);
    }
    return 0;
  };

  return (
    <div className="app">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedBack={e => onLeaveFeedBack(e)}
        />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
