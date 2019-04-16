const headers = {
  "key": "Content-Type",
  "name": "Content-Type",
  "value": "application/json",
  "type": "text"
};

const createBody = (name, surname, email, phone, password) => ({
      "name": name,
      "surname": surname,
      "email": email,
      "phone": +phone,
      "password": password
    }
  );

const createUser = (name, surname, email, phone, password) => dispatch => {
  const myInit = {
    method: "POST",
    headers,
    body: JSON.stringify(createBody(name, surname, email, phone, password))
  };

  console.log(myInit, myInit.body);
  fetch(`https://lectorium.herokuapp.com/api/registration`, myInit)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log("err=>", err));

};

export default createUser