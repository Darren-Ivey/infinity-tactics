
export const getArmyListOptions = () => {
    fetch('http://localhost:3003/armyListOptions').then(response =>
        response.json().then(data => ({
                data: data,
                status: response.status
            })
        ).then(res => {
            console.log(res.status, res.data)
        }))
}


