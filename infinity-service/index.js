const experss = require('express');
const cors = require('cors');
const app = experss();

app.use(cors());

app.get("/armyType", (req, res) => {
    res.send(
        [
            { 'panoceania' : 'Pan Oceania' },
            { 'yujing' : 'Yujing'},
            { 'ariadna' :'Ariadna'},
            { 'haqqislam' :'Haqqislam'},
            { 'nomads' : 'Nomads'},
            { 'combinedarmy' : 'Combined Army'},
            { 'aleph' : 'Aleph'},
            { 'tohaa' : 'Tohaa'}
        ]
    );
});

const PORT = process.env.PORT || 3003;
app.listen(PORT);