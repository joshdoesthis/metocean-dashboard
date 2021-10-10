import React from 'react';
import { VictoryAxis } from 'victory';

const styles = {
  axis: {
    axis: {
      strokeWidth: 1,
    },
    grid: {
      //stroke: 'none',
    },
    ticks: {
      size: 2,
    },
    tickLabels: {
      fontSize: 8,
    },
  },
};

const Axis = (props) => (
  <VictoryAxis dependentAxis={props.dependentAxis} style={styles.axis} />
);

export default Axis;
