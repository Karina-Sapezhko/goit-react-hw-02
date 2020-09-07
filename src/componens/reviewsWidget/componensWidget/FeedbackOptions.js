import React from 'react';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(el => (
      <button
        key={el}
        className={styles.button}
        type="button"
        onClick={() => onLeaveFeedback(el)}
      >
        {el}
      </button>
    ))}
  </div>
);
