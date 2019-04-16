import {addUserSuccess} from "../actions";

const headers = {
      "key": "Content-Type",
      "name": "Content-Type",
      "value": "application/json",
      "type": "text"
    };

const createBody = (login, password) => JSON.stringify({
  "mode": "raw",
  "raw": {
    'name': login,
    'password': password
  }
});

const fetchLogin = (login, password) => dispatch => {
  const myInit = {
    method: "POST",
    headers,
    body: createBody(login, password)
  };

  fetch(`https://lectorium.herokuapp.com/api/login`, myInit)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("userToken", data.token);
      dispatch(addUserSuccess(data.token));
    })
    .catch(err => console.log(err));
};

export default fetchLogin