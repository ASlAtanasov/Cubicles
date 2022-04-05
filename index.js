const express = require('express');

const config = require('./config/config.js');
const routes = require('./routes')
const app = express();

//const expressConfig = require('./config/express.js');
//expressConfig(app);
require('./config/express.js')(app);

app.use(routes);

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));