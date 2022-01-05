import React from 'react';
import States from './States';
import Legend from './Legend';

const legendTitle = 'Directions';
const legendUnit = 'deg';
const legendItems = [
  { short: 'dp', long: 'Peak wave direction (from)', visible: true },
  {
    short: 'dpm',
    long: 'Mean direction at peak frequency (from)',
    visible: true,
  },
  {
    short: 'dpm_sw8',
    long: 'Mean direction at swell peak frequency (from)',
    visible: true,
  },
  {
    short: 'dpm_sw1',
    long: 'Mean direction of primary swell peak frequency',
    visible: true,
  },
  {
    short: 'dpm_sea8',
    long: 'Mean direction at sea peak frequency (from)',
    visible: true,
  },
  {
    short: 'dpm_sea',
    long: 'Mean direction at wind sea peak frequency (from)',
    visible: true,
  },
  { short: 'wd', long: 'Wind direction (from)', visible: true },
  { short: 'cd0', long: 'Surface current direction (to)', visible: true },
];

const Directions = (props) => {
  //console.log(props);
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

export default Directions;
