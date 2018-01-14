const experss = require('express');
const cors = require('cors');
const app = experss();

app.use(cors());

app.get("/armyData", (req, res) => {
    res.send(
        {
            arrmyType: [
                {id: 'panoceania', name:'Pan Oceania'},
                {id:'combinedarmy', name:'Combined Army'},
                {id: 'nomads', name: 'Nomads'}
            ],
            armyProfiles: [{
                panoceania: {
                    li: [
                        {id:'auxillia', name:'Auxillia'},
                        {id:'fusliers', name:'Fusliers'},
                        {id:'hexas', name:'Hexas'}
                    ],
                    md: [
                        {id:'nisse', name:'Nisse'},
                        {id:'bolts', name:'Bolts'}
                    ],
                    hi: [
                        {id:'aquilla-guard', name:'Aquilla Guard'},
                        {id:'orcs', name:'Orcs'}
                    ],
                    tag: [
                        {id:'cutters', name:'Cutter'}
                    ],
                    rem: [
                        {id:'clippers', name:'Clippers'}
                    ],
                    sk: [
                        {id:'crocmen', name:'Crocman'}
                        ]
                },
                combinedarmy: {
                    li: [
                        {id:'moratVanguard', name:'Morat Vanguard Infantry'},
                        {id:'seed-soldiers', name:'Seed Soldiers'}
                    ],
                    md: [
                        {id:'rodocks', name:'Rodocks'},
                        {id:'yoagats', name:'Yoagats'}
                    ],
                    hi: [
                        {id:'chrontids', name:'Chrontids'},
                        {id:'suryats', name:'Suryats'}
                    ],
                    tag: [
                        {id:'avatars', name:'Avatars'},
                        {id:'sphinxs', name:'Sphinxs'}
                    ],
                    rem: [
                        {id:'ikadrons', name:'Ikadrons'},
                        {id:'q-drones', name:'Q Drone'}
                    ],
                    sk: [
                        {id:'shrouded',name:'shrouded'},
                        {id:'malignos',name:'Malignos'}
                    ]
                },
                nomads: {
                    li: [
                        {id:'clockmakers', name:'Clockmakers'},
                        {id:'daktaris', name:'Daktaris'}
                    ],
                    md: [
                        {id:'wildcats', name:'Wildcats'},
                        {id:'hellcats', name:'Hellcats'}
                    ],
                    hi: [
                        {id:'taskmasters', name:'taskmasters'},
                        {id:'mobile-brigadas', name:'Mobile Brigadas'}
                    ],
                    tag: [
                        {id:'lizard-squadron', name:'Lizard Squadron'},
                        {id:'iguana-squadron', name:'Iguana Squadron'}
                    ],
                    rem: [
                        {id:'meteor-zonds', name:'Meteor Zonds'},
                        {id:'reaktion-zonds', name:'Reaktion Zonds'}
                    ],
                    sk: [
                        {id:'shrouded', name:'Shrouded'},
                        {id:'malignos', name:'Malignos'}
                    ]
                }
            }]
        }
    );
});

const PORT = process.env.PORT || 3003;
app.listen(PORT);