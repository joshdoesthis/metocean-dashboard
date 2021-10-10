import React from 'react';
import * as D3 from 'd3';
import {
  VictoryBrushContainer,
  VictoryChart,
  VictoryTheme,
  VictoryZoomContainer,
} from 'victory';

const theme = VictoryTheme.material;
const padding = { top: 8, right: 8, bottom: 28, left: 28 };
const domainPadding = { x: 1, y: 1 };

// Styles
const styles = {
  chart: {},
};

const TimeScaleChart = (props) => (
  <VictoryChart
    theme={theme}
    height={padding.top + padding.bottom + 100} // Total vertical padding + height;
    padding={padding}
    domainPadding={domainPadding}
    style={styles.chart}
    scale={{
      x: D3.scaleUtc(),
      y: 'linear',
    }}
    //containerComponent={<ZoomContainer {...props} />}
  >
    {props.children}
  </VictoryChart>
);

/*const ZoomContainer = (props) => {
  console.log(props);
  return (
    <VictoryZoomContainer
      zoomDimension='x'
      zoomDomain={props.selectedDomain}
      disable
    />
  );
};

const BrushContainer = (props) => (
  <VictoryBrushContainer
    brushDimension='x'
    brushDomain={props.selectedDomain}
    onBrushDomainChange={(domain) => props.setSelectedDomain(domain)}
  />
);*/

export default TimeScaleChart;