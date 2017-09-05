export const selectArmy = (item) => {
    console.log('selectArmy:', item);
    return {
        type: 'SELECT_ARMY',
        item
    };
}