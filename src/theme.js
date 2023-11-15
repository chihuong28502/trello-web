import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const APP_BAR_HEIGHT = '58px';
const BOARD_BAR_HEIGHT = '60px';
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;

// Create a theme instance.
const theme = extendTheme({
    trello: {
        appBarHeight: APP_BAR_HEIGHT,
        boardBarHeight: BOARD_BAR_HEIGHT,
        boardContentHeight: BOARD_CONTENT_HEIGHT,
    },
    colorSchemes: {
        // light: {
        //   palette: {
        //     primary: teal,
        //     secondary: deepOrange,
        //   },
        //   // spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
        // },
        // dark: {
        //   palette: {
        //     primary: cyan,
        //     secondary: orange,
        //   },
        // },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                //custom scroll bar
                body: {
                    '*::-webkit-scrollbar': {
                        width: '8px',
                        height: '8px',
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: '#dcdde1',
                        borderRadius: '8px',
                    },
                    '*::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#00b894',
                    },
                },
            },
        },
        //set all theme
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    textTransform: 'none',
                    borderWidth: '0.5px',
                    '&:hover': {
                        borderWidth: '1px',
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                // Name of the slot
                root: {
                    fontSize: '0.875rem',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                // Name of the slot
                root: {
                    '&.MuiTypography-body1': {
                        fontSize: '0.875rem',
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                // Name of the slot
                root: ({ theme }) => {
                    return {
                        // color: theme.palette.primary.main,
                        fontSize: '0.875rem',
                        '.MuiOutlinedInput-notchedOutline': {
                            // borderColor: theme.palette.primary.light,
                        },
                        '&:hover': {
                            // sửa outline hover
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: theme.palette.primary.main,
                            },
                        },
                        '& fieldset': {
                            //sửa đường viền click input
                            borderWidth: '0.5px !important',
                        },
                        '&:hover fieldset': {
                            //sửa đường viền click input
                            borderWidth: '1px !important',
                        },
                        '&.Mui-focused fieldset': {
                            //sửa đường viền click input
                            borderWidth: '1px !important',
                        },
                    };
                },
            },
        },
    },
});

export default theme;
