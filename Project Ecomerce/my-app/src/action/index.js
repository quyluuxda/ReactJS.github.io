import * as types from './../contants/ActionTypes'

export const actAddToCart = (product, quantity)=>{
    return{
        type: types.ADD_TO_CART,
        product:product,
        quantity:quantity
    }
}