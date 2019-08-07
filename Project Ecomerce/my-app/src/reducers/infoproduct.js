import * as types from './../contants/ActionTypes'
let data = JSON.parse(localStorage.getItem('CART'))
let initialState = data ? data : [{
    product: {
        id: 'DN1',
        name: 'Dây Nhện',
        image: './../../img/bg-img/47.png',
        description: 'Dây Nhện',
        price: '150.000',
    }, quantity: 5
}];
// let initialState = [
//     {product:{
//         id: 'DN1',
//         name: 'Dây Nhện',
//         image: './../../img/bg-img/47.png',
//         description: 'Dây Nhện',
//         price: '150.000',
//     }
//     }
// ];

const infoproduct = (state = initialState, action) => {
    let index = -1
    let { product, quantity } = action
    switch (action.type) {
        case types.GET_INFO_PRODUCT:
            state.push({ product, quantity })
            state.splice(0, 1)
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


export default infoproduct;
