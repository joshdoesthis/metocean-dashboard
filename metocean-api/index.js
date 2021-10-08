const { ApolloServer, gql } = require('apollo-server-lambda');
const { GraphQLScalarType, Kind } = require('graphql');
const fs = require('fs');

// Parse Metocean data
const metoceanData = [];

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
  metoceanData.push(
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

  type Metocean {
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
    metoceanAll: [Metocean]
    metoceanAt(time: Number!): Metocean
    metoceanBetween(start: Number!, end: Number!): [Metocean]
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
    metoceanAll: () => metoceanData, // Get all metocean data
    metoceanAt: (_, args) =>
      metoceanData.filter((el) => el.time == args.time)[0], // Get metocean data at timestamp
    metoceanBetween: (_, args) =>
      metoceanData.filter((el) => el.time >= args.start && el.time <= args.end), // Get metocean data between two timestamps
  },
};

// Create server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Listen for connections
//server.listen().then(({ url }) => {
//console.log(`API server ready at ${url}`);
//});

// For serverless lambda
exports.graphqlHandler = server.createHandler();
