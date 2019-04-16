import {addTaskSuccess} from "../actions";

const fetchTasks = (token) => dispatch => {

  const myInit = {
    headers:  {
      "x-apikey" : token
    }
  };

  fetch(`https://lectorium.herokuapp.com/api/todolist`, myInit)
    .then(response => response.json())
    .then(data => dispatch(addTaskSuccess(data)))
    .catch(err => console.log(err));
};

export default fetchTasks