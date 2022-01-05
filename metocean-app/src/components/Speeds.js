import React from 'react';
import States from './States';
import Legend from './Legend';

const legendTitle = 'Speeds';
const legendUnit = 'kts';
const legendItems = [
  { short: 'wsp', long: 'Mean wind speed at 10 m', visible: true },
  { short: 'gst', long: 'Typical gust speed', visible: true },
  { short: 'wsp100', long: 'Mean wind speed at 100 m', visible: true },
  { short: 'wsp50', long: 'Mean wind speed at 50 m', visible: true },
  { short: 'wsp80', long: 'Mean wind speed at 80 m', visible: true },
  { short: 'csp0', long: 'Surface current speed', visible: true },
];

const Speeds = (props) => {
  return (
    <States {...props}>
      <Legend
        legendTitle={legendTitle}
        legendUnit={legendUnit}
        legendItems={legendItems}
      />
    </States>
  );
};

export default Speeds;
