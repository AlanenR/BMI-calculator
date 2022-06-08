const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/bmicalculator', function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
    var num1 = parseFloat(req.body.weight);
    var num2 = parseFloat(req.body.height);
    num2 = num2 / 100;

    var result = num1 / (num2 * num2);

    res.send("Your BMI is " + result);
});

app.listen(3000, function () {
    console.log("Server started at 3000");
});