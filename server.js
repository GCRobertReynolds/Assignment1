/* File Name: server.ts
 * Author Name: Robert Reynolds
 * Website Name: http://200288068-assignment1.azurewebsites.net/
 * File Description: Server
 */
/// <reference path="_reference.ts" />
var express = require('express');
var app = express();
var port = process.env.port || 3000;
//main route
app.get('/', function (req, res, next) {
    res.send('Hello Express!');
});
//route for /info page
app.get('/info', function (req, res) {
    res.send('Your Custom Info Page goes here');
});
app.listen(port, function () {
    console.log("App Server Started.. On Port:" + port);
});
//# sourceMappingURL=server.js.map