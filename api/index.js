const { ApolloServer, gql } = require('apollo-server');
const { GraphQLScalarType, Kind } = require('graphql');
const fs = require('fs');

// METOCEAN DATA SOURCE

const weather = [];

fs.readFileSync('metocean.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Get rows
  const rows = data
    .split(/\r?\n/)
    .map((row) => row.split(/\t/))
    .filter((row) => row.length > 2);

  // Get headings
  const headings = rows
    .shift()
    .map((el) => el.toLowerCase().match(/^\w+/).shift());

  // Create objects with headings as properties and row-columns as values
  weather.push(
    ...rows.map((row) =>
      row.reduce(
        (arr, val, index) => ({
          ...arr,
          [headings[index]]: index > 0 ? Number(val) : val,
        }),
        {}
      )
    )
  );
});

// Type definitions
const typeDefs = gql`
  scalar Date
  scalar Number

  type Weather {
    time: Date
    lev: Number
    hs: Number
    hx: Number
    tp: Number
    tm01: Number
    tm02: Number
    dp: Number
    dpm: Number
    hs_sw1: Number
    hs_sw8: Number
    tp_sw1: Number
    tp_sw8: Number
    dpm_sw8: Number
    dpm_sw1: Number
    hs_sea8: Number
    hs_sea: Number
    tp_sea8: Number
    tp_sea: Number
    tm_sea: Number
    dpm_sea8: Number
    dpm_sea: Number
    hs_ig: Number
    hs_fig: Number
    wsp: Number
    gst: Number
    wd: Number
    wsp100: Number
    wsp50: Number
    wsp80: Number
    precip: Number
    tmp: Number
    rh: Number
    vis: Number
    cld: Number
    cb: Number
    csp0: Number
    cd0: Number
    ss: Number
    sst: Number
  }

  type Query {
    weather: Weather
    weathers: [Weather]
  }
`;

// Date scalar
const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date as integer',
  serialize(value) {
    return Date.parse(value); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

// Number scalar
const numberScalar = new GraphQLScalarType({
  name: 'Number',
  description: 'Number as either int or decimal.',
  serialize(value) {
    return Number(value);
  },
  parseValue(value) {
    return Number(value);
  },
  parseLiteral(ast) {
    return Number(ast.value);
  },
});

// Resolvers for data fetching
const resolvers = {
  Date: dateScalar,
  Number: numberScalar,

  Query: {
    weather: () => weather,
  },
};

// Create server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Listen for connections
server.listen().then(({ url }) => {
  console.log(`API server ready at ${url}`);
});
