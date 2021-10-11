import React from 'react';
import TimeScaleChart from './TimeScaleChart';
import Group from './Group';
import Line from './Line';
import { Axis, DependentAxis } from './Axis';

const WindSpeedLines = (props) => {
  return (
    <TimeScaleChart {...props}>
      <Group>
        {props.filter.map(
          (el, i) =>
            el.active &&
            Line({ ...props, key: i, stroke: el.color, y: el.short })
        )}
      </Group>
      {Axis({ ...props })}
      {DependentAxis({ ...props })}
    </TimeScaleChart>
  );
};

export default WindSpeedLines;
