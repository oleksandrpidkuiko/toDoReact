const todo = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK_SUCCESS": {
      return [...action.data]
    }

    default: {
      return state;
    }
  }
};

export default todo;
