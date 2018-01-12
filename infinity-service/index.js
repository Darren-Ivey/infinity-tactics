const experss = require('express');
const cors = require('cors');
const app = experss();

app.use(cors());

app.get("/armyData", (req, res) => {
    res.send(
        {
            arrmyType: [
                {'panoceania': 'Pan Oceania'},
                {'combinedarmy': 'Combined Army'}
            ],
            armyProfiles: [{
                panoceania: {
                    li: ['Auxillia', 'Fusliers', 'Hexas'],
                    md: ['Bolts', 'Nisse'],
                    hi: ['Orc', 'Aquilla Guard'],
                    tag: ['Cutter'],
                    rem: ['Clipper'],
                    sk: ['Crocman']
                },
                combinedarmy: {
                    li: ['Vanguard', 'Seed Solider'],
                    md: ['Rodocks', 'Yoagat'],
                    hi: ['Chrontid', 'Suryat'],
                    tag: ['Avatar','Sphinx'],
                    rem: ['Q Drone','Ikadrone'],
                    sk: ['Shrouded','Malignos']
                },
            }]
        }
    );
});

const PORT = process.env.PORT || 3003;
app.listen(PORT);