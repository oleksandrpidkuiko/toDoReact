import { connect } from "react-redux";
import createUser from "../actionCreators/CreateUser";
import Registration from "../../components/Registration";


const mapStateToProps = state => ({
  token: state.user
});

const mapDispatchToProps = dispatch => ({
  regUser: ({name, surname, email, phone, password}) => dispatch(createUser(name, surname, email, phone, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
