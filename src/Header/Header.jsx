import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
         <MDBNavbar light bgColor='black'>
        <MDBContainer fluid>
          <MDBNavbarBrand color='white' href='#'>
            <img
              src='https://th.bing.com/th?id=OIP.zg52j4EMI37oUBGXzuORzAHaHv&w=244&h=255&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
              height='30'
              alt=''
              loading='lazy'
            />
            <h4 className='text-light m-2'> Restooo</h4>
           
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header