var express = require('express');
var nodemailer = require('nodemailer');
var app = express();

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "sunilssaharan@gmail.com",
        pass: "pqwGBCFM"
    }
});

app.get('/',function(req,res){
res.sendfile('index.html');
});

app.get('/send',function(req,res){

var mailOptions={
   to : req.query.to,
   subject : req.query.subject,
   text : req.query.text
}
console.log(mailOptions);
smtpTransport.sendMail(mailOptions, function(error, response){
if(error){
console.log(error);
res.end("error");
}else{
console.log("Message sent: " + response.message);
res.end("sent");
}
});

});

app.listen(4000,function(){
console.log("localhost:4000");
});
