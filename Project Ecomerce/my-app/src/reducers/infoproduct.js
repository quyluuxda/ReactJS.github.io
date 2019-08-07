import * as types from './../contants/ActionTypes'
let data = JSON.parse(localStorage.getItem('CART'))
let initialState = data ? data : [{product:{
            id: 'DN1',
            name: 'Dây Nhện',
            image: './../../img/bg-img/47.png',
            description: 'Dây Nhện',
            price: '150.000',
        }
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
    let { product } = action
    switch (action.type) {
        case types.GET_INFO_PRODUCT:
            state.push({product})
            state.splice(0,1)
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];
        default: return [...state]
    }

}

export default infoproduct;
