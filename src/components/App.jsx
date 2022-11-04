import { Section } from './Statistics/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Statistics/FeedbackOptions';
import { Notification } from './Statistics/Notification';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedBack = e => {
    const currentState = e.target.name;
    this.setState(state => {
      return { [currentState]: state[currentState] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => (acc += el));
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good)
      return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
    return 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="app">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedBack={this.onLeaveFeedBack}
          />
        </Section>
        <Section title="Statistics">
          {!this.countTotalFeedback()
          ? <Notification message="There is no feedback" />
          : <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          }
        </Section>
      </div>
    );
  }
}
