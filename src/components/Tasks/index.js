import React, { Component } from "react";
import Task from "../../redux/containers/Task"

class Tasks extends Component {
  componentDidMount() {
    document.title = "TODOs";
    if (this.props.token)
      this.props.fetchTasks(this.props.token);
  }

  componentDidUpdate(prevProps) {
    const {token, fetchTasks} = this.props;
    if(token && prevProps.token === "")
      fetchTasks(token);
  }

  render() {
    const {tasks} = this.props

    return tasks.map(task => (<Task key={task._id} task={task}/>))

  }
}

export default Tasks;
