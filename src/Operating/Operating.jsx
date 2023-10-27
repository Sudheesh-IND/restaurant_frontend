import React, { useState } from 'react'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
  

function Operating({operating}) {
    console.log(operating)
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
  return (
    <div>
              <MDBBtn onClick={toggleShow}>View working hours</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog >
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Working Hours</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <p>Sunday: {operating.Sunday}</p>
            <p>Monday: {operating.Monday}</p>
            <p>Tuesday: {operating.Tuesday}</p>
            <p>Wednesday: {operating.Wednesday}</p>
            <p>Thursday: {operating.Thursday}</p>
            <p>Friday: {operating.Friday}</p>
            <p>Saturday: {operating.Saturday}</p>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='dark' onClick={toggleShow}>
                Close
              </MDBBtn>
             
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default Operating