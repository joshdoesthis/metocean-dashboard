import React from 'react';
import States from './States';
import Legend from './Legend';

const legendTitle = 'Distances';
const legendUnit = 'km';
const legendItems = [{ short: 'vis', long: 'Visibility', visible: true }];

const Distances = (props) => {
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

export default Distances;
