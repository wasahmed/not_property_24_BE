const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger')

const app = express();

app.use(logger);
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/propertytype', require('./routes/api/propertyType'));
app.use('/api/listingtype', require('./routes/api/listingType'));
app.use('/api/property', require('./routes/api/property'));
//app.use('/api/properties', require('./routes/api/properties'));

const PORT = 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));