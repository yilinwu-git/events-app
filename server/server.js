var cors = require('cors');
var express = require('express');

var app = express();
app.use(cors());
app.options('*', cors());
app.use('/api/graphql');
/*
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
*/
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`GraphQL API Server running on ${port}, http://localhost:${port}`));
