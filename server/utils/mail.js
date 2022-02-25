const nodemailer = require('nodemailer');

const sendRequestMail = (email, body, cb) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'vishvesh.trivedi.official@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        }
    });
    
    let mailOptions = {
        from: 'vishvesh.trivedi.official@gmail.com',
        to: email,
        subject : 'Request for Quotation',
        text: body
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            cb(err, null);
        }else{
            cb(null, info);
        }
    });
}

module.exports = sendRequestMail;