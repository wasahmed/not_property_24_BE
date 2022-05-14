const express = require('express');
const query = require("../../database/query")
const router = express.Router();

router.get('/', async (req, res) => {
    let properties = await query.GetProperties();
    console.log(properties);
    res.json(properties);
});

router.get('/:id', async (req, res) => {
    let property = await query.GetProperties({type:"EQUAL",field:"PropertyID",value:req.params.id});
    if(property){
        res.json(property);
    }else{
        res.status(400).json( {error: `No Property with id of ${req.params.id}`});
    }
});

router.get('/address/:id', async (req, res) => {
    let address = await query.GetAddress(req.params.id);
    if(address){
        res.json(address);
    }else{
        res.status(400).json( {error: `No address with id of ${req.params.id}`});
    }
});

router.get('/images/:id', async (req, res) => {
    let images = await query.GetImages(req.params.id);
    if(images){
        res.json(images);
    }else{
        res.status(400).json( {error: `No images with property id of ${req.params.id}`});
    }
});

module.exports = router;