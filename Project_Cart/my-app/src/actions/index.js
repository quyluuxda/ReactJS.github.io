import * as types from './../contants/ActionTypes'
export const actAddToCart = (product, quantity) =>{
    return{
        type: types.ADD_TO_CART,
        product:product,
        quantity:quantity
    }
}

export const actChangeMessage = (message) =>{
    return{
        type: types.CHANGE_MESSAGE,
        message:message
    }
}

export const actDeleteProductInCart = (product) =>{
    return{
        type: types.DELETE_PRODUCT_IN_CART,
        product:product
    }
}
export const actUpdateQuantity = (product, quantity) =>{
    return{
        type: types.UPDATE_PRODUCT_IN_CART,
        product:product,
        quantity:quantity
    }
}