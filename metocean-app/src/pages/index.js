import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../components/Layout';
import MetoceanAllQuery from '../graphql/MetoceanAllQuery';
import WindSpeedLines from '../components/WindSpeedLines';

// Markup
const IndexPage = () => {
  // Client runtime data fetching
  const [metoceanData, setMetoceanData] = useState([]);

  // Get Metocean data
  useEffect(() => {
    axios({
      url: 'https://t4xev4xyji.execute-api.us-east-1.amazonaws.com/dev/',
      method: 'post',
      data: {
        query: `
          query Query {
            metoceanAll {
              time
              wsp
              gst
              wsp100
              wsp50
              wsp80
            }
          }
        `,
      },
    }).then((result) => {
      console.log(result);
      setMetoceanData(result.data.data);
    });
  }, []);

  return (
    <Wrapper>
      {metoceanData.metoceanAll && <WindSpeedLines lineData={metoceanData} />}
    </Wrapper>
  );
};

export default IndexPage;
