const updateTasks = ({_id, userId, title, description, status, selected, image}) => {

  const myInit = {
    method: "PUT",
    headers:  {
      "Content-Type":"application/json",
      "x-apikey": userId,
    },

    body: JSON.stringify({
      userId,
      title,
      description,
      status,
      selected,
      image
    })
  };

  fetch(`https://lectorium.herokuapp.com/api/todolist/${_id}`, myInit)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

export default updateTasks