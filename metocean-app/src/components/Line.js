import React from 'react';
import { VictoryLine } from 'victory';

const styles = {
  line: {
    data: {
      strokeWidth: 1,
      strokeLinejoin: 'round',
    },
  },
};

const Line = (props) => {
  console.log(props);

  return (
    <VictoryLine
      style={styles.line}
      data={props.lineData}
      interpolation={'natural'}
      x='time'
      y={props.y}
    />
  );
};

export default Line;
