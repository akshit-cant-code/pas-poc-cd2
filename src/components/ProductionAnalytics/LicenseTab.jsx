import React, { Component } from "react";
import './TabList.scss';
import './ToastContainer.scss';
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Button } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

const LicenseTab = () => {
    const [haslicenseIPError, setHasLicenseIPError] = useState(false);
    const [hasProductKeyError, setHasProductKeyError] = useState(false);
    const [serverIP, setServerIP] = useState('');
    const [productKey, setProductKey] = useState('');
    const [errorMsgForIP, setErrorMsgForIP] = useState('');
    const [errorMsgForKey, setErrorMsgForKey] = useState('');

    const addLicense = () => {
        var requestBody = {
            serverIP: serverIP,
            productKey: productKey,
            licenseEdition: 'License Edition'

        };
        fetch("https://localhost:58298/api/license", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(requestBody),
        })
            .then((res) => res.json())
            .then((data) => {
                clearFields();
                toast.info("Data Successfully Added");
            });
    }

    const getLicense = () => {
        fetch("https://localhost:58298/api/license", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data[data.length - 1] !== undefined) {
                    setServerIP(data[data.length - 1].serverIP);
                    setProductKey(data[data.length - 1].productKey);
                }
            });
    }

    const clearFields = () => {
        setServerIP('');
        setProductKey('');
    }

    const handleErrorForIP = () => {
        setErrorMsgForIP('');
        setHasLicenseIPError(false);
        if (serverIP.length === 0) {
            setHasLicenseIPError(true);
            setErrorMsgForIP('License Server IP is required');
        }
        else if (serverIP.length > 15) {
            setHasLicenseIPError(true);
            setErrorMsgForIP('Exceeded max limit for License Server IP length. Only 15 characters allowed');
        }
        else if (!isValidIP(document.getElementById('serverIP').value)) {
            setHasLicenseIPError(true);
            setErrorMsgForIP('Invalid Server IP');
        }
    }

    const handleErrorForProductKey = () => {
        setErrorMsgForKey('');
        setHasProductKeyError(false);
        if (productKey.length === 0) {
            setHasProductKeyError(true);
            setErrorMsgForKey('Product Key is required');
        }
        else if (serverIP.length > 19) {
            setHasProductKeyError(true);
            setErrorMsgForKey('Exceeded max limit for Product Key length. Only 19 characters allowed');
        }
        else if (!isValidKey(document.getElementById('productKey').value)) {
            setHasProductKeyError(true);
            setErrorMsgForKey('Invalid Product Key');
        }
    }

    const handleFieldsValue = () => {
        const licenseServerIp = document.getElementById('serverIP').value;
        const productKey = document.getElementById('productKey').value;
        setServerIP(licenseServerIp);
        setProductKey(productKey);
    }

    const isValidIP = (ip) => {
        const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)';
        const regex = new RegExp(`^${octet}\\.${octet}\\.${octet}\\.${octet}?$`);
        return regex.test(ip);
    }

    const isValidKey = (key) => {
        const regex = new RegExp(`^[{]?[0-9a-zA-Z]{4}-([0-9a-zA-Z]{4}-){2}[0-9a-zA-Z]{4}[}]?$`);
        return regex.test(key);
    }


    useEffect(() => {
          getLicense();
      }, []);

    return (
        <div className="license-tab-overview">
            <Grid container spacing={1}>
                <Grid item xs={2} className="license-tab-main-title">
                    <Typography className="license-tab-title">
                        License Server IP
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <input type="text" id="serverIP" name="fname" className={`license-tab-input-field ${haslicenseIPError ? 'license-tab-input-field-error' : ''}`} onBlur={handleErrorForIP} onChange={handleFieldsValue} />
                    <span className="license-tab-input-field-error-msg">{errorMsgForIP}</span>
                </Grid>
            </Grid>
            <div className="license-tab-spacing-div"></div>
            <Grid container spacing={1}>
                <Grid item xs={2} className="license-tab-main-title">
                    <Typography className="license-tab-title">
                        Product Key
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <input type="text" id="productKey" name="fname" className={`license-tab-input-field ${hasProductKeyError ? 'license-tab-input-field-error' : ''}`} onBlur={handleErrorForProductKey} onChange={handleFieldsValue} />
                    <span className="license-tab-input-field-error-msg">{errorMsgForKey}</span>
                </Grid>
            </Grid>
            <div className="license-tab-spacing-div"></div>
            <Grid container spacing={1}>
                <Grid item xs={2} className="license-tab-main-title">
                    <Typography className="license-tab-title">
                        License edition
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <input type="text" id="fname" name="fname" className="license-tab-input-field license-tab-input-field-read-only" value={'License Edition'} />
                </Grid>
            </Grid>
            <div className="license-tab-spacing-div"></div>
            <Row className="license-tab-action-buttons">
                <Col sm={2}>
                    <Button
                        variant="contained"
                        className={`license-tab-save-btn ${hasProductKeyError || haslicenseIPError || serverIP.length === 0 || productKey.length === 0 ? 'license-tab-save-btn-disabled' : ''}`}
                        onClick={() => addLicense()}
                        disabled={hasProductKeyError || haslicenseIPError || serverIP.length === 0 || productKey.length === 0}
                    >
                        <Typography className="license-tab-title">
                            Save
                        </Typography>

                    </Button>
                </Col>
                <Col sm={2}>
                    <Button
                        variant="contained"
                        disabled
                        className="license-tab-test-license-btn"
                    >
                        <Typography className="license-tab-title license-tab-title-btn">
                            Test License
                        </Typography>
                    </Button>
                </Col>
            </Row>
            <ToastContainer
                autoClose={false}
                hideProgressBar={true}
                className='toast-message'
                bodyClassName='toast-container-title'
                limit={1}
            />
        </div>
    );
};

export default LicenseTab;
