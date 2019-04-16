const user = (state = "", action) => {
  switch (action.type) {
    case "ADD_USER_SUCCESS": {
      return `${action.token}`
    }
    default: {
      return state;
    }
  }
};

export default user;
