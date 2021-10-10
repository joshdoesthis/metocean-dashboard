import React from 'react';

const styles = { sideBar: {}, ContentWrapper: {}, wrapper: {} };

export const SideBar = (props) => {
  return <div id='sidebar'>{props.children}</div>;
};

export const ContentWrapper = (props) => {
  return <div style={styles.contentWrapper}>{props.children}</div>;
};

export const Wrapper = (props) => {
  return (
    <div id='wrapper'>
      {<SideBar {...props} />}
      {<ContentWrapper {...props} />}
    </div>
  );
};
