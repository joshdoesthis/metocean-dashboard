import React from 'react';
import States from './States';
import Legend from './Legend';

const legendTitle = 'Temperatures';
const legendUnit = 'c';
const legendItems = [
  { short: 'tmp', long: 'Air temperature', visible: true },
  { short: 'sst', long: 'Sea surface temperature', visible: true },
];

const Temperatures = (props) => {
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

export default Temperatures;
