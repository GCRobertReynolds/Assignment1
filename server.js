/* File Name: server.ts
 * Author Name: Robert Reynolds
 * Website Name: http://200288068-assignment1.azurewebsites.net/
 * File Description: Server
 */
/// <reference path="_reference.ts" />
var express = require('express');
var app = express();
var port = process.env.port || 3000;
//route for /main page
app.get('/', function (req, res, next) {
    res.send('Hello Express!');
});
//route for /about page
app.get('/about', function (req, res) {
    res.send('About Page');
});
//route for /projects page
app.get('/projects', function (req, res) {
    res.send('Projects Page');
});
//route for /services page
app.get('/services', function (req, res) {
    res.send('Services Page');
});
//route for /contact page
app.get('/contact', function (req, res) {
    res.send('Contact Page');
});
//route for /interests page
app.get('/interests', function (req, res) {
    res.send('Interests Page');
});
//route for /programming page
app.get('/programming', function (req, res) {
    res.send('Programming Projects Page');
});
//route for /hobbies
app.get('/hobbies', function (req, res) {
    res.send('Hobby Projects Page');
});
//route for /resume
app.get('/resume', function (req, res) {
    res.send('Resume Page');
});
app.listen(port, function () {
    console.log("App Server Started.. On Port:" + port);
});
//# sourceMappingURL=server.js.map