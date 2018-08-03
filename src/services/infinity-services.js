import { catchError } from './utils';

const getOptions = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    }
};

const postOptions = (body, key, token) => (
    {
        method: 'post',
        body: JSON.stringify({ [key]: body }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
);

export const getArmyData = (armyType) => {
    return fetch(`http://localhost:3003/armydata/${armyType}`, getOptions)
        .then(res => catchError(res))
        .then(r => r.json())
};

export const fetchTactics = () => {
    return fetch('http://localhost:3003/tactics', getOptions)
        .then(res => catchError(res))
        .then(r => r.json())
};

export const postTactic = ({ tactic }, accessToken) => {
    return fetch(`http://localhost:3003/tactics`, postOptions(tactic, 'tactic', accessToken))
        .then(res => catchError(res))
        .then(r => r.json())
};