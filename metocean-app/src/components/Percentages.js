import React from 'react';
import States from './States';
import Legend from './Legend';

const legendTitle = 'Percentages';
const legendUnit = '%';
const legendItems = [
  { short: 'rh', long: 'Relative humidity', visible: true },
  { short: 'cld', long: 'Cloud cover', visible: true },
];

const Percentages = (props) => {
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

export default Percentages;
