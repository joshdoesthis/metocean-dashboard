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

  const [selectedDomain, setSelectedDomain] = useState([]);

  return (
    <main style={pageStyles}>
      <V.VictoryChart
        //theme={V.VictoryTheme.material}
        height={200}
        scale={{
          x: D3.scaleUtc(),
          y: 'linear',
        }}
        containerComponent={
          <V.VictoryZoomContainer
            //responsive={false}
            zoomDimension='x'
            zoomDomain={selectedDomain}
            disable
          />
        }
      >
        <V.VictoryGroup
          style={{
            data: {
              strokeWidth: 0.5,
              strokeLinecap: 'round',
            },
          }}
        >
          {/*<V.VictoryLine data={metoceanData.metoceanAll} x='time' y='wsp100' />
          <V.VictoryLine data={metoceanData.metoceanAll} x='time' y='wsp80' />
        <V.VictoryLine data={metoceanData.metoceanAll} x='time' y='wsp50' />*/}
          <V.VictoryLine data={metoceanData.metoceanAll} x='time' y='wsp' />
          <V.VictoryLine data={metoceanData.metoceanAll} x='time' y='gst' />
        </V.VictoryGroup>
        <V.VictoryAxis
          dependentAxis
          label='Knots'
          style={{ tickLabels: { fontSize: 8 } }}
        />
      </V.VictoryChart>

      <V.VictoryChart
        //theme={V.VictoryTheme.material}
        height={200}
        scale={{
          x: D3.scaleUtc(),
          y: 'linear',
        }}
        containerComponent={
          <V.VictoryBrushContainer
            //responsive={false}
            brushDimension='x'
            brushDomain={selectedDomain}
            onBrushDomainChange={(domain) => {
              domain.x = [
                domain.x[0] - (domain.x[0] % 3600000),
                domain.x[1] - (domain.x[1] % 3600000),
              ];
              setSelectedDomain(domain);
            }}
          />
        }
      >
        <V.VictoryGroup
          style={{
            data: {
              strokeWidth: 0.5,
              strokeLinecap: 'round',
            },
          }}
        >
          {/*<V.VictoryLine data={metoceanData.metoceanAll} x='time' y='wsp100' />
          <V.VictoryLine data={metoceanData.metoceanAll} x='time' y='wsp80' />
        <V.VictoryLine data={metoceanData.metoceanAll} x='time' y='wsp50' />*/}
          <V.VictoryLine data={metoceanData.metoceanAll} x='time' y='wsp' />
          <V.VictoryLine data={metoceanData.metoceanAll} x='time' y='gst' />
        </V.VictoryGroup>
        <V.VictoryAxis dependentAxis style={{ tickLabels: { fontSize: 0 } }} />
        <V.VictoryAxis
          tickCount={2}
          tickFormat={(tick) => `${new Date(tick)}`}
          style={{ tickLabels: { fontSize: 8 } }}
        />
      </V.VictoryChart>

      <V.VictoryLegend
        title='Wind Speed'
        orientation='vertical'
        gutter={20}
        //theme={V.VictoryTheme.material}
        data={[
          { name: 'Typical Gust' },
          { name: '@ 10m' },
          { name: '@ 50m' },
          { name: '@ 80m' },
          { name: '@ 100m' },
        ]}
      />
    </main>
  );
};

export default IndexPage;
