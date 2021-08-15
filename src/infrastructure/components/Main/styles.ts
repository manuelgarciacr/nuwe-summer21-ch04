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
        loadingError: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 400,
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
        userImg: {
            position: "absolute",
            top: 16,
            right: 16,
            cursor: "pointer",
            textAlign: "center",
            "& img": {
                width: 50,
                height: 50
            }
        },
        divider: {
            height: 2,
            width: "100%",
            margin: "32px 0!important",
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
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            border: "1px solid #eaeaea",
            width: 100,
            maxHeight: 216,
            padding: 4,
            boxSizing: "border-box",
            position: "relative"
        },
        thumbInner: {
            // display: "flex",
            // flexDirection: "column",
            width: "100%",
            height: 100,
            flexGrow: 0,
            flexShrink: 0,
            marginTop: 40,
            "& p": {
                overflowWrap: "anywhere"
            },
            "& .pg-viewer-wrapper": {
                width: "auto",
                height: "100%",
                display: "block",
                overflowY: "unset"
            },
            "& .photo-viewer-container": {
                width: "unset!important",
                height: "unset!important"
            },
            "& .photo-viewer-container>img": {
                width: "100%!important",
                height: "100%!important"
            },
            "& .unsupported-message": {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 0,
                backgroundColor: "transparent",
                height: "100%",
                "& .text": {
                    margin: 0,
                    maxHeight: 100,
                    overflow: "hidden",
                    display: "-webkit-box",
                    "-webkit-line-clamp": 3,
                    "-webkit-box-orient": "vertical",
                    textOverflow: "ellipsis",
                    whiteSpace: "initial",
                    lineBreak: "anywhere",
                    fontSize: 25
                }
            }
        },
        thumbText: {
            height: 58,
            overflow: "hidden",
            marginTop: "5px!important",
            display: "-webkit-box",
            "-webkit-line-clamp": 3,
            "-webkit-box-orient": "vertical",
            textOverflow: "ellipsis",
            whiteSpace: "initial",
            lineBreak: "anywhere"
        },
        img: {
            display: "block",
            width: "auto",
            height: "100%",
        },
        unsupportedComponent: {
            textAlign: "center"
        },
        thumbsContainer: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 16,
            padding: 16,
            gap: 5,
            justifyContent: "space-evenly"
        },
        driveBtn: {
            zIndex: 5,
            height: 32,
            padding: "0!important",
            position: "absolute",
            right: 32,
            width: 32,
            "&.MuiIconButton-root": {
                position: "absolute",
            },
            "&.MuiIconButton-root.Mui-disabled": {
                opacity: ".3"
            }
        },
        removeBtn: {
            zIndex: 5,
            color: "red!important",
            height: 32,
            padding: "0!important",
            right: 5,
            width: 32,
            "&.MuiIconButton-root": {
                position: "absolute",
            }
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
