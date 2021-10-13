import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper } from '../components/Layout';
import Legend from '../components/Legend';
import MetoceanAllQuery from '../graphql/MetoceanAllQuery';
import WindSpeedChart from '../components/WindSpeedChart';

// Markup
const IndexPage = () => {
  // Client runtime data fetching
  const [metoceanData, setMetoceanData] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState({});
  const [active, setActive] = useState([
    { short: 'gst', name: 'Typical Gust', color: '#B0C4DE', active: true },
    { short: 'wsp', name: '10m', color: '#B0E0E6', active: false },
    { short: 'wsp50', name: '50m', color: '#87CEFA', active: false },
    { short: 'wsp80', name: '80m', color: '#1E90FF', active: false },
    { short: 'wsp100', name: '100m', color: '#4169E1', active: true },
  ]);
  const [selectedUnit, setSelectedUnit] = useState([]);

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
            labels={active}
            setActive={setActive}
            defaultUnit={'kts'}
            selectedUnit={selectedUnit}
            setSelectedUnit={setSelectedUnit}
            selectedDomain={selectedDomain}
            setSelectedDomain={setSelectedDomain}
          />
          <div style={{ width: '33vw', marginLeft: '5.33vw' }}>
            <WindSpeedChart
              height={50}
              metoceanData={metoceanData.metoceanAll}
              activeLines={active}
              selectedUnit={selectedUnit}
              selectedDomain={selectedDomain}
              setSelectedDomain={setSelectedDomain}
              withBrush
            />
          </div>
          <div style={{ marginTop: '-3vh' }}>
            <WindSpeedChart
              height={100}
              metoceanData={metoceanData.metoceanAll}
              activeLines={active}
              selectedUnit={selectedUnit}
              selectedDomain={selectedDomain}
              setSelectedDomain={setSelectedDomain}
              withZoom
              withAxis
            />
          </div>
          <Legend
            title={'Wind Direction'}
            labels={active}
            setActive={setActive}
            defaultUnit={'deg'}
            selectedUnit={selectedUnit}
            setSelectedUnit={setSelectedUnit}
            selectedDomain={selectedDomain}
            setSelectedDomain={setSelectedDomain}
          />
        </>
      )}
    </Wrapper>
  );
};

export default IndexPage;
