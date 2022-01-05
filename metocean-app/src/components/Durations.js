import React from 'react';
import States from './States';
import Legend from './Legend';

const legendTitle = 'Durations';
const legendUnit = 's';
const legendItems = [
  { short: 'tp', long: 'Peak Period', visible: true },
  { short: 'tm01', long: 'Mean wave period', visible: true },
  { short: 'tm02', long: 'Mean wave period', visible: true },
  { short: 'tp_sw1', long: 'Peak period of primary swell', visible: true },
  { short: 'tp_sw8', long: 'Peak period of swell (> 8s)', visible: true },
  { short: 'tp_sea8', long: 'Peak period of sea (< 8s)', visible: true },
  { short: 'tp_sea', long: 'Peak period of wind sea ', visible: true },
  { short: 'tm_sea', long: 'Mean period of wind sea', visible: true },
];

const Durations = (props) => {
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

export default Durations;
