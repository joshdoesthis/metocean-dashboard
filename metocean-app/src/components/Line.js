import React from 'react';
import { VictoryLine } from 'victory';
import _ from 'lodash';

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

  const metoceanData = _.cloneDeep(props.metoceanData);

  return (
    <VictoryLine
      {...props}
      animate={{
        duration: 1000,
        easing: 'ease',
      }}
      style={{
        data: {
          ...styles.line.data,
          stroke: props.active ? props.stroke : 'transparent',
        },
      }}
      data={metoceanData.map((el) =>
        Object.assign(el, {
          [props.y]: el[props.y] * scale,
        })
      )}
      //data={metoceanData}
      interpolation={'natural'}
      x='time'
      y={props.y}
    />
  );
};

export default Line;
