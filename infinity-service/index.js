const experss = require('express');
const cors = require('cors');
const app = experss();
const MongoClient = require('mongodb').MongoClient;

app.use(cors());

let db;


MongoClient.connect(`mongodb://${mongoUser}:${mongoPw}@ds111078.mlab.com:11078/infinity-tactics`, (err, database) => {
    if (err) return console.log(err);
    db = database.db('infinity-tactics');
    app.listen(3003, () => console.log('listening on 3003'))
});

app.get('/armydata/panoceania', (req, res) => {
    db.collection('panoceania').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.send({pano: result});
        console.log("result: ", result)
    });
});