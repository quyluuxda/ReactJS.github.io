import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
// let filterTasks = tasks.filter(task => {
//   return task.name.includes(strSearch)
// })
// console.log("============= filteredTasks", filterTasks)