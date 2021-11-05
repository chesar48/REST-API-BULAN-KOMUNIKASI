const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');


//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./routes');
routes(app);

app.listen(3004, () => {
    console.log(`Server started on port`);
});

//app listen cpanel
// app.listen(() => {
//     console.log(`Server started on port`);
// });