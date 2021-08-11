import { useEffect, useMemo, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone'
import { v4 as uuidv4 } from 'uuid';

import useStyles from "./styles";
import { GoogleIcon } from 'infrastructure/assets/img/GoogleIcon';

import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';


const maxLength = 250 * 1024;

const nameLengthValidator = (file: File) => {
  if (file.size > maxLength) {
    return {
      code: "file-too-large",
      message: `File sie is larger than 300k`
    };
  }

  return null
}

const Main = (props: any) => {
    const classes = useStyles();
    const [alerts, setAlerts] = useState<any[]>([]);
    const [files, setFiles] = useState<any[]>([]);
    //  To use a state property inside of a setTimeout
    const alertsRef = useRef(alerts);
    alertsRef.current = alerts;
    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        accept: 'application/vnd.ms-excel, text/plain, .txt, .csv, image/*',
        maxFiles: 3,
        validator: nameLengthValidator,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const acceptedFileItems = acceptedFiles.map(file => {
        return (
        <li key={uuidv4()}>
            {file.name} - {file.size} bytes
        </li>
    )});

    useEffect(() => {
        const newAlerts: any[] = [];
        fileRejections.forEach(file  => {
            const alert = {
                id: uuidv4(),
                type: "error",
                title: file.file.name + " - " + file.file.size,
                msg: file.errors.map((e: any) => (
                    <li key={e.code}>{e.message}</li>
                ))
            }
    console.log("FRI", alert)
            newAlerts.push(alert);
        });
        setAlerts([...alerts, ...newAlerts])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[fileRejections])

    const RenderAlerts = alerts.map((alert: any) =>
        <Alert className={classes.alert} key={alert.id} onClose={() => deleteAlert(alert.id)} severity={alert.type}>
            <AlertTitle>{alert.title}</AlertTitle>
            {alert.msg}
        </Alert>
    );

    const deleteAlert = (id: string) => {
        
        const idx = alerts.findIndex(e => e.id === id);
        if (idx < 0)
            return;
        // const toastListItem = toastList.findIndex(e => e.id === id);
        alerts.splice(idx, 1);
        // toastList.splice(toastListItem, 1);
console.log("DA", alerts.length)
        setAlerts([...alerts]);
    }

    useEffect(() => {
        if (!alerts.length)
            return;
        const time = 6000 / alerts.length;
        const interval = setInterval(() => {
            //if (alerts.length) {
                deleteAlert(alerts[0].id);
            //}
        }, time);
        
        return () => {
            clearInterval(interval);
        }

        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [alerts]);

    const thumbs = files.map(file => (
        <div className={classes.thumb} key={file.name}>
            <div className={classes.thumbInner}>
                <img
                    src={file.preview}
                    className={classes.img}
                    alt="Preview"
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);


    const className = useMemo(() => [
        classes.dropBox,
        isDragActive ? classes.dropBoxActive : "",
        isDragAccept ? classes.dropBoxAccept : "",
        isDragReject ? classes.dropBoxReject : ""
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ].join(" "), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);
    const { ...rootProps } = getRootProps({className})

    return (
        <div className={classes.root}>
            <Paper className={classes.dropBoxContainer}>
                <Card {...rootProps}>
                    <input {...getInputProps()} />
                    <p style={{paddingLeft: 16}}>Arrastra tus archivos aquí,<br/> o clica para seleccionar ficheros,<br/> máximo 3 archivos a la vez y 250k</p>
                    <aside className={classes.thumbsContainer}>
                        {thumbs}
                    </aside>
                </Card>
                {/* <aside>
                    <h4>Accepted files</h4>
                    <ul>{acceptedFileItems}</ul>
                    <h4>Rejected files</h4>
                    <ul>{fileRejectionItems}</ul>
                </aside> */}
                <div style={{position: "absolute", bottom: 5, right: 50, overflowX: "hidden"}}>{RenderAlerts}</div>
            </Paper>
            <Paper className={classes.loginContainer}>
                <Typography variant="h5">Bienvenido a DDrop</Typography>
                <Typography className={classes.loginParagraph} variant="subtitle2">Para subir tus archivos de forma simple a drive, puedes hacer Login a través de Google.</Typography>
                <Divider className={classes.divider}></Divider>
                <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                    startIcon={<GoogleIcon />}
                >
                    Login con Google
                </Button>
            </Paper>
        </div>
    )
}

export default Main;
