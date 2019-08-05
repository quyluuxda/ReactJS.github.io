import * as types from './../contants/ActionTypes'
// let data = JSON.parse(localStorage.getItem('CART'))
// let initialState = data ? data : [];
let initialState = [
    {
        product: {
            id: 'TL1',
            name: 'Tuylip',
            image: './../../img/bg-img/41.png',
            description: 'Tuylip',
            price: '375.000',
        },
        quantity: 1
    },
    {
        product:{
            id: 'SĐ1',
            name: 'Sen Đá',
            image: './../../img/bg-img/42.png',
            description: 'Sen Đá',
            price: '150.000',
        },
        quantity: 2
    }
];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console(action)
        default: return [...state]
    }
}

export default cart;