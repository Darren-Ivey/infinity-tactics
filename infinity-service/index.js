const experss = require('express');
const cors = require('cors');
const app = experss();

app.use(cors());

app.get("/armyData", (req, res) => {
    res.send(
        {
            arrmyType: [
                {'panoceania':'Pan Oceania'},
                {'combinedarmy':'Combined Army'},
                { 'nomads':'Nomads'}
            ],
            armyProfiles: [{
                panoceania: {
                    li: [
                        {'auxillia':'Auxillia'},
                        {'fusliers':'Fusliers'},
                        {'hexas':'Hexas'}
                    ],
                    md: ['Bolts', 'Nisse'],
                    hi: ['Orcs', 'Aquilla Guard'],
                    tag: ['Cutters'],
                    rem: ['Clippers'],
                    sk: ['Crocmen']
                },
                combinedarmy: {
                    li: [
                        {'morat-vanguard':'Morat Vanguard Infantry'},
                        {'seed-soldiers':'Seed Soldiers'}
                    ],
                    md: ['Rodocks', 'Yoagats'],
                    hi: ['Chrontids', 'Suryats'],
                    tag: ['Avatars','Sphinxs'],
                    rem: ['Q Drones','Ikadrons'],
                    sk: ['Shrouded','Malignos']
                },
                nomads: {
                    li: [
                        {'clockmakers': 'Clockmakers'},
                        {'daktaris': 'Daktaris'}
                    ],
                    md: ['Hellcats', 'Wildcats'],
                    hi: ['Taskmasters', 'Mobile Brigadas'],
                    tag: ['Lizard Squadron','Iguana Squadron'],
                    rem: ['Meteor Zonds','Reaktion Zonds'],
                    sk: ['Shrouded','Malignos']
                }
            }]
        }
    );
});

const PORT = process.env.PORT || 3003;
app.listen(PORT);