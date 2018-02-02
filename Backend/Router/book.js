const express = require("express");
const Event = require("../moduls/book");
const router = express.Router();

module.exports = function(passport){


        
        router.get("/", (req, res) => {

            query = {}
            if (req.query.restauranId){
                query.restauranId =req.query.restauranId
            }
        
            Event.find(query, (error, result) => {
                if(error){
                    res.status(500).json(error);
                }
                else{
                    res.json(result)
                }
            });
        });
        
        router.get("/:id", (req, res) => {
            
                Event.findById(req.params.id, (error, result) => {
                    if(error){
                        res.status(500).json(error);
                    }
                    else{
                        res.json(result)
                    }
                });
            
            });
        
        router.post("/new", (req, res) => {
        
                let newObj = new Event({
                    restauranId: req.body._id,
                    checkIn: req.body.checkIn,
                    name: req.body.name,
                    people:req.body.people
                });
                
                newObj.save((error) => {
                    if (error) {
                        res.status(500).send(error);
                    }
                    else{
                        res.json(newObj);
                    }
                });
        
            });
    
        
        router.delete("/:id", (req, res) => {
        
            Event.findByIdAndRemove(req.params.id, (error, result) => {
                if(error){
                    res.status(500).json(error);
                }
                else{
                    res.json({ message : "Data deleted" })
                }
            });
            
        });
        
        router.put("/", (req, res) => {
            
            let newObj = {
                checkIn: req.body.checkIn,
                name: req.body.name,
                people:req.body.people
            };
        
            Event.findByIdAndUpdate(req.body._id, newObj,  (error, result) => {
                if(error){
                    res.status(500).json(error);
                }
                else {
                    res.json(result)
                }
            });
        
        });
    
        return router;
    };