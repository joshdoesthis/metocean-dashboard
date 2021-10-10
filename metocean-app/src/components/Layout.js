import React from 'react';

const styles = {
  wrapper: {},
  charts: {},
};

const Area = (props) => {
  return <div {...props}>{props.children}</div>;
};

const Wrapper = (props) => (
  <Area style={styles.wrapper}>
    <Area style={styles.charts}>{props.children}</Area>
  </Area>
);

export { Wrapper };
