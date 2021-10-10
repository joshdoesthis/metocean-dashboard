import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../components/Layout';
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
          <WindSpeedLines
            metoceanData={metoceanData.metoceanAll}
            selectedDomain={selectedDomain}
            setSelectedDomain={setSelectedDomain}
            withZoom
          />
          <WindSpeedLines
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
