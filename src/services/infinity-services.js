

const getOptions = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    },
};

export const getArmyData = (armyType) => {
    return fetch(`http://localhost:3003/armydata/${armyType}`, getOptions)
        .then(r => r.json())
        .catch(error => console.log({
            code: error
        }))
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
        .then(r => r.json())
        .catch(error => console.log({
            code: error
        }))
};