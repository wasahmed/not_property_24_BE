const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('./middleware/logger')

const app = express();

app.use(logger);
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//set static folder using middleware
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/listings', require('./routes/api/listings'));

const PORT = 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));