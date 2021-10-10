import React from 'react';
import { VictoryAxis } from 'victory';

const styles = {
  axis: {
    axis: {
      strokeWidth: 1,
    },
    grid: {
      //stroke: 'transparent',
    },
    ticks: {
      size: 2,
    },
    tickLabels: {
      fontSize: 8,
    },
  },
  noAxis: {
    axis: {
      stroke: 'transparent',
    },
    grid: {
      stroke: 'transparent',
    },
    ticks: {
      stroke: 'transparent',
    },
    tickLabels: {
      fill: 'transparent',
    },
  },
};

const Axis = (props) => (
  <VictoryAxis style={props.withAxis ? styles.axis : styles.noAxis} />
);

const DependentAxis = (props) => (
  <VictoryAxis
    dependentAxis
    style={props.withAxis ? styles.axis : styles.noAxis}
  />
);

export { Axis, DependentAxis };
