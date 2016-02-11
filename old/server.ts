/* File Name: server.ts
 * Author Name: Robert Reynolds
 * Website Name: http://200288068-assignment1.azurewebsites.net/
 * File Description: Server
 */

/// <reference path="_reference.ts" />

import express = require('express');
import path = require('path');

var app:express.Express = express();
var port:number = process.env.port || 3000;

//route for /main page
app.get('/', function(req:express.Request, res:express.Response, next:any) {
   res.sendFile(path.join(__dirname, "Public", "index.html"));
});

//route for /about page
app.get('/about', function(req:express.Request, res:express.Response) {
    res.sendFile(path.join(__dirname, "Public", "about.html"));
});

//route for /projects page
app.get('/projects', function(req:express.Request, res:express.Response) {
    res.sendFile(path.join(__dirname, "Public", "projects.html"));
});
//route for /services page
app.get('/services', function(req:express.Request, res:express.Response) {
    res.sendFile(path.join(__dirname, "Public", "services.html"));
});
//route for /contact page
app.get('/contact', function(req:express.Request, res:express.Response) {
    res.sendFile(path.join(__dirname, "Public", "contact.html"));
});
//route for /interests page
app.get('/interests', function(req:express.Request, res:express.Response) {
    res.sendFile(path.join(__dirname, "Public", "interests.html"));
});
//route for /programming page
app.get('/programming', function(req:express.Request, res:express.Response) {
    res.sendFile(path.join(__dirname, "Public", "programming.html"));
});
//route for /hobbies
app.get('/hobbies', function(req:express.Request, res:express.Response) {
    res.sendFile(path.join(__dirname, "Public", "hobbies.html"));
});
//route for /resume
app.get('/resume', function(req:express.Request, res:express.Response) {
    res.sendFile(path.join(__dirname, "Public", "resume.html"));
});

app.listen(port, function(){
    console.log("App Server Started.. On Port:" + port);
});