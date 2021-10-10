import React, { useState, useEffect } from 'react';
import TimeScaleChart from './TimeScaleChart';
import Group from './Group';
import Line from './Line';
import Axis from './Axis';

const WindSpeedLines = (props) => {
  console.log(props);

  return (
    <TimeScaleChart>
      <Group>
        <Line {...props} y='gst' />
      </Group>
      <Axis />
    </TimeScaleChart>
  );
};

export default WindSpeedLines;
