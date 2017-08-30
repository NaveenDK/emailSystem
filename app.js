var express =require('express');
var path=require('path');
var bodyParser=require('body-parser');
var nodemailer= require('nodemailer');

var app=express();//instantiating the express object

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false  }));
//one route going to the home page just sending some text ,,but we want to load some jade views
app.use(express.static (path.join(__dirname,'public')));
//
app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');


app.get('/',function(req,res){
//    res.send ('<h1>Hello World</h1>');
      res.render('index');

});
app.get('/reachus',function(req,res){
//    res.send ('<h1>Hello World</h1>');
      res.render('reachus');

});
app.get('/qa',function(req,res){
//    res.send ('<h1>Hello World</h1>');
      res.render('qa');

});
app.post('/reachus/send',function(req,res){

var  smtpTransport=nodemailer.createTransport({
   host: 'smtp.gmail.com',
    port: '587',
    auth: {
        user: "naveenkolambage@gmail.com",
        pass: "Dinushka123"
    },
    secureConnection: 'false',
    tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false 
    }
});

var  mailOptions={
    from:'Naveen DK <naveenkolambage@gmail.com>',
    to:'naveenkolambage@gmail.com',
    subject:'Email Sent from your website',
    text:'You have a submission with the following details.. Name: '+req.body.name +'Email: '+req.body.email+' Message: '+ req.body.message,
    html:   '<p>You have a submission with the following details..</p><ul><li> Name :'+req.body.name + ' </li><li>Email: '+req.body.email +'</li><li>Message ' + req.body.message +'</li></ul>'
};

smtpTransport.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
        res.redirect('/');
    } else{
        console.log('Message Sent ' + info.response);
        res.redirect('/');
    }
  });
});

app.listen(3000);
console.log('Server is running on port 3000');
////////once you have all of the above you will have HELLO WORLD ON THE listen port
//What do you know about this 

