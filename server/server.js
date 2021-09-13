var cors = require('cors');
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`

    type Event {
        id: Int!
        title: String
        date: String
        startTime: String
        spotifyUrl: String
        supportingActs: [String]
    }

    type Query {
        events(dateFrom: String, dateTo: String): [Event]
  }
`);


class Event {
    constructor(id, title, date, startTime, spotifyUrl, supportingActs) {
        this.id = id
        this.title = title
        this.date = date
        this.startTime = startTime
        this.spotifyUrl = spotifyUrl
        this.supportingActs = supportingActs
    }
}


// The root provides a resolver function for each API endpoint
var eventList = [
            new Event(1, "Modeselektor Live Tour 2022", "2022-02-23T19:00:00", "2022-02-23T19:00:00", "https://open.spotify.com/embed/artist/2jYMYP2SVifgmzNRQJx3SJ",["Alex Banks", "eLan"]),
            new Event(2, "PORTICO QUARTET", "2022-06-15T19:00:00", "2022-06-15T19:00:00", "https://open.spotify.com/embed/artist/7sYipTRgDXS2JVOPEhRutx",["Matthew Halsall", "Phil France", "Paradise Cinema"]),
            new Event(3, "SE SO NEON ", "2022-06-15T19:00:00", "2022-06-15T20:00:00", "https://open.spotify.com/embed/artist/07OePkse2fcvU9wlVftNMl",["KimSuyoung", "10cm", "Yozoh", "Minsu"]),
            new Event(4, "DJ Krush", "2022-07-20T19:00:00", "2022-07-20T19:00:00", "https://open.spotify.com/embed/artist/00G1NTDAoU7rBpjG4KoYAM",["Yosi Horikawa"]),
            new Event(5, "GoGo Penguin", "2022-03-20T00:00:00", "2022-03-20T20:00:00", "https://open.spotify.com/embed/artist/19f2JXwlRU26376TCKmp6L",["Mammal Hands", "Hania Rani"]),
            new Event(6, "Soft Lipa", "2022-04-02T21:00:00", "2020-04-02T21:00:00", "https://open.spotify.com/embed/artist/3Xp3DA50zRP4TYOtNR7k1T",["GorDoN", "Leo Wang"]),
            new Event(7, "Kendrick Lemar", "2022-08-01T19:00:00", "2022-08-01T19:00:00", "https://open.spotify.com/embed/artist/2YZyLoL8N0Wb9xBt1NhZWg",["Jay Rock", "ScHoolboy Q", "Lance Skiiiwalker", "Isaiah Rashad"]),
            new Event(8, "Apparat", "2022-06-13T20:00:00", "2022-06-13T20:00:00", "https://open.spotify.com/embed/artist/7Eu1txygG6nJttLHbZdQOh",["DAS BIERBEBEN", "Oval", "Sid LeRock"]),
            new Event(9, "Four Tet", "2022-05-10T22:00:00", "2022-05-10T22:00:00", "https://open.spotify.com/embed/artist/7Eu1txygG6nJttLHbZdQOh",["Fridge", "DJ EZ"]),
            new Event(10, "Ryuichi Sakamoto", "2022-01-28T19:00:00", "2022-01-28T19:00:00", "https://open.spotify.com/embed/artist/1tcgfoMTT1szjUeaikxRjA",[]),
            new Event(11, "Kamashi Washington", "2022-03-20T19:00:00", "2022-03-20T19:00:00", "https://open.spotify.com/embed/artist/6HQYnRM4OzToCYPpVBInuU",["Lapalux", "Mr.Ozio"]),
            new Event(12, "Mulatu Astatke", "2022-04-13T20:00:00", "2022-04-13T20:00:00", "https://open.spotify.com/embed/artist/7HGFXtBhRq3g1Ma3nH4Rgv",["Kokoroko"]),
            new Event(13, "Woo", "2022-02-10T19:00:00", "2022-02-10T19:00:00", "https://open.spotify.com/embed/artist/5a8EJtOEbUJDF4RX3mKK02",["P-Type", "Nucksal", "Sleepy", "Hangzoo"]),
            new Event(14, "Floating Points", "2022-03-18T22:00:00", "2022-03-18T22:00:00", "https://open.spotify.com/embed/artist/2AR42Ur9PcchQDtEdwkv4L",["Amon Tobin", "A Winged Victory for the Sullen"]),
            new Event(15, "FKJ", "2022-05-07T19:00:00", "2022-05-07T19:00:00", "https://open.spotify.com/embed/artist/2FwDTncULUnmANIh7qKa5z", ["Tom Misch", "Masego"]),
            new Event(16, "Atoms For Peace", "2022-04-12T20:00:00", "2022-04-12T20:00:00", "https://open.spotify.com/embed/artist/7tA9Eeeb68kkiG9Nrvuzmi", ["Red Hot Chili Peppers", "Radiohead"]),
        ];


var root = {
    events: ({ dateFrom, dateTo }) => {
        var filteredEvents = eventList.filter((e)=> new Date(e.date) >= new Date(dateFrom) && new Date(e.date) <= new Date(dateTo))
           
        return filteredEvents;
    },
};


var app = express();
app.use(cors());
app.options('*', cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
