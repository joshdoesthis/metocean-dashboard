import React from 'react';

const States = (props) => {
  const [visibleItems, setVisibleItems] = React.useState([]); // For visible data items

  ///////////////////
  // Global States //
  ///////////////////

  return React.cloneElement(props.children, {
    ...props,
    visibleItems,
    setVisibleItems,
  });
};
export default States;
