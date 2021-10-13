import React from 'react';
import TimeScaleChart from './TimeScaleChart';
import Group from './Group';
import Line from './Line';
import { Axis, DependentAxis } from './Axis';

const WindSpeedChart = (props) => (
  <TimeScaleChart {...props}>
    <Group>
      {props.activeLines.map((el, i) =>
        Line({
          ...props,
          key: i,
          active: el.active,
          stroke: el.color,
          y: el.short,
        })
      )}
    </Group>
    {Axis({ ...props })}
    {DependentAxis({ ...props })}
  </TimeScaleChart>
);

export default WindSpeedChart;
