const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//root route
//__dirname -> it gives the full path of the current directory
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var sum = num1 + num2;
  let diff = num1 - num2;
  let prod = num1 * num2;
  let quo = num1 / num2;
  let rem = num1 % num2;

  res.send(`
    <h1>
        The sum of ${num1} and ${num2} is: ${sum} <br>
        The difference of ${num1} and ${num2} is: ${diff} <br>
        The product of ${num1} and ${num2} is: ${prod} <br>
        The quotient of ${num1} and ${num2} is: ${quo} <br>
        The remainder of ${num1} and ${num2} is: ${rem}
    </h1>
  `);
});

app.listen(3000, function () {
  console.log('server started at port 3000');
});
