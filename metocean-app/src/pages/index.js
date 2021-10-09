import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as D3 from 'd3';
import * as V from 'victory';
import { style } from 'd3';

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

  const theme = V.VictoryTheme.material;
  const padding = { chart: { top: 8, right: 8, bottom: 28, left: 28 } };
  const domainPadding = { x: 1, y: 1 };
  const styles = {
    axis: {
      axis: {
        strokeWidth: 1,
      },
      grid: {
        //stroke: 'none',
      },
      ticks: {
        size: 2,
      },
      tickLabels: {
        fontSize: 8,
      },
    },
    line: {
      data: {
        strokeWidth: 1,
        strokeLinejoin: 'round',
      },
    },
    chart: {},
  };

  const WindLines = (
    <V.VictoryGroup style={styles.group}>
      <V.VictoryLine
        style={styles.line}
        data={metoceanData.metoceanAll}
        interpolation={'natural'}
        x='time'
        y='gst'
      />
      <V.VictoryLine
        style={styles.line}
        data={metoceanData.metoceanAll}
        interpolation={'natural'}
        x='time'
        y='wsp'
      />
      <V.VictoryLine
        style={styles.line}
        data={metoceanData.metoceanAll}
        interpolation={'natural'}
        x='time'
        y='wsp50'
      />
      <V.VictoryLine
        style={styles.line}
        data={metoceanData.metoceanAll}
        interpolation={'natural'}
        x='time'
        y='wsp80'
      />
      <V.VictoryLine
        style={styles.line}
        data={metoceanData.metoceanAll}
        interpolation={'natural'}
        x='time'
        y='wsp100'
      />
    </V.VictoryGroup>
  );

  return (
    <main style={pageStyles}>
      <V.VictoryChart
        theme={theme}
        height={padding.chart.top + padding.chart.bottom + 100} // Total vertical padding + height;
        padding={padding.chart}
        domainPadding={domainPadding}
        style={styles.chart}
        scale={{
          x: D3.scaleUtc(),
          y: 'linear',
        }}
        containerComponent={
          <V.VictoryZoomContainer
            zoomDimension='x'
            zoomDomain={selectedDomain}
            disable
          />
        }
      >
        {WindLines}
        <V.VictoryAxis style={styles.axis} />
        <V.VictoryAxis dependentAxis style={styles.axis} />
      </V.VictoryChart>

      <V.VictoryChart
        theme={theme}
        height={padding.chart.top + padding.chart.bottom + 25} // Total vertical padding + height;
        padding={padding.chart}
        domainPadding={domainPadding}
        scale={{
          x: D3.scaleUtc(),
          y: 'linear',
        }}
        containerComponent={
          <V.VictoryBrushContainer
            brushDimension='x'
            brushDomain={selectedDomain}
            onBrushDomainChange={(domain) => setSelectedDomain(domain)}
          />
        }
      >
        {WindLines}
        <V.VictoryAxis
          style={{
            axis: {
              stroke: 'none',
            },
            grid: {
              stroke: 'none',
            },
            ticks: {
              stroke: 'none',
            },
            tickLabels: {
              fill: 'none',
            },
          }}
        />
      </V.VictoryChart>
    </main>
  );
};

export default IndexPage;
