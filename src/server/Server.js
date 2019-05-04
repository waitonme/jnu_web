const mysql = require('mysql');
const express = require('express');
const app = express();

const router = express.Router();
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1',
    database: 'study',
})

router.get('/', (req, res) => {

})


if (process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(3001, () => {
        console.log('webpack-dev-server is listening on port', 3001);
    });
}
app.use('/', express.static(__dirname + '/../../public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.get('/id', (req, res) => {

    connection.connect();
    connection.query(`SELECT * FROM users`, function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send(results);
    });
    connection.end();


})

app.listen(2000, () => {
    console.log('Express listening on port', 2000);
});