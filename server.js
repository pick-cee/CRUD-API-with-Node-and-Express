const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./src/routes/employeeRoute');

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json())
app.use(bodyParser.json())
app.set('Content-Type', 'application/json')
app.use(bodyParser.urlencoded({ extended : true }));

app.use('/api/employee', employeeRoutes)

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`App listening on port:${port}`);
})