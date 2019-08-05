import{createStore} from 'redux';
import {status,sort} from './actions'
import myReducer from './reducers/index'

// var initialState = {
//     status:false,
//     sort:{
//         by:'name',
//         value:1
//     }
// }
// var myReducer = (state = initialState, action)=>{
//     if(action.type === "TOGGLE_STATUS"){
//         state.status = !state.status
//     }if(action.type==="SORT"){
//         var {by, value}= action.sort;
//         var {status}= state
//         // state.sort={
//         //     by:action.sort.by,
//         //     value:action.sort.value
//         // }
//         return{
//             status:status,
//             sort:{
//                 by: by,
//                 value: value
//             }
//         }
//     }
//     return state;
// }


const store = createStore(myReducer);
console.log('Defaul: ', store.getState())
// thay doi status
// var action={type:"TOGGLE_STATUS"};
// store.dispatch(action);
store.dispatch(status());

console.log("TOGGLE_STATUS", store.getState())

// sap xep Cv A=>Z
// var sortAction={
//     type: 'SORT',
//     sort: {
//         by:'name',
//         value:-1
//     }
// }
// store.dispatch(sortAction);
store.dispatch(sort({
    by:'name',
    value:-1
}));
console.log("SORT", store.getState())