const express = require('express');
const router = express.Router();
const Projects = require('../models/Projects');
const path = require('path');


router.get('/', (req, res) => {
    Projects.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.send(err))
});

router.post('/', adminRouteAuth, async (req, res) => {
    const newProject = new Projects({
        name : req.body.name,
        imgURL : req.body.imgURL,
        description : req.body.description,
        docsLink : req.body.docsLink,
        hostLink : req.body.hostLink
    })
    try{
        await newProject.save();
        res.status(201);
        res.json(req.body);
    }catch(err){
        res.send(err);
    }
});


//Admin auth middleware function
function adminRouteAuth(req, res, next){
    const authToken = req.headers.authorization;
    if(authToken){
        const encoded = authToken.substring(6);
    const decoded = Buffer.from(encoded, 'base64').toString('ascii');
    const [username, password] = decoded.split(':');
    if((username === process.env.ADMIN_USERNAME) && (password === process.env.ADMIN_PASSWORD)){
        console.log("Auth passed");
        next();
    }else{
        const rootDir = path.join(__dirname, '../');
        res.status(401);
        res.sendFile("accessDenied.html", {root: rootDir + '/views'});
    }
    }else{
        const rootDir = path.join(__dirname, '../');
        res.status(401);
        res.sendFile("accessDenied.html", {root: rootDir + '/views'});
    }
    
}

module.exports = router;