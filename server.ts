/* File Name: server.ts
 * Author Name: Robert Reynolds
 * Website Name: http://200288068-assignment1.azurewebsites.net/
 * File Description: Server
 */

/// <reference path="_reference.ts" />

import express = require('express');

var app:express.Express = express();
var port:number = process.env.port || 3000;

//route for /main page
app.get('/', function(req:express.Request, res:express.Response, next:any) {
   res.send('Hello Express!'); 
});

//route for /about page
app.get('/about', function(req:express.Request, res:express.Response) {
    res.send('About Page');
});

//route for /projects page
//route for /services page
//route for /contact page
//route for /interests page
//route for /programming page
//route for /hobbies
//route for /resume

app.listen(port, function(){
    console.log("App Server Started.. On Port:" + port);
});