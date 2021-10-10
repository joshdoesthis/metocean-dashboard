import React from 'react';
import { VictoryLine } from 'victory';

const styles = {
  line: {
    data: {
      strokeWidth: 1,
      strokeLinejoin: 'round',
      strokeLinecap: 'round',
    },
  },
};

const Line = (props) => (
  <VictoryLine
    {...props}
    style={styles.line}
    data={props.metoceanData}
    interpolation={'natural'}
    x='time'
    y={props.y}
  />
);

export default Line;
