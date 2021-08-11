import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            padding: 0,
            height: "100vh",
            [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
            },
        },
        dropBoxContainer: {
            flex: 3,
            padding: 32,
            [theme.breakpoints.down("sm")]: {
                padding: 10,
            },
        },
        dropBox: {
            borderColor: theme.palette.primary.main,
            borderStyle: "solid",
            borderWidth: 4,
            height: "100%",
            transition: "boxShadow 4s ease-out",
            [theme.breakpoints.up("sm")]: {
                margin: "0 32px",
            },
        },
        dropBoxActive: {
            borderColor: "black",
            [theme.breakpoints.up("sm")]: {
                animation: `$boxShadowActive 2s linear infinite`,
            },
        },
        dropBoxAccept: {
            borderColor: "black",
        },
        dropBoxReject: {
            borderColor: "black",
            [theme.breakpoints.up("sm")]: {
                animation: `$boxShadowReject 2s linear infinite`,
            },
        },
        loginContainer: {
            flex: 2,
            display: "flex",
            flexDirection: "column",
            padding: 32,
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
                flex: 1,
                padding: 16,
            },
        },
        loginParagraph: {
            marginTop: 32,
            [theme.breakpoints.down("sm")]: {
                margin: "16px 0",
            },
        },
        divider: {
            height: 2,
            width: "100%",
            margin: "32px 0",
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
        button: {
            transition: "transform 300ms",
            "&:hover": {
                transform: "translate(0,-15%)",
            },
        },
        thumb: {
            display: "inline-flex",
            borderRadius: 2,
            border: "1px solid #eaeaea",
            marginBottom: 8,
            marginRight: 8,
            width: 100,
            height: 100,
            padding: 4,
            boxSizing: "border-box",
        },
        thumbInner: {
            display: "flex",
            minWidth: 0,
            overflow: "hidden",
        },
        img: {
            display: "block",
            width: "auto",
            height: "100%",
        },
        thumbsContainer: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 16,
        },
        alert: {
            bottom: 12,
            right: 12,
            transition: "transform .6s ease-in-out!important",
            animation: `$toast-in-right .7s`,
        },
        "@keyframes boxShadowActive": {
            "0%": {
                boxShadow: "0 0 10px 5px #fff, 0 0 20px 10px #0f0",
            },
            "33%": {
                boxShadow: "0 0 5px 2px #fff, 0 0 10px 5px #ff0",
            },
            "66%": {
                boxShadow: "0 0 10px 5px #fff, 0 0 20px 10px #0f0",
            },
            "100%": {
                boxShadow: "0 0 5px 2px #fff, 0 0 10px 5px #ff0",
            },
        },
        "@keyframes boxShadowReject": {
            "0%": {
                boxShadow: "0 0 10px 5px #fff, 0 0 20px 10px #f00",
            },
            "33%": {
                boxShadow: "0 0 5px 2px #fff, 0 0 10px 5px #fca05a",
            },
            "66%": {
                boxShadow: "0 0 10px 5px #fff, 0 0 20px 10px #f00",
            },
            "100%": {
                boxShadow: "0 0 5px 2px #fff, 0 0 10px 5px #fca05a",
            },
        },
        "@keyframes toast-in-right": {
            from: {
                transform: "translateX(100%)",
            },
            to: {
                transform: "translateX(0)",
            },
        }
    })
);

export default useStyles;
