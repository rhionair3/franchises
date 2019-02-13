import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    overrides: {
        MuiDrawer: {
            paper: {
                marginTop: 50
            },
        },
    },
});

export default theme;