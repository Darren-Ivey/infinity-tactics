export const addToCart = (item) => {
    console.log('adding item:', item);
    return {
        type: 'add',
        item
    };
}

export const removeFromCart = (item) => {
    console.log('remove item:', item);
    return {
        type: 'remove',
        item
    };
}