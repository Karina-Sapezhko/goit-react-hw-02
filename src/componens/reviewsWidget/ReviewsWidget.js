import React, { Component } from 'react';
import { Statistics } from './componensWidget/Statistics';
import { FeedbackOptions } from './componensWidget/FeedbackOptions';
import { Section } from './componensWidget/Section';
import { Notification } from './componensWidget/Notification';

export class ReviewsWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleIncrement = label => {
    this.setState(prevState => {
      return { [label]: prevState[label] + 1 };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const sum = this.countTotalFeedback();
    const positiveFeedback = this.state.good;
    const result = Math.trunc((positiveFeedback * 100) / sum);
    return result;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.hendleIncrement}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
