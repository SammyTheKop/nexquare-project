import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "../avatar/avatar";

// icons
import GithubIcon from "@material-ui/icons/GitHub";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// assets
import samratImage from "../../assets/samrat.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "black"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    fontSize: "16px"
  },
  div: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "end",
    alignItems: "center"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="github"
          >
            <GithubIcon />
          </IconButton>
          <Typography className={classes.title}>Culceth High School</Typography>
          <div className={classes.div}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="github"
            >
              <NotificationsIcon />
            </IconButton>
            <Avatar path={samratImage} />
            <p>Samrat Ghosh</p>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="expand"
            >
              <ExpandMoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
