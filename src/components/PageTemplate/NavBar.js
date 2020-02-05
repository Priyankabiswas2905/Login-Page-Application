import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  classNames,
  Button,
  AppBar,
  Toolbar,
  Typography
} from "../../includes";
import { userLogout } from "../../includes/actions";

class NavBar extends Component {
  onUserLogout() {
    this.props.userLogout();
    this.props.history.push("/");
  }
  render() {
    const { user, classes } = this.props;

    return (
      <Fragment>
        <AppBar
          position="absolute"
          color="inherit"
          className={classNames(classes.appBar)}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              component="h1"
              variant="title"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
            <Typography color="inherit">{user}</Typography>
            <Button
              variant="contained"
              size="small"
              className={classes.logoutButton}
              onClick={this.onUserLogout.bind(this)}
            >
              Log out
            </Button>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  userLogout: userLogout
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
