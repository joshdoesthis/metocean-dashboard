import React from 'react';
import { VictoryGroup } from 'victory';

const styles = {
  line: {
    data: {
      strokeWidth: 1,
      strokeLinejoin: 'round',
    },
  },
};

const Group = (props) => (
  <VictoryGroup style={styles.group}>{props.children}</VictoryGroup>
);

export default Group;
