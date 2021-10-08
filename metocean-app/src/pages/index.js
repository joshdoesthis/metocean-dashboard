import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as D3 from 'd3';

// Styles
const pageStyles = {};

// Markup
const IndexPage = () => {
  // Client-side Runtime Data Fetching
  const [metoceanData, setMetoceanData] = useState(0);

  useEffect(() => {
    axios({
      url: 'https://t4xev4xyji.execute-api.us-east-1.amazonaws.com/dev/',
      method: 'post',
      data: {
        query: `
          query Query {
            metoceanAll {
              time
              sst
              vis
              rh
              tmp
              precip
            }
          }
      `,
      },
    }).then((result) => setMetoceanData(result.data.data));
  }, []);

  return <main style={pageStyles}></main>;
};

export default IndexPage;
