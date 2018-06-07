const experss = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = experss();

app.use(cors());
app.use(bodyParser.json());

let db;

const mongoUser = 'infinity-tactics-user';
const mongoPw = 'hikdmHG6UPY3';

MongoClient.connect(`mongodb://${mongoUser}:${mongoPw}@ds111078.mlab.com:11078/infinity-tactics`, (err, database) => {
    if (err) return console.log(err);
    db = database.db('infinity-tactics');
    app.listen(3003, () => console.log('listening on 3003'))
});

app.get('/armydata/:id', (req, res) => {
    const { id } = req.params;
    db.collection(id).find().toArray((err, result) => {
        if (err) return console.log(err);
        res.send({[id]: result});
    });
});

app.post('/tactics', (req, res) => {
    db.collection('tactics').insert(req.body, (err, result) => {
        if (err) return console.log(err)
    })
});

app.get('/tactics', (req, res) => {
    db.collection('tactics').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.send({result});
    });
});
