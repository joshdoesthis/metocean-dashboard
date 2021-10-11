import React from 'react';
import * as D3 from 'd3';
import {
  VictoryBrushContainer,
  VictoryChart,
  VictoryTheme,
  VictoryZoomContainer,
} from 'victory';
import theme from './Theme';

const padding = { top: 8, right: 8, bottom: 28, left: 28 };
const domainPadding = { x: 1, y: 1 };

const TimeScaleChart = (props) => (
  <VictoryChart
    theme={theme}
    height={padding.top + padding.bottom + props.height} // Total vertical padding + height;
    padding={padding}
    domainPadding={domainPadding}
    scale={{
      x: D3.scaleUtc(),
      y: 'linear',
    }}
    containerComponent={
      (props.withZoom && ZoomContainer({ ...props })) ||
      (props.withBrush && BrushContainer({ ...props }))
    }
  >
    {props.children}
  </VictoryChart>
);

const ZoomContainer = (props) => (
  <VictoryZoomContainer
    zoomDimension='x'
    zoomDomain={props.selectedDomain}
    disable
  />
);

const BrushContainer = (props) => (
  <VictoryBrushContainer
    brushDimension='x'
    brushDomain={props.selectedDomain}
    onBrushDomainChange={(domain) => props.setSelectedDomain(domain)}
  />
);

export default TimeScaleChart;
