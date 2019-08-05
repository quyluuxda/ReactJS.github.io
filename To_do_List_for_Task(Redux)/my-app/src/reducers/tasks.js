import * as types from './../constants/Actiontypes'
const uuidv4 = require('uuid/v4');
let data = JSON.parse(localStorage.getItem('tasks'));
let initialState = data ? data : [];
let findIndex = (tasks,id) => {
        let result = -1
        tasks.forEach((task, index) => {
          if (task.id === id) {
            result = index
          }
        })
        return result
      }
let myReducer = (state = initialState, action) => {
        let id = action.id
        let index = findIndex(state,id)
        switch (action.type) {
                case types.LIST_ALL:
                        return state;
                case types.SAVE_TASK:
                        let task = {
                                id: action.task.id,
                                name: action.task.name,
                                status: action.task.status 
                        };
                        if(!task.id){
                                task.id = uuidv4();
                                state.push(task)

                        }else{
                                let indexEditTask = findIndex(state,task.id)
                                state[indexEditTask] = task
                        }
                        // let newTask = {
                        //         id: uuidv4(),
                        //         name: action.task.name,
                        //         status: action.task.status
                        // }
                        // state.push(newTask);
                        localStorage.setItem('tasks', JSON.stringify(state))
                        return [...state];
                case types.UPDATE_STATUS:
                        // console.log(action)
                        // let id = action.id
                        // let index = findIndex(state,id)
                        if (index !== -1) {
                                // state[index].status = !state[index].status
                        let cloneTask = {...state[index]};
                        cloneTask.status = !cloneTask.status
                        state[index] = cloneTask
                        }
                        localStorage.setItem('tasks', JSON.stringify(state))
                        return [...state];
                case types.DELETE_TASK:
                        // // let id = action.id
                        // let index = findIndex(state,id)
                        if (index !== -1) {
                        state.splice(index, 1)
                        }
                        localStorage.setItem('tasks', JSON.stringify(state))
                        return [...state];
                default: return state;
        }
        //     return state;
}
export default myReducer