const deleteTasks = ({_id, userId}) => {

  const myInit = {
    method: "DELETE",
    headers:  {
      "Content-Type":"application/json",
      "x-apikey": userId,
    }
  };

  fetch(`https://lectorium.herokuapp.com/api/todolist/${_id}`, myInit)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

export default deleteTasks