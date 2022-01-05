import React from 'react';
import States from './States';
import Legend from './Legend';

const legendTitle = 'Volumes';
const legendUnit = 'mm/hr';
const legendItems = [{ short: 'precip', long: 'Precipitation', visible: true }];

const Volumes = (props) => {
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

export default Volumes;
