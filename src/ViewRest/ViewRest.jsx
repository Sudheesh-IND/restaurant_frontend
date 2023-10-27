import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {base_url} from '../base_url'
import axios from 'axios'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Image from 'react-bootstrap/esm/Image'
import Operating from '../Operating/Operating'
import Reviews from '../Reviews/Reviews'

function ViewRest() {

  //create a state for holding restaurant details
  const[restDetails,setRestDetails]=useState([])

  
  //take the params from the top link
  // const pathParams=useParams() //destructuring is done for this
  // console.log(pathParams.id)
  const {id}=useParams()  //destructuring is done to take the id
  console.log(id)
  //make an api call to ftch particular restaurant
  const fetchData=async()=>{
  const {data}=await axios.get(`${base_url}/restaurants/${id}`) //do destructuring to take the data
  
  setRestDetails(data)
  
 
}
console.log(restDetails)
//use effect is a hook used to start the function
useEffect(()=>{
  fetchData()
},[])

  return (
    <div className='main'>
         {
          restDetails?
          <Row>
          {
            <Col>
             {/* setting up image */}
              <Image className='text-center' style={{width:'300px',height:'300px',margin:'40px',marginLeft:'200px',marginTop:'100px'}} src={restDetails.photograph}/>
            </Col>
           
          }
          {
            <Col>
            <h1 style={{marginTop:'80px'}}>{restDetails.name}</h1> 
            <p>{restDetails.address}</p> <br />
            <h4>Cuisine Type</h4>
            <p>{restDetails.cuisine_type}</p> <br />
            <h4>Neighbourhood</h4>
            <p>{restDetails.neighborhood}</p>
            
           
           <Operating operating={restDetails.operating_hours} />
            </Col>
          }
          </Row> : <p>No Data</p>
         
         }
         
        <Row style={{padding:'50px'}}>
            
           
        <Reviews review={restDetails.reviews}/>
        </Row>
         
    </div>
  )
}

export default ViewRest