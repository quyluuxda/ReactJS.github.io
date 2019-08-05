
// import * as types from '../constants/Actiontypes'
let initialState = [
    {
        id: 1,
        name: 'Iphone 7',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung',
        image: 'https://images.samsung.com/is/image/samsung/vn-galaxy-j7-2017-sm-j730gzsgxxv-frontblue-thumb-70348779',
        description: 'Samsung sản xuất',
        price: 450,
        inventory: 7,
        rating: 4
    },
    {
        id: 3,
        name: 'Bphone',
        image: 'https://didongviet.vn/pub/media/catalog/product//b/p/bphone-3-mau-trang-didongviet_3.jpg',
        description: 'Bphone sản xuất',
        price: 550,
        inventory: 12,
        rating: 5
    }
];

const products = (state = initialState, action)=>{
    switch(action.type){
        default: return [...state]
    }
}

export default products;