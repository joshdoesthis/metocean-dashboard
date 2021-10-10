import React, { useState, useEffect } from 'react';
import TimeScaleChart from './TimeScaleChart';
import Group from './Group';
import Line from './Line';
import Axis from './Axis';

const WindSpeedLines = (props) => {
  return (
    <TimeScaleChart {...props}>
      <Group>
        {Line({ ...props, y: 'gst' })}
        {Line({ ...props, y: 'wsp' })}
        {Line({ ...props, y: 'wsp50' })}
        {Line({ ...props, y: 'wsp80' })}
        {Line({ ...props, y: 'wsp100' })}
      </Group>
      <Axis />
    </TimeScaleChart>
  );
};

export default WindSpeedLines;
