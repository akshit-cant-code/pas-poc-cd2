
import React, { useState } from "react";
import './TabList.scss';
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Button } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import { useEffect } from "react";

const DatabaseTab = () => {

    const [hasServerHostError, setHasServerHostError] = useState(false);
    const [hasServerPortError, setHasServerPortError] = useState(false);
    const [hasTokenError, setHasTokenError] = useState(false);
    const [serverHost, setServerHost] = useState('');
    const [serverPort, setServerPort] = useState('');
    const [token, setToken] = useState('');
    const [errorMsgForHost, setErrorMsgForHost] = useState('');
    const [errorMsgForPort, setErrorMsgForPort] = useState('');
    const [errorMsgForToken, setErrorMsgForToken] = useState('');

    const addServerInfo = () => {
        var requestBody = {
            serverHost : serverHost,
            serverPort : serverPort,
            useTLS : false,
            token : token

        };
        fetch("https://localhost:58298/api/database", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(requestBody),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.info("Data Successfully Added");
            });
    }

    const getInfo = () => {
        fetch("https://localhost:58298/api/databases", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data[data.length - 1] !== undefined) {
                    setServerHost(data[data.length - 1].serverHost);
                    setServerPort(data[data.length - 1].serverPort);
                    setToken(data[data.length - 1].token)
                }
            });
    }

    const handleFieldsValue = () => {
        setServerHost(document.getElementById('serverHost').value);
        setServerPort(document.getElementById('serverPort').value);
        setToken(document.getElementById('token').value);
    }

    const handleErrorForHost = () => {
        setHasServerHostError(false);
        setErrorMsgForHost('');
        if (serverHost.length === 0) {
            setHasServerHostError(true);
            setErrorMsgForHost('Influx database host name is required');
        }
        else if (serverHost.length > 256) {
            setHasServerHostError(true);
            setErrorMsgForHost('Exceeded max limit for host name length. Only 255 characters allowed');
        }
        else if (!isValidHost(document.getElementById('serverHost').value)) {
            setHasServerHostError(true);
            setErrorMsgForHost('Please enter valid host name');
        }
    }

    const handleErrorForPort = () => {
        setHasServerPortError(false);
        setErrorMsgForPort('');
        if (serverPort.length === 0) {
            setHasServerPortError(true);
            setErrorMsgForPort('Influx database port name is required');
        }
        else if (document.getElementById('serverPort').value <= 0 || document.getElementById('serverPort').value > 65535) {
            setHasServerPortError(true);
            setErrorMsgForPort('Please enter valid port number');
        }
        else if (!isValidPort(document.getElementById('serverPort').value)) {
            setHasServerPortError(true);
            setErrorMsgForPort('Please enter valid port number');
        }
    }

    const handleErrorForToken = () => {
        setHasTokenError(false);
        setErrorMsgForToken('');
        if (token.length === 0) {
            setHasTokenError(true);
            setErrorMsgForToken('Token is required');
        }
        else if (token.length > 128) {
            setHasTokenError(true);
            setErrorMsgForToken('Exceeded max limit for host Token length. Only 128 characters allowed');
        }
    }

    const isValidHost = (host) => {
        const regex = new RegExp(`^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\-]*[A-Za-z0-9])$`);
        return regex.test(host);
    }

    const isValidPort = (port) => {
        const regex = new RegExp(`^[0-9]*$`);
        return regex.test(port);
    }

    useEffect(() => {
        getInfo();
    }, []);


    return (
        <div className="license-tab-overview">
            <Grid container spacing={1}>
                <Grid item xs={2} className="license-tab-main-title">
                    <Typography className="license-tab-title">
                        Influx server host
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <input type="text" id="serverHost" name="fname" className={`license-tab-input-field ${hasServerHostError ? 'license-tab-input-field-error' : ''}`} onChange={handleFieldsValue} onBlur={handleErrorForHost} />
                    <span className="license-tab-input-field-error-msg">{errorMsgForHost}</span>
                </Grid>
            </Grid>
            <div className="license-tab-spacing-div"></div>
            <Grid container spacing={1}>
                <Grid item xs={2} className="license-tab-main-title">
                    <Typography className="license-tab-title">
                        Influx server port
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <input type="text" id="serverPort" name="fname" className={`license-tab-input-field ${hasServerPortError ? 'license-tab-input-field-error' : ''}`} onChange={handleFieldsValue} onBlur={handleErrorForPort} />
                    <span className="license-tab-input-field-error-msg">{errorMsgForPort}</span>
                </Grid>
            </Grid>
            <div className="license-tab-spacing-div"></div>
            <Grid container spacing={1}>
                <Grid item xs={2} className="license-tab-main-title">
                    <Typography className="license-tab-title">
                        Use TLS
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <input type="checkbox" id="useTLS" name="useTLS" value="useTLS" className="license-tab-checkbox-field" />
                </Grid>
            </Grid>
            <div className="license-tab-spacing-div"></div>
            <Grid container spacing={1}>
                <Grid item xs={2} className="license-tab-main-title">
                    <Typography className="license-tab-title">
                        Token
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <input type="text" id="token" name="fname" className={`license-tab-input-field ${hasTokenError ? 'license-tab-input-field-error' : ''}`} onChange={handleFieldsValue} onBlur={handleErrorForToken} />
                    <span className="license-tab-input-field-error-msg">{errorMsgForToken}</span>
                </Grid>
            </Grid>
            <div className="license-tab-spacing-div"></div>
            <Row className="license-tab-action-buttons database-tab-action-btns">
                <Col sm={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        className="license-tab-save-btn"
                        onClick={() => addServerInfo()}
                        disabled={hasServerHostError || hasServerPortError || hasTokenError || serverHost.length === 0 || token.length === 0}
                    >
                        <Typography className="license-tab-title">
                            Save
                        </Typography>

                    </Button>
                </Col>
                <Col sm={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled
                        className="license-tab-test-license-btn"
                    >
                        <Typography className="license-tab-title license-tab-title-btn">
                            Test Connection
                        </Typography>
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default DatabaseTab;


