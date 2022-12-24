import { useState, useEffect } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {
<<<<<<< Updated upstream
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
=======
  const INITIAL_STATE = JSON.parse(localStorage.getItem('feedbackData')) ?? {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackData, setFeedbackData] = useState(INITIAL_STATE);

  useEffect(
    () => localStorage.setItem('feedbackData', JSON.stringify(feedbackData)),
    [feedbackData]
  );

  const onLeaveFeedback = e => {
    const feedbackOption = e.target.dataset.feedback;

    setFeedbackData(prevState => ({
      ...prevState,
      [feedbackOption]: feedbackData[feedbackOption] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedbackData).reduce((a, b) => a + b, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    if (feedbackData.good) {
      return Math.floor((feedbackData.good / countTotalFeedback()) * 100) + '%';
>>>>>>> Stashed changes
    }

    return '-';
  };

  return (
    <main>
      <Section title="Please leave feedback">
        <FeedbackOptions
<<<<<<< Updated upstream
          options={{ good, neutral, bad }}
          onLeaveFeedBack={e => onLeaveFeedBack(e)}
=======
          options={Object.keys(feedbackData)}
          onLeaveFeedback={onLeaveFeedback}
>>>>>>> Stashed changes
        />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <h3>There is no feedback yet...</h3>
        ) : (
          <Statistics
<<<<<<< Updated upstream
            good={good}
            neutral={neutral}
            bad={bad}
=======
            good={feedbackData.good}
            neutral={feedbackData.neutral}
            bad={feedbackData.bad}
>>>>>>> Stashed changes
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </main>
  );
};
