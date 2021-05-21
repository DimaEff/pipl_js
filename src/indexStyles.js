import styled, {createGlobalStyle} from "styled-components";
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
            main: '#00A287',
        },
    },
    typography: {
        fontSize: '15',
        fontFamily: ['"Comfortaa"',].join(','),
    },
})

theme.props = {
    MuiButton: {
        disableElevation: true,
    }
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
    }
}

export default theme;