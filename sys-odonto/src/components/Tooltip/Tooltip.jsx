import React from 'react';
import styles from './Tooltip.module.css';

const Tooltip = ({ text, children }) => {
  return (
    <div className={styles.tooltip}>
      <span className={styles.tooltipText}>{text}</span>
      {children}
    </div>
  );
};

export default Tooltip;
