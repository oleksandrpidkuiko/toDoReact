import { connect } from "react-redux";
import SwipeableTemporaryDrawer from "../../components/Menu/SwipeableTemporaryDrawer";
import {addUserSuccess} from "../actions";

const mapStateToProps = state => ({
  token: state.user
});

const mapDispatchToProps = dispatch => ({
  addUser: (token) => dispatch(addUserSuccess(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwipeableTemporaryDrawer);
