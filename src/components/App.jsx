import { Component } from 'react';

import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { FeedbackSection } from './FeedbackSection';
import { Notification } from './Notification';

import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClicked = option =>
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = Math.round((good / total) * 100);
    return total ? positivePercentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    return (
      <div className={css.wrapper}>
        <FeedbackSection title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onBtnClicked}
          />
        </FeedbackSection>
        <FeedbackSection title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </FeedbackSection>
      </div>
    );
  }
}
