import React from 'react';
import _ from 'lodash';

const styles = {
  button: {
    hidden: {
      opacity: 0.5,
    },
  },
};

const toggleItem = (item, array, props) =>
  props.setVisibleItems(
    Object.assign(
      _.isEmpty(props.visibleItems) ? array : props.visibleItems,
      Object.assign(item, { visible: !item.visible })
    )
  );

const Legend = (props) => {
  //console.log(props);

  return (
    <div>
      <h1>{props.legendTitle}</h1>
      <p>{props.legendUnit}</p>
      <ul>
        {props.legendItems.map((item, array) => (
          <li key={item.short}>
            <button
              style={styles.button}
              className={item.visible && 'hidden'}
              onClick={() => toggleItem(item, array, props)}
            >
              {item.long}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Legend;
