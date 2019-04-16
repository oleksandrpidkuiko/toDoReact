import { connect } from "react-redux";
import Tasks from "../../components/Tasks";
import fetchTasks from "../actionCreators/FetchTasks"

const mapStateToProps = state => ({
  tasks: state.todo,
  token: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchTasks: (token) => dispatch(fetchTasks(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
