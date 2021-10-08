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
              lev
              hs
              hx
              tp
              tm01
              tm02
              dp
              dpm
              hs_sw1
              hs_sw8
              tp_sw1
              tp_sw8
              dpm_sw8
              dpm_sw1
              hs_sea8
              hs_sea
              tp_sea8
              tp_sea
              tm_sea
              dpm_sea8
              dpm_sea
              hs_ig
              hs_fig
              wsp
              gst
              wd
              wsp100
              wsp50
              wsp80
              precip
              tmp
              rh
              vis
              cld
              cb
              csp0
              cd0
              ss
              sst
            }
          }
        `,
      },
    }).then((result) => setMetoceanData(result.data.data));
  }, []);

  return (
    <main style={pageStyles}>
      <V.VictoryChart
        //domainPadding={5}
        scale={{
          x: D3.scaleUtc(),
          y: 'linear',
        }}
      >
        <V.VictoryBar
          data={metoceanData.metoceanAll}
          x='time'
          y='tmp'
          style={{ data: { fill: 'white' } }}
        />
      </V.VictoryChart>
    </main>
  );
};

export default IndexPage;
