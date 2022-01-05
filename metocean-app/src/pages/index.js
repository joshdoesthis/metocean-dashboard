import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import queries
import metoceanAll from '../queries/metoceanAllQuery';

// Import components
import Directions from '../components/Directions';
import Distances from '../components/Distances';
import Durations from '../components/Durations';
import Heights from '../components/Heights';
import Percentages from '../components/Percentages';
import Speeds from '../components/Speeds';
import Temperatures from '../components/Temperatures';
import Volumes from '../components/Volumes';

// Styles
const styles = {
  loading: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

// Loading indicator
const Loading = () => (
  <div style={styles.loading}>
    <span>Loading...</span>
  </div>
);

const IndexPage = () => {
  // Get Metocean data
  const [metoceanData, setMetoceanData] = useState([]);

  useEffect(() => {
    axios({
      url: 'https://t4xev4xyji.execute-api.us-east-1.amazonaws.com/dev/',
      method: 'post',
      data: {
        query: metoceanAll,
      },
    }).then((result) => setMetoceanData(result.data.data));
  }, []);

  return metoceanData.metoceanAll ? (
    <>
      <Directions metoceanData={metoceanData.metoceanAll} />
      <Distances metoceanData={metoceanData.metoceanAll} />
      <Durations metoceanData={metoceanData.metoceanAll} />
      <Heights metoceanData={metoceanData.metoceanAll} />
      <Percentages metoceanData={metoceanData.metoceanAll} />
      <Speeds metoceanData={metoceanData.metoceanAll} />
      <Temperatures metoceanData={metoceanData.metoceanAll} />
      <Volumes metoceanData={metoceanData.metoceanAll} />
    </>
  ) : (
    <Loading />
  );
};

export default IndexPage;
