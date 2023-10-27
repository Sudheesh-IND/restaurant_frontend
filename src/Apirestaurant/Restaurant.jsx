import React, { useEffect, useState } from 'react'
import './Reastaurant.css'
//importing axios
import axios from 'axios'
//import row and col
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {base_url} from '../base_url.js'

import RestCard from '../RestCard/RestCard'

function Restaurant() {

 

  // const base_url='http://localhost:3001'  //base url of the json server
  const [restData,setRestData]=useState([]) //create a state for holding data

  const fetchData=async()=>{
    //destructuring and calling api
    const {data}=await axios.get(`${base_url}/restaurants`) //axios instead of http method
  
  
    //console.log(response.data)
    setRestData(data)
  
  }
  // console.log(restData)

  useEffect(()=>{
    fetchData()
  },[])
  return (
   <div>
    <Row>
       {
        restData.map(item=>(
          <Col sm={12} md={6} lg={3}>
          <RestCard restaurants={item}/>
          </Col>
        ))
       }
    </Row>
   </div>
  )
}

export default Restaurant