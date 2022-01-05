import React from 'react';
import States from './States';
import Legend from './Legend';

const legendTitle = 'Heights';
const legendUnit = 'm';
const legendItems = [
  { short: 'lev', unit: 'm', long: 'Elevation', visible: true },
  { short: 'hs', unit: 'm', long: 'Significant wave height', visible: true },
  {
    short: 'hx',
    unit: 'm',
    long: 'Spectral estimate of maximum wave',
    visible: true,
  },
  {
    short: 'hs_sw1',
    unit: 'm',
    long: 'Significant wave height of primary swell',
    visible: true,
  },
  {
    short: 'hs_sw8',
    unit: 'm',
    long: 'Significant wave height of swell (> 8s)',
    visible: true,
  },
  {
    short: 'hs_sea8',
    unit: 'm',
    long: 'Significant wave height of sea (< 8s)',
    visible: true,
  },
  {
    short: 'hs_sea',
    unit: 'm',
    long: 'Significant wave height of wind sea',
    visible: true,
  },
  {
    short: 'hs_ig',
    unit: 'm',
    long: 'Infragravity significant wave height',
    visible: true,
  },
  {
    short: 'hs_fig',
    unit: 'm',
    long: 'Far infragravity wave height',
    visible: true,
  },
  { short: 'cb', unit: 'm', long: 'Cloud base', visible: true },
  { short: 'ss', unit: 'm', long: 'Storm surge elevation', visible: true },
];

const Heights = (props) => {
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

export default Heights;
