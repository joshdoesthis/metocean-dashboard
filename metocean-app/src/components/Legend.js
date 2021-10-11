import React from 'react';

const styles = {
  legend: {
    fontFamily: 'sans-serif',
    lineHeight: 1.5,
    marginTop: '2vw',
    marginRight: '2vw',
    marginBottom: '2vw',
    marginLeft: '8vw',
  },
  title: {
    color: '#455A64',
    fontWeight: 'bold',
    fontSize: '4vw',
  },
  unit: {
    color: '#90A4AE',
    fontSize: '3vw',
  },
  labels: {
    display: 'inline-flex',
    fontSize: '2vw',
    color: '#455A64',
    //borderWidth: '0.2vw',
    //borderColor: '#ECEFF1',
    //borderStyle: 'solid',
    //borderRadius: '2vw',
    marginTop: '2vw',
  },
  label: {
    display: 'inline-flex',
    alignItems: 'center',
    //paddingTop: '0.5vw',
    //paddingBottom: '0.5vw',
    marginRight: '2vw',
    //marginLeft: '1vw',
    cursor: 'pointer',
  },
  circle: {
    display: 'flex',
    height: '2vw',
    width: '2vw',
    borderRadius: '1vw',
  },
  name: {
    display: 'inline-block',
    marginLeft: '1vw',
  },
};

const Legend = (props) => {
  return (
    <div style={styles.legend}>
      <div style={styles.title}>{props.title}</div>
      <div style={styles.unit}>{props.unit}</div>
      {props.labels && (
        <div style={styles.labels}>
          {props.labels.map((label, i) => (
            <div
              key={i}
              style={styles.label}
              onClick={() =>
                // Toggle label and presentation of data
                props.setActive(
                  Object.assign(
                    [...props.labels],
                    ([...props.labels][i].active = ![...props.labels][i].active)
                  )
                )
              }
            >
              <div
                style={Object.assign(
                  { ...styles.circle },
                  {
                    backgroundColor: label.active ? label.color : '#ECEFF1',
                  }
                )}
              ></div>
              <div style={styles.name}>{label.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Legend;
