import React from 'react';
import Modal from 'react-bootstrap/Modal';
import '../css/modalbox.scss';


function EventModal(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="event-modal" 
      >

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.event && <span>{props.event.title}</span>}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>

          {/* {props.event && props.event.artists.length > 0 && 
                                <h4 className="body-item-1">
                                  &#47;&#47; {props.event.artists.map((artist)=><span>{artist} &#47;&#47; </span>)}
                                </h4>                                
                                } */}
       
          {props.event && <iframe  title={props.event.id} src={props.event.spotifyUrl} width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>}



          {/* {props.event  && props.event.venue && 
                                <h5 className= "body-item-2">{props.event.venue} &#47;&#47; {`
                                  ${new Intl.DateTimeFormat("en-GB", {
                                          hour: 'numeric',
                                          minute: 'numeric',
                                          }).format(new Date(props.event.startTime))}
                                  - 
                                  ${new Intl.DateTimeFormat("en-GB", {
                                          hour: 'numeric',
                                          minute: 'numeric',
                                          }).format(new Date(props.event.endTime))}
                                `}
                                </h5>
                              } */}

          {/* {props.event && 
                          <h5 className= "body-item-3">
                              {new Intl.DateTimeFormat("en-GB", {
                                    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
                                    }).format(new Date(props.event.date))}
                              
                          </h5>
          }
          
          {props.event && props.event.promoters.length > 0 && <h6 className= "body-item-4">promoted by &#47;&#47; {props.event.promoters.map((promoter)=><span>{promoter} &#47;&#47; </span>)}</h6>} */}

        </Modal.Body>

        <Modal.Footer>
          <div className="dot"></div>
        </Modal.Footer>
      </Modal>
    );
  }
  

export default EventModal;
