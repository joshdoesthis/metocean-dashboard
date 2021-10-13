import React from 'react';
import * as D3 from 'd3';
import {
  VictoryBrushContainer,
  VictoryChart,
  VictoryZoomContainer,
} from 'victory';
import theme from './Theme';

const padding = { top: 8, right: 8, bottom: 28, left: 28 };
const domainPadding = { x: 1, y: 1 };

const TimeScaleChart = (props) => {
  const { selectedUnit } = props;
  const scale = selectedUnit && selectedUnit.ratio ? selectedUnit.ratio : 1;

  return (
    <VictoryChart
      theme={theme}
      height={padding.top + padding.bottom + props.height} // Total vertical padding + height;
      padding={padding}
      domainPadding={domainPadding}
      scale={{
        x: D3.scaleUtc(),
        y: D3.scaleLinear(),
      }}
      containerComponent={SelectDomainComponent({
        ...props,
      })}
    >
      {props.children}
    </VictoryChart>
  );
};

const SelectDomainComponent = (props) =>
  (props.withZoom && ZoomContainer({ ...props })) ||
  (props.withBrush && BrushContainer({ ...props }));

const ZoomContainer = (props) => (
  <VictoryZoomContainer
    zoomDimension='x'
    zoomDomain={props.selectedDomain}
    disable
  />
);

const BrushContainer = (props) => {
  console.log(props.selectedDomain);

  return (
    <VictoryBrushContainer
      brushDimension='x'
      bushDomain={props.selectedDomain}
      onBrushDomainChange={(domain) => props.setSelectedDomain(domain)}
      allowDraw={false}
      brushComponent={Brush({ ...props })}
    />
  );
};

const styles = {
  brush: {
    fill: '#455A64',
    opacity: 0.5,
  },
};

const Brush = (props) => {
  console.log(props);
  return <rect rx={1} ry={1} style={styles.brush} />;
};

export default TimeScaleChart;
