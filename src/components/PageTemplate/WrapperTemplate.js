import React, { Component } from "react";
import NavBar from "./NavBar";
import PropTypes from "prop-types";
import { withStyles, CssBaseline } from "../../includes";
import SimpleTable from "./Table";

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    // marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  logoutButton: { marginLeft: 12 },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  userTitle: {
    flexGrow: 3
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  chartContainer: {
    marginLeft: -22
  }
});
export class DashboardWrapperTemplate extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <NavBar {...this.props} />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            {this.props.children}
            <SimpleTable {...this.props} />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

DashboardWrapperTemplate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DashboardWrapperTemplate);
