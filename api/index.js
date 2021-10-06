const { ApolloServer, gql } = require('apollo-server');
const { GraphQLScalarType, Kind } = require('graphql');
const fs = require('fs');
const { argsToArgsConfig } = require('graphql/type/definition');

// METOCEAN DATA SOURCE

const weatherData = [];

fs.readFile('metocean.txt', 'utf8', (err, data) => {
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

  // Create objects with headings as properties and row data as values
  weatherData.push(
    ...rows.map((row) =>
      row.reduce(
        (arr, val, index) => ({
          ...arr,
          [headings[index]]: index > 0 ? Number(val) : Date.parse(val),
        }),
        {}
      )
    )
  );
});

// Type definitions
const typeDefs = gql`
  scalar Number

  type Weather {
    time: Number
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
    weatherAll: [Weather]
    weatherBetween(start: Number! end: Number!): [Weather]
  }
`;

// Number scalar
const numberScalar = new GraphQLScalarType({
  name: 'Number',
  description: 'Number as int or decimal',
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
  Number: numberScalar,

  Query: {
    weatherAll: () => weatherData,
    weatherBetween: (_, args) => weatherData.filter(el=> el.time >= args.start && el.time <= args.end)
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
