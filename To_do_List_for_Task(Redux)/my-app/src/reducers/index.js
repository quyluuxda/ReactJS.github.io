import {combineReducers} from 'redux';
import tasks from './tasks'
import isShowFormTask from './isShowFormTask'
import itemEditing from './itemEditing'
import filterTable from './filterTable'
import search from './search'
import sort from './sort'
const myReducer = combineReducers({
    tasks:tasks,
    isShowFormTask:isShowFormTask,
    itemEditing:itemEditing,
    filterTable:filterTable,
    search:search,
    sort:sort  
});
export default myReducer;