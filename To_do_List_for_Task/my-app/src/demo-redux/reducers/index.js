import sort from './sort'; //reducer status
import status from './status'; //reducer sort
import {combineReducers} from 'redux';
const myReducer = combineReducers({
    status:status,
    sort:sort
})
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

// export default myReducer;
export default myReducer;