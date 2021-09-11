
import React, {useState} from 'react';
import './css/app.scss';
import EventList from './components/EventList';
import Header from './components/Header';
import { useQuery, gql } from "@apollo/client";



const GET_EVENT_QUERY = gql`
   query GetEvents($dateFrom: String, $dateTo: String)
    {
      events (dateFrom:$dateFrom, dateTo:$dateTo) {
        id
        title
        date
        startTime
        spotifyUrl
        supportingActs
      }
    }
`;


function App() {

  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [endDate, setEndDate] = useState(new Date("2022-12-31"));


  const dateToString = (date) => {
    let year = date.getFullYear();
  
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return year + '-' + month + '-' + day + 'T00:00:00';
  }
  

  const { data, loading, error } = useQuery(GET_EVENT_QUERY, {
    variables: { dateFrom: dateToString(startDate), dateTo: dateToString(endDate)}
   });


  const onFilterChange = (fromDate, toDate) => {
    setStartDate(fromDate);
    setEndDate(toDate);
  }

  return (
    
    <>
        <div className="app">
            <Header userChange={onFilterChange}
                    startDate={startDate}
                    endDate={endDate}
            />      
    
            {loading && !data && 
              <div className="center">
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>    
              </div>
            }
      
            {error && <div className="error-message center blinking"><p> Oops! something went wrong!</p></div>}  

            {data && data.events.length === 0 &&
              <div className="warrning-message center white-text">Sorry, No event during these dates!</div>
            }

            {data && data.events.length > 0 &&
              < EventList events={data.events}/>  
            }           
        </div>
    
        <footer><span className="dot"></span></footer>

    </>    
  );
}

export default App;
