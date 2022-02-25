const express = require('express');
const router = express.Router();
const path = require('path');
const sendRequestMail = require('../utils/mail')

router.post('/', (req, res) => {
    const {email, name, requirements, additionals} = req.body;
    let reqArr = Object.entries(requirements);
    let reqStr = '';
    reqArr.forEach((require, i) => {
        if(require[1]){
            reqStr += `${require[0]}, `;
        }
    });
    const body = `My name is ${name}. My requirement type is ${reqStr}. Additional Information : ${additionals}`
    sendRequestMail(email, body, function(err, info){
        if(err){
            console.log(err);
            res.json({status : 500, message : 'Internal Server Error'})
        }else{
            console.log("mail sent");
            res.json({status : 200, message : 'Message has been sent.'})
        }
    });
});

module.exports = router;
