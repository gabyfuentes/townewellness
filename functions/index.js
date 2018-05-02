require('zone.js/dist/zone-node');
const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const { enableProdMode } = require('@angular/core');
const { renderModuleFactory } = require('@angular/platform-server');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./server/main.bundle');

enableProdMode();
const index = require('fs')
    .readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf8')
    .toString();
let app = express();    

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

app.get('**', function (req, res) {
    renderModuleFactory(AppServerModuleNgFactory, {
        url: req.path,
        document: index,
        extraProviders: [
            provideModuleMap(LAZY_MODULE_MAP)
          ]
    }).then(html => res.status(200).send(html));
});

exports.ssrapp = functions.https.onRequest(app);


// NODE MAILER=======================
const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendContactMessage = functions.firestore.document('contacts/{name}').onWrite(event => {
    const snapshot = event.data.data();
    const mailOptions = {
        from: 'Towne-Pharmacy',
        to: 'townepharm@gmail.com',
        cc: 'dhimanparikh@gmail.com',
        from: snapshot.name,
        subject: snapshot.title,
        html: `<div><h2>phone number:</h2></div>` + snapshot.phone +
            `<div><h2>Name: </h2></div>` + snapshot.name +
            `<div><h5>email: </h5></div>` + snapshot.email +
            `<div><p>message: </p></div>` + snapshot.message
    };
    return mailTransport.sendMail(mailOptions)
})