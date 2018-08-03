import { catchError, getToken } from './utils';

const getOptions = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${getToken()}`,
    }
};

export const getArmyData = (armyType) => {
    return fetch(`http://localhost:3003/armydata/${armyType}`, getOptions)
        .then(res => catchError(res))
        .then(r => r.json())
};

export const postTactic = ({ tactic }) => {

    const postOptions = {
        method: 'post',
        body: JSON.stringify({ tactic }),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(`http://localhost:3003/tactics`, postOptions)
        .then(res => catchError(res))
        .then(r => r.json())
};

export const fetchTactics = () => {
    return fetch('http://localhost:3003/tactics', getOptions)
        .then(res => catchError(res))
        .then(r => r.json())
};