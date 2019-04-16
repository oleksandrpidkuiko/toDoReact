import { connect } from "react-redux";
import Menu from "../../components/Menu";
import {addUserSuccess} from "../actions";

const mapDispatchToProps = dispatch => ({
  addUser: (token) => dispatch(addUserSuccess(token))
});

export default connect(
  null,
  mapDispatchToProps
)(Menu);
