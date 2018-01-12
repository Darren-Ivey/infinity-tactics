

const getOptions = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    },
};

export const getArmyData = () => {
    return fetch("http://localhost:3003/armyType", getOptions)
        .then(r => r.json())
        .catch(error => console.log({
            code: error
        }));
};