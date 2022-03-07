export const PORT = 8080;
export const environment = {
  development: {
    serverURL: `http://localhost:${PORT}/`,
    dbString: "mongodb://localhost:27017/graphqlTutorial",
  },
  production: {
    serverURL: `http://localhost:${PORT}/`,
    dbString: "mongodb://localhost:27017/graphqlTutorial-prod",
  },
};
