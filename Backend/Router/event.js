const express = require("express");
const Event = require("../moduls/event");
const router = express.Router();

module.exports = function(passport){


        
        router.get("/", (req, res) => {

            query = {}
            if (req.query.userId){
                query.userId =req.query.userId
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
        
        
            if (!req.files.profile) {
                return res.status(400).send("No files were uploaded");
            }
        
            let image = req.files.profile;
            let date = new Date();
            let imageName = date.getTime() + ".png"
        
            image.mv("./public/profile/" + imageName, (error) => {
                
                if (error) return res.status(500).send(error);
                
                let newObj = new Event({
                    userId: req.body.userId,
                    name : req.body.name,
                    address : req.body.address,
                    start : req.body.start,
                    ends : req.body.ends,
                    details: req.body.details,
                    profile : "http://localhost:3000/profile/" + imageName
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
                name : req.body.name,
                address : req.body.address,
                start : req.body.start,
                ends : req.body.ends,
                details: req.body.details,
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