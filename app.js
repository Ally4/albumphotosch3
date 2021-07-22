const express = require('express');
const cors = require('cors');
const routes = require('./src/router/router');



const app = express();

const PORT = process.env.PORT || 1234;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(routes);

app.use(
    cors({
        origin: "*",
        methods: "GET",
        preflightContinue: false,
        optionsSuccessStatus: 204
    })
);


app.listen(PORT, function () {
    console.log('The application is running on the port ' + PORT);
});