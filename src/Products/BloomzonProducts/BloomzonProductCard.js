import React from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { getOneImage } from "../../Controller/ImageController/imageProcessor";

const BloomzonProductCard=({data})=> 
{
    
    return (
      <div>
          <Table striped bordered hover>
    <thead>
      <tr>
    <th>#</th>
    <th> Name</th>
    <th> Added By</th>
    <th>Base Price</th>
    <th>Rating</th>
    <th>Actions</th>
    </tr>
   </thead>
   <tbody>
         {data.map((data)=><tr style = {{margin:10,padding:10,}}>
          <td>{data.id}</td>
          <td><div style = {{display:"flex",width:100}}><img width = {80} height ={80} src={getOneImage(data.images)} alt="Bloomzon" />{data.title}</div></td>
          <td>{data.sellerId}</td>
          <td>{data.price}</td>      
          <td>{data.rating}</td>            
          <td><Button  variant="danger">DELETE</Button></td> 
          </tr>)}  
    </tbody>             
  </Table>
      </div>
    );
  }

  export default BloomzonProductCard;