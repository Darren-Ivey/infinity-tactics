const experss = require('express');
const cors = require('cors');
const app = experss();

app.use(cors());

app.get("/armyListOptions", (req, res) => {
    res.send({
        armyListOptions: [
            'Pan Oceania',
            'YuJing',
            'Ariadna',
            'Haqqislam',
            'Nomads',
            'Combined Army',
            'Aleph',
            'Tohaa'
        ],
    });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT);