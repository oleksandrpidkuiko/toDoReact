import { connect } from "react-redux";
import FormDialog from "../../components/Tasks/FormDialog";
import {addTaskSuccess} from "../actions";

const mapStateToProps = state => ({
  tasks: state.todo
});

const mapDispatchToProps = dispatch => ({
  editTask: (tasks) => dispatch(addTaskSuccess(tasks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormDialog);
