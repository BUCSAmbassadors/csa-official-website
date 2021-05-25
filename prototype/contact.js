/* tutorial: https://www.youtube.com/watch?v=nF9g1825mwk */

const express = require('express');
const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const router = express.Router();
const { getMaxListeners } = require('process');

const app = express();

// View engine setup

// https://stackoverflow.com/questions/4529586/render-basic-html-view
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Body parser middleware
// https://github.com/expressjs/body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.render(path.join(__dirname, '/views/index.html'));
});

app.get('/index.html', (req, res) => {
    res.render(path.join(__dirname, '/views/index.html'));
});

app.get('/about.html', function(req,res) {
    res.render(__dirname+'/views/about.html');
});

app.get('/ambassadors.html', function(req,res) {
    res.render(__dirname+'/views/ambassadors.html');
});

app.get('/mentor.html', function(req,res) {
    res.render(__dirname+'/views/mentor.html');
});

app.get('/resources.html', function(req,res) {
    res.render(__dirname+'/views/resources.html');
});

app.get('/contactus.html', function(req,res) {
    res.render(__dirname+'/views/contactus.html');
});

app.get('/sent.html', function(req,res) {
    res.render(__dirname+'/views/sent.html');
});

app.use('/', router);

app.post('/send', (req, res) => {
    const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587, // 465 is ssl, 587 is tls
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'testrunnin@gmail.com', // my test gmail (sender)
            pass: 'runninginthe90s', // my test gmail password temporary (sender)
            // make sure on gmail security to allow less secure app access
            // https://stackoverflow.com/questions/16512592/login-credentials-not-working-with-gmail-smtp
        },
        tls:{
            rejectUnauthorized: false // allows me to send email while hosting via localhost
        }
    });

    // send mail with defined transport object
    let mailInfo = {
        from: '"Nodemailer Contact" <testrunnin@gmail.com>', // sender address
        to: "andyvo@bu.edu", // receiver -- set this to bucsa's email lol
        subject: "Node Contact Request", // Subject line
        text: "Hello world", // plain text body -- useless lol
        html: output // html body -- from above
    };

    transporter.sendMail(mailInfo, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        res.render('sent.html'); // where /send goes to
    });
});

app.listen(3000, () => console.log('Server started...')); // currently hosting on localhost:3000