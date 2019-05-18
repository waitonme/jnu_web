const mysql = require('mysql');
const express = require('express');
const app = express();
const path = require('path');


var connection = mysql.createConnection({
    host: 'jnu-azure.mysql.database.azure.com',
    user: 'azure_root@jnu-azure',
    password: '!!desolate1',
    database: 'study',
    timezone: 'kst'
})

const PORT = process.env.PORT || 2000;


app.use(express.static(path.resolve(__dirname, '..', 'build')));
// app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get('/api/id', (req, res) => {
    const id = req.body.id || req.query.id;
    const password = req.body.password || req.query.password;

    if (!id || !password) return;
    connection.query(`SELECT user_password FROM users WHERE user_id = '${id}'`, function (error, results, fields) {
        if (error) throw error;

        if (results[0] === undefined) { res.send('no result'); return };
        const { user_password } = results[0];

        if (user_password === password)
            res.send('OK');
        else {
            res.send('Nope');
        }

    });
})
app.get('/api/post', (req, res) => {
    connection.query(`SELECT * FROM movies`, function (error, results, fields) {
        if (error) throw error;

        res.send(results);
    });
})

app.get('/api/rent', (req, res) => {
    connection.query(`SELECT * FROM rent ORDER BY movie_title`, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
})

app.get('/api/bookId', (req, res) => {
    const id = req.body.id || req.query.id;

    if (!id) return;
    connection.query(`SELECT movie_title,theater_name,movie_date FROM book WHERE user_id = '${id}'`, function (error, results, fields) {
        if (error) throw error;

        if (results[0] === undefined) { res.send('no result'); return };
        if (results)
            res.send(results);
        else {
            res.send('Nope');
        }

    });
})

app.post('/api/id', (req, res) => {
    const { id } = req.body.params;
    const { password } = req.body.params;

    if (!(id && password)) { res.send('nope'); return }
    connection.query(`SELECT user_id FROM users WHERE user_id = '${id}'`, (err, results, fields) => {
        if (err) {
            console.log(err);
            res.send('error');
            return;
        }
        if (results[0] !== undefined) { res.send('exist'); return };

        connection.query(`INSERT INTO users VALUES ('${id}', '${password}')`, function (error, results, fields) {
            if (error) {
                console.log(error);
                res.send('Nope');
            }
            else {
                res.send('OK');
            }


        });
    });
})

app.post('/api/bookId', (req, res) => {
    const { id } = req.body.params;
    console.log(id);

    if (!id) return;
    connection.query(`SELECT movie_title,theater_name,movie_date FROM book WHERE user_id = '${id}'`, function (error, results, fields) {
        if (error) throw error;
        if (results[0] === undefined) { res.send('no result'); return };
        if (results)
            res.send(results);
        else {
            res.send('Nope');
        }

    });
})

app.post('/api/deleteB', (req, res) => {
    const { movie_title, theater_name, movie_date, user_id } = req.body.params;

    console.log(`DELETE FROM book 
        WHERE movie_title = '${movie_title.trim()}'
        and theater_name = '${theater_name.trim()}'
        and movie_date = '${movie_date.trim()}'
        and user_id = '${user_id.trim()}`)

    if (!movie_title && !theater_name && !movie_date) return;
    connection.query(`DELETE FROM book 
        WHERE movie_title = '${movie_title.trim()}'
        and theater_name = '${theater_name.trim()}'
        and movie_date = '${movie_date.trim()}'
        and user_id = '${user_id.trim()}'`
        , function (error, results, fields) {
            if (error) throw error;
            if (results[0] === undefined) { res.send('no result'); return };
            if (results)
                res.send(results);
            else {
                res.send('Nope');
            }

        })

});
// Insert into book values ('test01', 'My Neighbor Totoro','MegaBox','2019-05-10')
// Insert into book values ('test01', 'Avengers: Endgame','CGV','2019-05-10')
app.post('/api/addB', (req, res) => {
    const { movie_title, theater_name, movie_date, user_id } = req.body.params;

    console.log(`INSERT INTO book 
        VALUES ( 
            '${user_id.trim()}', 
            '${movie_title.trim()}', 
            '${theater_name.trim()}',
            '${movie_date.trim()}'
            )`
    )

    if (!movie_title && !theater_name && !movie_date) return;
    connection.query(`SELECT user_id FROM book 
        WHERE movie_title = '${movie_title.trim()}'
            and theater_name = '${theater_name.trim()}'
            and movie_date = '${movie_date.trim()}'
            and user_id = '${user_id.trim()}'`, (err, results, fields) => {
            if (err) {
                console.log(err);
                res.send('error');
                return;
            }
            if (results[0] !== undefined) { res.send('exist'); return };

            connection.query(`INSERT INTO book 
    VALUES ( 
        '${user_id.trim()}', 
        '${movie_title.trim()}', 
        '${theater_name.trim()}',
        '${movie_date.trim()}'
        )`
                , function (error, results, fields) {
                    if (error) throw error;
                    if (results[0] === undefined) { res.send('no result'); return };
                    if (results)
                        res.send(results);
                    else {
                        res.send('Nope');
                    }

                })
        })

});


app.listen(PORT, () => {
    console.log('Express listening on port', PORT);
});