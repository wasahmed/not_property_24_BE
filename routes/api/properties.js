const express = require('express');
const query = require("../../database/query")
const router = express.Router();

router.get('/', async (req, res) => {
    // get filters from query params
    let conditions = [];
    if(req.query.AgentID){
        conditions.push({type:"EQUAL",field:"AgentID",value:req.query.AgentID});
    }
    if(req.query.PropertyTypeID){
        conditions.push({type:"EQUAL",field:"PropertyTypeID",value:req.query.PropertyTypeID});
    }
    if(req.query.ListingTypeID){
        conditions.push({type:"EQUAL",field:"ListingTypeID",value:req.query.ListingTypeID});
    }
    if(req.query.Price){
        let prices = req.query.Price;
        let arrPrices = prices.split("-");
        conditions.push({type:"GREATER",field:"Price",value:arrPrices[0]});
        conditions.push({type:"LESS",field:"Price",value:arrPrices[1]});
    }
    if(req.query.Size){
        let sizes = req.query.Size;
        let arrSizes = sizes.split("-");
        conditions.push({type:"GREATER",field:"Size",value:arrSizes[0]});
        conditions.push({type:"LESS",field:"Size",value:arrSizes[1]});
    }
    if(req.query.NoOfBedrooms){
        conditions.push({type:"EQUAL",field:"NoOfBedrooms",value:req.query.NoOfBedrooms});
    }
    if(req.query.NoOfBathrooms){
        conditions.push({type:"EQUAL",field:"NoOfBathrooms",value:req.query.NoOfBathrooms});
    }
    if(req.query.NoOfParkingSpaces){
        conditions.push({type:"EQUAL",field:"NoOfParkingSpaces",value:req.query.NoOfParkingSpaces});
    }
    // run query with all conditions
    let properties = await query.GetProperties(conditions);
    console.log(properties);
    res.json(properties);
});

router.get('/:id', async (req, res) => {
    let property = await query.GetProperties([{type:"EQUAL",field:"PropertyID",value:req.params.id}]);
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