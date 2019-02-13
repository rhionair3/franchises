// const drawerWidth = 240;

const stylesBrambang = theme => ({
    root: {
        display: 'flex'
    },
    brambangSidebar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    brambangSidebarShift: {
        // width: `calc(100% - ${drawerWidth}px)`,
        // marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    headerLogoWrapper: {
        width: 180,
        maxWidth: 180
    },
    brambangDrawer: {
        width: 240,
        marginTop:50,
        flexShrink: 0
    },
    brambangDrawerpaper: {
        width: 240,
        marginTop: 50
    },
    brambangNavbar: {
        height: 50,
        background: '#fbc81f',
    },
    brambangToolbar: {
        height: 46,
        background: 'linear-gradient(45deg, #c0392b 30%, #e74c3c 90%)',
        paddingLeft:15
    },
    headerSideBarMenu: {
        width: '100%;',
        maxWidth: 240,
        background: '#fbc81f',
        paddingBottom: 4,
    },
    headerSideBarMenuInner: {
        background: '#ffffff',
    },
    listItemWrapper: {
        width: '100%;',
        maxWidth: 240,
        '&:hover': {
            background: '#fbc81f',
        },
        transition: theme.transitions.create(['background', 'color'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    listItemInner: {
        marginLeft: 4,
        '& *': {
        },
        '&:hover': {
            background: 'linear-gradient(45deg, #c0392b 30%, #e74c3c 90%)',
            '& *': {
                color: '#ffffff'
            },
            transition: theme.transitions.create(['background', 'color'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        }
    },
    appBarSpacer: {
        marginBottom: 20
    },
    content: {
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 240,
    },
    btnPrimary: {
        background: 'linear-gradient(45deg, #c0392b 30%, #e74c3c 90%)',
    },
    btnSuccess: {
        background: 'linear-gradient(45deg, #27ae60 30%, #2ecc71 90%)',
    }
});

export default stylesBrambang;