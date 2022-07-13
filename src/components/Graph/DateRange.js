import React from "react";
import { useState } from "react";
import {DateRangePicker} from 'rsuite';
import {  addHours, addMinutes, addMonths } from 'date-fns'
import "rsuite/dist/rsuite.min.css";


function DateRange(props) {

  const [open, setOpen] = useState(false);
  //const [dateRange, setDateRange] = useState();
  const Ranges = [
    {
      label: 'last 5 minutes',
      value: [new Date(), addMinutes(new Date(), -5)],
      closeOverlay: true
    },
    {
      label: 'last 15 minutes',
      value: [new Date(), addMinutes(new Date(), -15)],
      closeOverlay: true
    },
    {
      label: 'last 30 minutes',
      value: [new Date(), addMinutes(new Date(), -30)],
      closeOverlay: true
    },
    {
      label: 'last 1 hour',
      value: [new Date(), addHours(new Date(), -1)],
      closeOverlay: true
    }
  ];
  return (
      <DateRangePicker format="yyyy-MM-dd HH:mm:ss" onChange={(range) => {
        var dateRange = {
          endDate :range[0],
           StartDate: range[1]};
        props.parentCallback(dateRange)
      } }ranges={Ranges} />
  );
}

export default DateRange;
   