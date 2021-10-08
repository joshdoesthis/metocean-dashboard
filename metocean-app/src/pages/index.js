import React, { useState, useEffect } from 'react';

const axios = require('axios');

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
            }
          }
      `,
      },
    }).then((result) => setMetoceanData(result.data.data));
  }, []);

  return (
    <main style={pageStyles}>
      <p>{console.log(metoceanData)}</p>
    </main>
  );
};

export default IndexPage;
