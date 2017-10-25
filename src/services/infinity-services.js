
const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

const getInit = {
    method: 'GET',
    mode: 'cors'
};

export const getArmyData = () => {
    fetch("http://localhost:3003/armyListOptions", getInit)
        .then(handleErrors)
        .then(response => {
            response.json()
                .then( data => {
                    return {
                        data: data['armyListOptions'],
                        status: response.status
                    };
                })
        })
        .then(dataObj => { return dataObj })
        .catch(error => console.log({
            code: error
        }));
};