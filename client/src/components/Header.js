import React from 'react';
import Filter from './Filter';
import '../css/header.scss';

const Header = ({userChange, startDate, endDate}) => {


    return (
        <div className='header'>
            <h1 className="title">upcoming events in multiverse</h1>
            <Filter userChange={userChange}
                    startDate={startDate}
                    endDate={endDate}
            />  
        </div>
    )            
       
}

export default Header;
