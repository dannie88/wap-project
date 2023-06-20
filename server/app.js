const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const router = require('./routes/productRouter');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/api', router);

app.listen(3000, () => console.log('listening to 3000...'));
