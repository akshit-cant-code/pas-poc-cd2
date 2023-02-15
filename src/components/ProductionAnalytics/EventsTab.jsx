
import React, { Component, useState, useEffect } from "react";
import './MachineList.scss';
import './Pagination.scss';
import Typography from "@mui/material/Typography";
import SortIcon from '@mui/icons-material/Sort';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import ReactPaginate from "react-paginate";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LastPageIcon from '@mui/icons-material/LastPage';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FirstPageIcon from '@mui/icons-material/FirstPage';


const EventsTab = () => {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);

    const tempData = [
        { title: "0025", id: "*" },
        { title: "10021", id: "*" },
        { title: "10057", id: "%{REJECTION_CODE}" },
        { title: "10809", id: "*" },
        { title: "10850", id: "*" },
        { title: "10928", id: "*" },
        { title: "10957", id: "%1" },
        { title: "11684", id: "*" },
        { title: "12694", id: "*" },
        { title: "16681", id: "first" },

        { title: "0025", id: "%{REJECTION_STATUS}" },
        { title: "10021", id: "*" },
        { title: "10057", id: "%{REJECTION_CODE}" },
        { title: "10809", id: "*" },
        { title: "10850", id: "*" },
        { title: "10928", id: "*" },
        { title: "10957", id: "%1" },
        { title: "11684", id: "*" },
        { title: "12694", id: "*" },
        { title: "16681", id: "second" },

        { title: "0025", id: "%{STATUS_CODE}" },
        { title: "10021", id: "*" },
        { title: "10057", id: "%{REJECTION_CODE}" },
        { title: "10809", id: "*" },
        { title: "10850", id: "*" },
        { title: "10928", id: "*" },
        { title: "10957", id: "%1" },
        { title: "11684", id: "*" },
        { title: "12694", id: "*" },
        { title: "16681", id: "last" },
    ]

    const getData = async () => {
        const data = tempData;
        setTotalRecords(data.length);
        const slice = offset === 0 ? data.slice(offset, offset + perPage) : data.slice((offset - 1) * perPage, ((offset - 1) * perPage) + 10);
        let postData = [];
        let postData1 = slice.forEach(item => {
            postData.push({
                title: item.title,
                id: item.id
            })
        })
        setData(postData);
        setPageCount(Math.ceil(data.length / perPage))
    }
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    const handleNextPageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    const handlePreviousPageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage - 1);
    };

    useEffect(() => {
        getData()
    }, [offset])

    return (
        <div className="machine-tab-overview">
            <div className="machine-tab-container">
                <div className="row machine-tab-table-head">
                    <div className="col-4 machine-tab-table-head-col machine-tab-flex-start-text">
                        <div className="row machine-tab-row">
                            <Typography className="machine-tab-title machine-tab-head-long-title col-2 machine-tab-head-event-title-1">
                                Message Code
                            </Typography>
                            <SortIcon className='machine-tab-sort-icon col-1' />
                        </div>
                    </div>
                    <div className="col-4 machine-tab-table-head-col machine-tab-flex-start-text">
                        <div className="row machine-tab-row">
                            <Typography className="machine-tab-title machine-tab-head-event-title-2 col-2">
                                Params
                            </Typography>
                            <SortIcon className='machine-tab-sort-icon col-1' />
                        </div>
                    </div>
                    <div className="col-2 machine-tab-table-head-col machine-tab-center-text">
                        <Typography className="machine-tab-title machine-tab-center-text">
                            Edit
                        </Typography></div>
                    <div className="col-2 machine-tab-table-head-col machine-tab-center-text">
                        <Typography className="machine-tab-title machine-tab-center-text">
                            Remove
                        </Typography></div>
                </div>
                {
                    data &&
                    data.map(item => {
                        return (
                            <div className="row machine-tab-row machine-tab-row-content machine-tab-new-row-content">
                                <div className="col-4 machine-tab-table-head-col machine-tab-flex-start-text">
                                    <Typography className="machine-tab-title">
                                        {item.title}
                                    </Typography>
                                </div>
                                <div className="col-4 machine-tab-table-head-col machine-tab-flex-start-text">
                                    <Typography className="machine-tab-title">
                                        {item.id}
                                    </Typography>
                                </div>
                                <div className="col-2 machine-tab-table-head-col machine-tab-center-text">
                                    <Button
                                        className="machine-tab-edit-icon"
                                    >
                                        <EditIcon sx={{ color: "#fff", width: "12px", height: "12px" }} className=' col-1' />
                                    </Button></div>
                                <div className="col-2 machine-tab-table-head-col machine-tab-center-text">
                                    <Button
                                        className="machine-tab-remove-icon"
                                    >
                                        <ClearIcon sx={{ color: "#fff", width: "12px", height: "12px" }} className='col-1' />
                                    </Button></div>
                            </div>
                        )
                    })}
                <div className="row machine-tab-row machine-tab-row-content machine-tab-row-btn-content ">
                    <Button
                        className={`col-1 event-tab event-tab-backward-btn set-margin-right-none event-tab-btn-1 ${offset === 1 ? "event-tab-disable-btn" : ""}`}
                        onClick={() => handleNextPageClick({ selected: 0 })}
                        disabled={offset === 0}
                    >
                        <FirstPageIcon sx={{ color: "#6d787d", width: "13px", height: "13px" }} className='col-1 event-tab-backward-btn-icon' />
                    </Button>
                    <Button
                        className={`event-tab event-tab-backward-btn col-1 set-margin-left-none event-tab-btn-2 ${offset === 1 ? "event-tab-disable-btn" : ""}`}
                        onClick={() => handlePreviousPageClick({ selected: offset })}
                        disabled={offset === 0}
                    >
                        <ArrowBackIosIcon sx={{ color: "#6d787d", width: "11px", height: "11px" }} className='col-1 event-tab-backward-btn-icon' />
                    </Button>
                    <div className="col-8">
                        <ReactPaginate
                            pageCount={pageCount}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={1}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                            prevRel={null}
                            previousClassName={"disable-next-prev-btn"}
                            nextClassName={"disable-next-prev-btn"}
                            breakClassName={"disable-next-prev-btn"}
                        />
                    </div>

                    <Button
                        className={`event-tab event-tab-forward-btn col-1 set-margin-right-none event-tab-btn-3 ${offset === pageCount ? "event-tab-disable-btn" : ""}`}
                        onClick={() => handleNextPageClick({ selected: offset })}
                        disabled={offset === pageCount}
                    >
                        <ArrowForwardIosIcon sx={{ color: "#fff", width: "11px", height: "11px" }} className='col-1 event-tab-forward-btn-icon' />
                    </Button>
                    <Button
                        className={`event-tab event-tab-forward-btn col-1 set-margin-left-none event-tab-btn-4 ${offset === pageCount ? "event-tab-disable-btn" : ""}`}
                        onClick={() => handlePageClick({ selected: pageCount - 1 })}
                        disabled={offset === pageCount}
                    >
                        <LastPageIcon sx={{ color: "#fff", width: "13px", height: "13px" }} className='col-1 event-tab-forward-btn-icon' />
                    </Button>

                </div>
            </div>
            <div className="license-tab-spacing-div"></div>
            <Row className="license-tab-action-buttons d-flex justify-content-flex-end w-100 machine-tab-action-buttons">
                <Col sm={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled
                        className="license-tab-test-license-btn"
                    >
                        <Typography className="license-tab-title license-tab-title-btn">
                            ADD
                        </Typography>
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default EventsTab;
