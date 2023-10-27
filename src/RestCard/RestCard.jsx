import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    
    MDBRipple
  } from 'mdb-react-ui-kit'
import './RestCard.css'
import { Link } from 'react-router-dom'


function RestCard({restaurants}) {
    console.log(restaurants)
  return (
    <div>

        <Link to={`view/${restaurants.id}`} style={{textDecoration:'none'}}>

        <MDBCard className='rest-card' style={{cursor:'pointer',height:'600px',margin:'10px'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage className='img' src={restaurants.photograph} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='text' >{restaurants.name}</MDBCardTitle>
        <MDBCardText className='text'>
            Address: {restaurants.address} <br />
            Cusine Type: {restaurants.cuisine_type}
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
        </Link>
        
    </div>
  )
}

export default RestCard