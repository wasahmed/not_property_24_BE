const express = require('express');
const query = require("../../database/query")
const router = express.Router();

// router.get('/', async (req, res) => {
//     let property = await query.GetAllProperty();
//     console.log(property);
//     res.json(property);
// });

router.get('/:id', async (req, res) => {
    let result =null;
    let images = await query.GetImagesForProperty(req.params.id);
    const found = images.some(p => p.PropertyID === parseInt(req.params.id));

    if (found){
        result = images.filter(p => p.PropertyID === parseInt(req.params.id));
        console.log(result);
        res.json(result);
    }
    else
        res.status(400).json( {error: `No Images with id of ${req.params.PropertyImageID}`});
});

module.exports = router;