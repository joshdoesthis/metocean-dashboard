import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper } from '../components/Layout';
import Legend from '../components/Legend';
import MetoceanAllQuery from '../graphql/MetoceanAllQuery';
import WindSpeedLines from '../components/WindSpeedLines';

// Markup
const IndexPage = () => {
  // Client runtime data fetching
  const [metoceanData, setMetoceanData] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState([]);

  // Get Metocean data
  useEffect(() => {
    axios({
      url: 'https://t4xev4xyji.execute-api.us-east-1.amazonaws.com/dev/',
      method: 'post',
      data: {
        query: MetoceanAllQuery,
      },
    }).then((result) => setMetoceanData(result.data.data));
  }, []);

  return (
    <Wrapper>
      {metoceanData.metoceanAll && (
        <>
          <Legend
            title={'Wind Speed'}
            unit={'Knots'}
            labels={[
              { short: 'gst', name: 'Typical Gust', color: '#FFF59D' },
              { short: 'wsp', name: '10m', color: '#F4511E' },
              { short: 'wsp50', name: '50m', color: '#DCE775' },
              { short: 'wsp80', name: '80m', color: '#8BC34A' },
              { short: 'wsp100', name: '100m', color: '#00796B' },
            ]}
          />
          <WindSpeedLines
            height={100}
            metoceanData={metoceanData.metoceanAll}
            selectedDomain={selectedDomain}
            setSelectedDomain={setSelectedDomain}
            withZoom
            withAxis
          />
          <WindSpeedLines
            height={25}
            metoceanData={metoceanData.metoceanAll}
            selectedDomain={selectedDomain}
            setSelectedDomain={setSelectedDomain}
            withBrush
          />
        </>
      )}
    </Wrapper>
  );
};

export default IndexPage;
