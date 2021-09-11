import React, {useState} from 'react';
import '../css/eventlist.scss';
import {FaRegCalendarAlt, FaRegClock, FaVolumeUp,} from "react-icons/fa";
import EventModal from './EventModal';


const EventList = ({events}) => {

    const [modalShow, setModalShow] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const sortedEvents = events.concat().sort((e1, e2) => new Date(e1.date) - new Date(e2.date));

    return (

        <>        
            <div className='event-container'>
                {sortedEvents.map((sortedEvent)=> {

                    return (
                        <div key={sortedEvent.id} className="event">

                            <div className="event-title">{sortedEvent.title}</div>
                            
                            <div className="event-date">
                                <FaRegCalendarAlt  />
                                <span className="icon-margin"></span>
                                <p> 
                                    {new Intl.DateTimeFormat("en-GB", {
                                    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
                                    }).format(new Date(sortedEvent.date))}
                                </p>
                            </div>

                            <div className="event-time">
                                <FaRegClock />
                                <span className="icon-margin"></span>
                                Door Open:&nbsp;
                                <p>
                                    {new Intl.DateTimeFormat("en-GB", {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    }).format(new Date(sortedEvent.startTime))}
                                </p>
                            </div>

                            {sortedEvent.supportingActs.length > 0 &&
                                <div className="event-support">
                                    Supporting {sortedEvent.supportingActs.length === 1 ? "Artist" : "Artists"}: &nbsp;
                                    {sortedEvent.supportingActs.map(
                                         (supportingAct, index)=><span>{supportingAct}{index < sortedEvent.supportingActs.length - 1 ? ", " : ""}</span>
                                        )      
                                    }
                                </div>
                            }

                            {sortedEvent.supportingActs.length === 0 &&
                                <div className="event-support">
                                    No Supporting Artist
                                </div>
                            }


                            <div className="btn-holder">
                                <button className="btn btn-white mr-xs" onClick={() => {
                                    setSelectedEvent(sortedEvent);
                                    setModalShow(true);
                                }}>
                                    Listen  <span className="icon-margin"></span>
                                    <FaVolumeUp />
                                </button>

                                <button className="btn btn-grey">Get Tickets</button>                    
                            </div>
                            
                        </div>
                    )                
                }   
                )}
            </div>

            <EventModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
                event={selectedEvent}
            />
        
         </>
   )
}

export default EventList;
