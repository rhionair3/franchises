import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import muiBrambang from '../Assets/themes/muiBrambang';
import stylesBrambang from '../Assets/themes/stylesBrambang';


class BrambangLayout extends Component {
    state = {
        open: true,
    };

    brambangDrawerOpen = () => {
        this.setState({
            open: true
        });
    };

    brambangDrawerClose = () => {
        this.setState({
            open: false
        });
    };
    render() {
        const {classes, children } = this.props;
        const { open } = this.state;

        return (
            <MuiThemeProvider theme={muiBrambang}>
                <div className={stylesBrambang.root}>
                    <AppBar position="fixed" className={classes.brambangNavbar}>
                        <Toolbar variant="dense" className={classes.brambangToolbar}>
                            <Typography variant="h6" color="inherit" className={classes.headerLogoWrapper}>
                                Brambang.com
                            </Typography>
                            <IconButton aria-label="Menu" secondary="true" onClick={ open ? this.brambangDrawerClose : this.brambangDrawerOpen}>
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer className={classes.brambangDrawer} variant="persistent" open={open} classes={{ paper: classes.brambangDrawerPaper, }}>
                        <Divider />
                        <List>
                            <div className={classes.headerSideBarMenu}>
                                <ListItem className={classes.headerSideBarMenuInner}>
                                        <ListItemText primary="Menu Utama" color="inherit" />
                                </ListItem>
                            </div>
                            <div className={classes.listItemWrapper}>
                                <ListItem className={classes.listItemInner} component="a" href="/">
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Beranda" color="inherit" />
                                </ListItem>
                            </div>
                            <div className={classes.listItemWrapper}>
                                <ListItem className={classes.listItemInner} component="a" href="/franchise">
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Data Franchise" color="inherit" />
                                </ListItem>
                            </div>
                            <div className={classes.listItemWrapper}>
                                <ListItem className={classes.listItemInner}>
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Data Gerobak" color="inherit" />
                                </ListItem>
                            </div>
                            <div className={classes.listItemWrapper}>
                                <ListItem className={classes.listItemInner}>
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Data Koki" color="inherit" />
                                </ListItem>
                            </div>
                            <div className={classes.listItemWrapper}>
                                <ListItem className={classes.listItemInner}>
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Data Sertifikat" color="inherit" />
                                </ListItem>
                            </div>
                            <div className={classes.listItemWrapper}>
                                <ListItem className={classes.listItemInner}>
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Data Training" color="inherit" />
                                </ListItem>
                            </div>
                            <div className={classes.appBarSpacer} />
                            <div className={classes.headerSideBarMenu}>
                                <ListItem className={classes.headerSideBarMenuInner}>
                                        <ListItemText primary="Master Konfigurasi" color="inherit" />
                                </ListItem>
                            </div>
                            <div className={classes.listItemWrapper}>
                                <ListItem className={classes.listItemInner}>
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Gerobak" color="inherit" />
                                </ListItem>
                            </div>
                            <div className={classes.listItemWrapper}>
                                <ListItem className={classes.listItemInner}>
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Master Pengguna" color="inherit" />
                                </ListItem>
                            </div>
                            <div className={classes.listItemWrapper}>
                                <ListItem className={classes.listItemInner}>
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Akses Pengguna" color="inherit" />
                                </ListItem>
                            </div>
                            <div className={classes.listItemWrapper}>
                                <ListItem className={classes.listItemInner}>
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Manajemen Menu" color="inherit" />
                                </ListItem>
                            </div>
                        </List>
                    </Drawer>
                </div>
                <main className={classNames(classes.content, { [classes.contentShift]: open,})}>
                    {children}
                </main>
            </MuiThemeProvider>
        );
    }
}

BrambangLayout.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(stylesBrambang)(BrambangLayout);