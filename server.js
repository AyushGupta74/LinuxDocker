var express = require('express');
var app = express();
app.use(express.static('public'));
app.get("/", (req, res) => 
{
    res.send ("Welcome to this page!!"); 
});
app.get("/product", (req, res) => 
{
    var p ={ "Title" : "Backpack", "Color" : "Blue", "Price": 800, "Company": "Safari"}
    res.send(p);
});
app.listen(9000);
console.log("Listening on port 9000");