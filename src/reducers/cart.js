export default(state = [], payload) => {
    switch (payload.type) {
        case 'add':
            return [...state, payload.item];
        case 'remove':
            let index = state.findIndex((x) => x === payload.item);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        default:
            return state;
    }
};