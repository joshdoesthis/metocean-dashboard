import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as D3 from 'd3';
import * as V from 'victory';

// Styles
const pageStyles = {};

// Markup
const IndexPage = () => {
  // Client-side Runtime Data Fetching
  const [metoceanData, setMetoceanData] = useState([]);

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
            }
          }
      `,
      },
    }).then((result) => setMetoceanData(result.data.data));
  }, []);

  return (
    <main style={pageStyles}>
      <V.VictoryChart
        domainPadding={10}
        scale={{
          x: D3.scaleUtc(),
          y: 'linear',
        }}
      >
        <V.VictoryBar
          data={metoceanData.metoceanAll}
          x='time'
          y='wsp'
          style={{ data: { fill: 'white' } }}
        />
      </V.VictoryChart>
    </main>
  );
};

export default IndexPage;
