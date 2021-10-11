import React from 'react';
import { VictoryLine } from 'victory';

const styles = {
  line: {
    data: {
      strokeWidth: 1,
      strokeLinejoin: 'round',
      strokeLinecap: 'round',
    },
  },
};

const Line = (props) => {
  const { selectedUnit } = props;
  const scale = selectedUnit && selectedUnit.ratio ? selectedUnit.ratio : 1;

  return (
    <VictoryLine
      {...props}
      style={{
        data: { ...styles.line.data, stroke: props.stroke },
      }}
      data={props.metoceanData.map((el) =>
        Object.assign(el, (el[props.y] = el[props.y] * scale))
      )}
      interpolation={'natural'}
      x='time'
      y={props.y}
    />
  );
};

export default Line;
