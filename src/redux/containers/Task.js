import { connect } from "react-redux";
import Task from "../../components/Tasks/Task";
import {addTaskSuccess} from "../actions"

const mapStateToProps = state => ({
  tasks: state.todo
});

const mapDispatchToProps = dispatch => ({
  updateTasks: (deletedTask, tasks) => dispatch(addTaskSuccess(tasks.filter(task => task._id !== deletedTask._id)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
