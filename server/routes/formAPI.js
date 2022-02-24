const express = require('express');
const router = express.Router();
const path = require('path');

router.post('/', (req, res) => {
    // console.log(req.body);
    //some mailing shit
    res.json({status: 200, message : 'Your form has been submitted'});
});

module.exports = router;
