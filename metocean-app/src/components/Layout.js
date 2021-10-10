import React from 'react';

const Area = (props) => {
  return <div>{props.children}</div>;
};

const Wrapper = (props) => (
  <Area>
    <Area />
    <Area>{props.children}</Area>
  </Area>
);

export default Wrapper;
