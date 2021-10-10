import React from 'react';

const styles = {
  legend: {
    fontFamily: 'sans-serif',
    lineHeight: 1.5,
    marginTop: '2vmin',
    marginRight: '2vmin',
    marginBottom: '2vmin',
    marginLeft: '8vw',
  },
  title: {
    color: '#455A64',
    fontWeight: 'bold',
    fontSize: '4vmin',
  },
  unit: {
    color: '#90A4AE',
    fontSize: '3vmin',
  },
  labels: {
    display: 'inline-flex',
    fontSize: '2vmin',
    color: '#455A64',
    borderWidth: 1,
    borderColor: '#ECEFF1',
    borderStyle: 'solid',
    borderRadius: '2vmin',
    marginTop: '2vmin',
  },
  label: {
    display: 'inline-flex',
    alignItems: 'center',
    paddingTop: '0.5vmin',
    paddingBottom: '0.5vmin',
    marginRight: '1vmin',
    marginLeft: '1vmin',
    cursor: 'pointer',
  },
  circle: {
    display: 'inline-block',
    height: '2vmin',
    width: '2vmin',
    borderRadius: '1vmin',
  },
  name: {
    display: 'inline-block',
    marginLeft: '1vmin',
  },
};

const Legend = (props) => {
  return (
    <div style={styles.legend}>
      <div style={styles.title}>{props.title}</div>
      <div style={styles.unit}>{props.unit}</div>
      {props.labels && (
        <div style={styles.labels}>
          {props.labels.map((el, i) => (
            <div key={i} style={styles.label}>
              <div
                style={Object.assign(
                  { ...styles.circle },
                  {
                    backgroundColor: el.color,
                  }
                )}
              ></div>
              <div style={styles.name}>{el.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Legend;
