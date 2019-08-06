import * as types from './../contants/ActionTypes'
let data = JSON.parse(localStorage.getItem('CART'))
let initialState = data ? data : [];
// let initialState = [
//     {
//         product: {
//             id: 'TL1',
//             name: 'Tuylip',
//             image: './../../img/bg-img/41.png',
//             description: 'Tuylip',
//             price: '375.000',
//         },
//         quantity: 1
//     },
//     {
//         product: {
//             id: 'SĐ1',
//             name: 'Sen Đá',
//             image: './../../img/bg-img/42.png',
//             description: 'Sen Đá',
//             price: '150.000',
//         },
//         quantity: 2
//     }
// ];

const cart = (state = initialState, action) => {
    let { product, quantity } = action
    let index = -1
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += 1
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1)
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];
        default: return [...state]
    }

}
let findProductInCart = (cart, product) => {
    let index = -1
    let n = cart.length
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index
}

export default cart;