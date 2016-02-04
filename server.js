/* File Name: server.ts
 * Author Name: Robert Reynolds
 * Website Name: http://200288068-assignment1.azurewebsites.net/
 * File Description: Server
 */
/// <reference path="_reference.ts" />
var express = require('express');
var app = express();
var port = process.env.port || 3000;
app.get('/', function (req, res) {
    res.send('Hello Express');
});
app.listen(port, function () {
    console.log("App Server Started.. On Port:" + port);
});
//# sourceMappingURL=server.js.map