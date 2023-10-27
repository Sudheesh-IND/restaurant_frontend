import React, { useState } from 'react'
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';


function Reviews({review}) {
    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);
  return (
    <div>
       
      <MDBBtn onClick={toggleShow}>View Reviews</MDBBtn>
      <MDBCollapse show={showShow} className='mt-4'>
      {
            review.map((item)=>(
            <div>
                <h6>{item.name}</h6>
                <p>Rating: {item.rating}</p>
                <p>{item.comments}</p>
            </div>
            ))
          }
      </MDBCollapse>
    </div>
  )
}

export default Reviews