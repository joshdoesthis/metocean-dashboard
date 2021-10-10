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

const Line = (props) => (
  <VictoryLine
    style={styles.line}
    data={props.data}
    interpolation={'natural'}
    x='time'
    y={props.y}
  />
);

export default Line;
