import { connect } from "react-redux";
import Login from "../../components/Login";
import fetchLogin from "../actionCreators/Fetchlogin";


const mapStateToProps = state => ({
  token: state.user
});

const mapDispatchToProps = dispatch => ({
  addUser: ({login, password}) => dispatch(fetchLogin(login, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
