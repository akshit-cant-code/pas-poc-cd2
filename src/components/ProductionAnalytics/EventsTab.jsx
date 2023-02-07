
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


const EventsTab = () => {

    const tempRows = ['DA-PERF-MXD10', 'AL-DEV2'];

    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0);

    const getData = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
        const data = res.data;
        const slice = data.slice(offset, offset + perPage);
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

    useEffect(() => {
        getData()
    }, [offset])

    return (
        <div className="machine-tab-overview">
            <div className="machine-tab-container">
                <div className="row machine-tab-table-head">
                    <div className="col-4 machine-tab-table-head-col machine-tab-flex-start-text">
                        <div className="row machine-tab-row">
                            <Typography className="machine-tab-title machine-tab-head-long-title col-2">
                                Message Code
                            </Typography>
                            <SortIcon className='machine-tab-sort-icon col-1' />
                        </div>
                    </div>
                    <div className="col-4 machine-tab-table-head-col machine-tab-flex-start-text">
                        <div className="row machine-tab-row">
                            <Typography className="machine-tab-title machine-tab-head-title col-2">
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
                                        <EditIcon sx={{ color: "#fff", width: "13px", height: "13px" }} className=' col-1' />
                                    </Button></div>
                                <div className="col-2 machine-tab-table-head-col machine-tab-center-text">
                                    <Button
                                        className="machine-tab-remove-icon"
                                    >
                                        <ClearIcon sx={{ color: "#fff", width: "13px", height: "13px" }} className='col-1' />
                                    </Button></div>
                            </div>
                        )
                    })}
                <div className="row machine-tab-row machine-tab-row-content machine-tab-new-row-content ">
                    <ReactPaginate
                        pageCount={pageCount}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={1}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                        prevRel={null}
                    />

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
