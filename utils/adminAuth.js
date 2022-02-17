function adminAuth(req, res, next){
    if(req.query.key === process.env.SECRET_KEY){
        next();
    }else{
        const rootDir = path.join(__dirname, '../');
        res.status(403);
        res.sendFile("accessDenied.html", {root: rootDir + '/views'});
    }
}

module.exports = {adminAuth};