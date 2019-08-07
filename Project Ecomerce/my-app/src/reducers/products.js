let initialState = [
    {
        id: 'XR1',
        name: 'Xương Rồng',
        image: './../../img/bg-img/40.png',
        description: 'Xương Rồng',
        price: '250.000',
    },
    {
        id: 'TL1',
        name: 'Tuylip',
        image: './../../img/bg-img/41.png',
        description: 'Tuylip',
        price: '375.000',
    },
    {
        id: 'SĐ1',
        name: 'Sen Đá',
        image: './../../img/bg-img/42.png',
        description: 'Sen Đá',
        price: '150.000',
    },
    {
        id: 'S1',
        name: 'Si',
        image: './../../img/bg-img/43.png',
        description: 'Si',
        price: '525.000',
    },
    {
        id: 'N1',
        name: 'Ngâu',
        image: './../../img/bg-img/44.png',
        description: 'Ngâu',
        price: '100.000',
    },
    {
        id: 'T1',
        name: 'Tùng',
        image: './../../img/bg-img/45.png',
        description: 'Xương Rồng',
        price: '250.000',
    },
    {
        id: 'DC1',
        name: 'Dừa Cạn',
        image: './../../img/bg-img/46.png',
        description: 'Dừa Cạn',
        price: '75.000',
    },
    {
        id: 'DN1',
        name: 'Dây Nhện',
        image: './../../img/bg-img/47.png',
        description: 'Dây Nhện',
        price: '150.000',
    },
    {
        id: 'TL2',
        name: 'Tuylip',
        image: './../../img/bg-img/48.png',
        description: 'Tuylip',
        price: '360.000',
    },
];

const products = (state = initialState, action)=>{
    switch(action.type){
        default: return [...state]
    }
}

export default products;
