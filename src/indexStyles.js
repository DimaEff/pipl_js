import {createGlobalStyle} from "styled-components";
import {createMuiTheme} from "@material-ui/core";


export const Global = createGlobalStyle`
  * {
    color: black;
    font-family: 'Comfortaa', cursive;
  }
`

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3914AF'
        },
        secondary: {
            main: 'rgba(255, 255, 255, 0.2)',
        },

    },
    typography: {
        fontSize: 15,
        fontFamily: ['"Comfortaa"',].join(','),
    },
})

theme.props = {
    MuiButton: {
        disableElevation: true,
    },
    MuiCard: {
        elevation: 2,
    },
}

theme.overrides = {
    MuiButton: {
        root: {
            borderRadius: '30px',
            textTransform: 'none',
        },
    },
    MuiButtonGroup: {
        root: {
            borderRadius: '30px',
        }
    },

    MuiCard: {
        root: {
            borderRadius: '20px',
        },

    },
    MuiCardMedia: {
        root: {
            marginLeft: '5px',
            marginRight: '5px',
            borderRadius: '20px',
        }
    },

    // MuiCollapse: {
    //     entered: {
    //         border: '1px solid red'
    //     },
    //     hidden: {
    //         color: 'green',
    //         border: '1px solid green'
    //     },
    //     wrapper: {
    //         border: '1px solid blue',
    //     }
    // }
};

export default theme;