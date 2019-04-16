import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Settings from "@material-ui/icons/Settings"
import ExitToApp from "@material-ui/icons/ExitToApp"
import InputIcon from "@material-ui/icons/Input"
import CallMade from "@material-ui/icons/CallMade"
import FormatListBulleted from '@material-ui/icons/FormatListBulleted'
import PropTypes from "prop-types";

const styles = {
  list: {
    width: 250,
  }
};

class SwipeableTemporaryDrawer extends React.Component {

  toggleDrawer = open => this.props.toggleDrawer(open);

  clearStorage = () => {
    localStorage.removeItem("userToken");
    this.props.addUser("")
  };

  render() {
    const {token} = this.props;

    const { classes } = this.props;
    return (
      <div>
        <SwipeableDrawer
          open={this.props.isOpen}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <div className={classes.list}>
              <List>
                {!token.length ? <Link component={RouterLink} to={"/login/"}>
                  <ListItem button >
                    <InputIcon/>
                    <ListItemText primary={"Войти"} />
                  </ListItem>
                </Link> : "" }
                {!token.length ?<Link component={RouterLink} to={"/registration/" }>
                  <ListItem button >
                    <CallMade/>
                    <ListItemText primary={"Регистрация"} />
                  </ListItem>
                </Link> : "" }
                <Link component={RouterLink} to={"/tasks/"}>
                  <ListItem button >
                    <FormatListBulleted/>
                    <ListItemText primary={"TODO"} />
                  </ListItem>
                </Link>
                <Link component={RouterLink} to={"/"}>
                  <ListItem button >
                    <Settings/>
                    <ListItemText primary={"Настройки"} />
                  </ListItem>
                </Link>
                <Divider />
                {token.length ? <Link
                  component={RouterLink}
                  onClick={this.clearStorage}
                  to="/login/"
                >
                  <ListItem button >
                    <ExitToApp />
                    <ListItemText primary={"Выйти"} />
                  </ListItem>
                </Link> : ""}
              </List>
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object,
  toggleDrawer: PropTypes.func,
  favorites: PropTypes.array,
  switchFavoritesState: PropTypes.func
};

export default withStyles(styles)(SwipeableTemporaryDrawer);
