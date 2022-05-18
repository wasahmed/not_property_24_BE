const express = require('express');
const query = require("../../database/query")
const router = express.Router();

router.get('/', async (req, res) => {
    let property = await query.GetAllProperty();
    console.log(property);
    res.json(property);
});

router.get('/:id', async (req, res) => {
    let property = await query.GetProperty(req.params.id);
    const found = property.some(p => p.PropertyID === parseInt(req.params.id));

    if (found)
        res.json(property.filter(p => p.PropertyID === parseInt(req.params.id)));
    else
        res.status(400).json( {error: `No propertyType with id of ${req.params.PropertyID}`});
});

module.exports = router;