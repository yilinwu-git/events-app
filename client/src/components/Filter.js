import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../css/filter.scss';



const Filter = ({userChange, startDate, endDate}) => {

    // const [startDate, setStartDate] = useState(new Date("2022-01-01"));
    // const [endDate, setEndDate] = useState(new Date("2022-12-31"));

    // const startDateChange = (newDate) => {
    //     onFilterChange(newDate, endDate);
    //     setStartDate(newDate);
    // }

    // const endDateChange = (newDate) => {
    //     onFilterChange(startDate, newDate);
    //     setEndDate(newDate);
    // }

    return (
        <div className='filter-container'>
            <p className="mr-s">Filter by Date </p>
            <div><span className="mr-s">from</span> <DatePicker selected={startDate} onChange={(date) => userChange(date, endDate)}/></div>
            <div><span className="mr-s">to</span> <DatePicker selected={endDate} onChange={(date) => userChange(startDate, date)} /></div>
        </div>
    )
}

export default Filter
 

