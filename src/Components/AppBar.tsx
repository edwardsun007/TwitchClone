import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import logo from "../twitch-logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarWrapper: {
    backgroundColor: "#18181a",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
}));

const menuId = "twitch-appbar-menu";

const TopAppBar = (): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | undefined>(
    undefined
  );

  const classes = useStyles();

  const handleMenuClick = (event: React.MouseEvent): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (): void => {
    setAnchorEl(undefined);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarWrapper}>
        <Toolbar>
          <img
            src={logo}
            style={{ width: "30px", height: "30px", marginRight: "20px" }}
          />
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={handleMenuClick}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "center", horizontal: "left" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          </Menu>

          <Typography variant="h6" className={classes.title}>
            Trending
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopAppBar;
