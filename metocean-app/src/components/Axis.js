import React, { useState } from 'react';
import { VictoryAxis, VictoryContainer } from 'victory';
import _, { indexOf } from 'lodash';

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

const DependentAxis = (props) => {
  const { selectedUnit } = props;
  const scale = selectedUnit && selectedUnit.ratio ? selectedUnit.ratio : 1;

  const [tickValues, setTickValues] = useState([]);

  return (
    <VictoryAxis
      dependentAxis
      style={props.withAxis ? styles.axis : styles.noAxis}
      tickFormat={(tick, index, ticks) => {
        console.log(tick, index, ticks);
        return tick;
      }}
    />
  );
};

export { Axis, DependentAxis };
