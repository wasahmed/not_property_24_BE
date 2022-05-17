const express = require('express');
const query = require("../../database/query")
const uuid = require('uuid');
const router = express.Router();

router.get('/', async (req, res) => {
    let propertyTypes = await query.GetAllPropertyTypes();
    console.log(propertyTypes);
    res.json(propertyTypes);
});

router.get('/:id', async (req, res) => {
    let propertyTypes = await query.GetAllPropertyTypes();
    const found = propertyTypes.some(propertyType => propertyType.PropertyTypeID === parseInt(req.params.id));

    if (found)
        res.json(propertyTypes.filter(propertyType => propertyType.PropertyTypeID === parseInt(req.params.id)));
    else
        res.status(400).json( {error: `No propertyType with id of ${req.params.PropertyTypeID}`});
});

// NOT YET IMPLEMENTED
// router.post('/', (req, res) => {
//     const newListing = {
//         id: uuid.v4(),
//         name: req.body.name,
//         email: req.body.email,
//         status: 'active'
//     }

//     if(!newListing.name || !newListing.email){
//         res.status(400).json({ error: 'Please include a name and email'});
//     } 

//     listings.push(newListing);
//     res.json(listings);
//     //res.redirect('/listings.html')
// });

// router.put('/:id', (req, res) => {
//     const found = listings.some(listing => listing.id === parseInt(req.params.id));

//     if (found){
//         const updMember = req.body;
//         listings.forEach(listing => {
//             if(listing.id === parseInt(req.params.id)){
//                 listing.name = updMember.name ? updMember.name : listing.name
//                 listing.email = updMember.email ? updMember.email : listing.email

//                 res.json({ msg: 'listing updated', listing})
//             }
//         });
//     }
//     else{
//         res.status(400).json( {error: `No listing with id of ${req.params.id}`});
//     }
// });

// router.delete('/:id', (req, res) => {
//     const found = listings.some(listing => listing.id === parseInt(req.params.id));

//     if (found)
//         res.json({msg: 'listing deleted', listings: listings.filter(listing => listing.id !== parseInt(req.params.id))});
//     else
//         res.status(400).json( {error: `No listing with id of ${req.params.id}`});
// });

module.exports = router;