const express = require('express');
const router = express.Router();
const Blogs = require('../models/Blogs');
const path = require('path');

router.get('/', (req, res) => {
    Blogs.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.send(err))
});

router.post('/', adminRouteAuth, async (req, res) => {
    const newBlog = new Blogs({
        title : req.body.title,
        published_on : req.body.published_on,
        authors : req.body.authors,
        tags : req.body.tags,
        isFeatured : req.body.isFeatured,
        illustrationLink : req.body.illustrationLink,
        main_content : req.body.main_content
    });
    try{
        await newBlog.save();
        res.status(201);
        res.json(req.body);
    }catch(err){
        res.send(err);
    }
});

router.get('/:slug', (req, res) => {
    Blogs.find({slug : req.params.slug})
    .then(blog => res.json(blog))
    .catch(err => res.send(err));
});

router.delete('/:slug', (req, res) => {
    Blogs.findOneAndDelete({slug : req.params.slug})
    .then(deletedBlog => res.send(`${deletedBlog.title} has been deleted.`))
    .catch(err => res.send(err));
});


//Admin auth middleware function
function adminRouteAuth(req, res, next){
    const authToken = req.headers.authorization;
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
}
module.exports = router;
