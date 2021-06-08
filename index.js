/* tutorial: https://www.youtube.com/watch?v=nF9g1825mwk */

// const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const router = express.Router();
const { getMaxListeners } = require('process');
const request = require('request');
require('dotenv').config();
const app = express();
let port = process.env.PORT || 3000;

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

app.get('/signup.html', function(req,res) {
    res.render(__dirname+'/views/signup.html');
});

app.get('/fail.html', function(req,res) {
    res.render(__dirname+'/views/fail.html');
});

app.get('/clubs.html', function(req,res) {
    res.render(__dirname+'/views/clubs.html');
});

app.use('/', router);

// contactus form

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
            user: 'bucsambassadors@gmail.com', // csa gmail (sender)
            pass: process.env.CSA_GMAIL_PASSWORD, // csa gmail password
            // make sure on gmail security to allow less secure app access
            // https://stackoverflow.com/questions/16512592/login-credentials-not-working-with-gmail-smtp
        },
        tls:{
            rejectUnauthorized: false // allows me to send email while hosting via localhost
        }
    });

    // send mail with defined transport object
    let mailInfo = {
        from: '"Nodemailer Contact" <bucsambassadors@gmail.com>', // sender address
        to: "bucsambassadors@gmail.com", // receiver
        subject: "Website Contact Request", // Subject line
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

// index mailing list form

app.post('/signup', (req, res) => {
    const { fname, lname, email } = req.body;

    // constructing req data
    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: fname,
                    LNAME: lname
                }
            }
        ]
    }
    // the above data needs to be turned into a string
    const postData = JSON.stringify(data);

    // var mailchimpKey = config.MAILCHIMP_API_KEY;
    // var mailchimpLID = config.MAILCHIMP_LIST_ID;
    const options = {
        // fill <dc> in with the data center found in the url of your mailchimp mailing list
        // follow this https://www.youtube.com/watch?v=Gjk25N7WFkI
        // data center explained at 19:25
        // {lists_id} is found in the settings of your mailing list at the bottom -> just follow the tutorial
        // also I think mailchimp calls lists 'audiences' now
        // url: 'https://<dc>.api.mailchimp.com/3.0/lists/{lists_id}'
        // url: 'https://us6.api.mailchimp.com/3.0/lists/d9b232d600',
        url: `https://us6.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}`,
        method: 'POST',
        headers: {
            // Authorization: 'auth MAILCHIMP_API_KEY'
            Authorization: `auth ${process.env.MAILCHIMP_API_KEY}`
        },
        body: postData

        // this could also help https://mailchimp.com/developer/marketing/guides/create-your-first-audience/
    }

    request(options, (err, response, body) => {
        if (err) {
            res.redirect('fail.html');
        } else {
            if(response.statusCode === 200) {
                res.redirect('signup.html');
            } else {
                res.redirect('fail.html');
            }
        }
    });
});

app.listen(port, () => {
    console.log(`App started on port http://localhost:${port}...`);
}); // currently hosting on localhost:3000