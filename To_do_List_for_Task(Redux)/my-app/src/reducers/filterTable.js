import * as types from '../constants/Actiontypes'
var initialState = {
    name: '',
    status: -1
};
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            action.filter.status = parseInt(action.filter.status,10)
            // console.log(action)
            return action.filter;
        default:
            return state;
    }
}
export default myReducer