const express = require('express');
const query = require("../../database/query")
const router = express.Router();

router.get('/', async (req, res) => {
    let property = await query.GetAllProperty();
    console.log(property);
    res.json(property);
});

// router.get('/:id', async (req, res) => {
//     let listingTypes = await query.GetAllListingTypes();
//     const found = listingTypes.some(listingType => listingType.ListingTypeID === parseInt(req.params.id));

//     if (found)
//         res.json(listingTypes.filter(listingType => listingType.ListingTypeID === parseInt(req.params.id)));
//     else
//         res.status(400).json( {error: `No propertyType with id of ${req.params.ListingTypeID}`});
// });

module.exports = router;