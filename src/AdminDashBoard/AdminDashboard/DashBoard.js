import React,{useState,useEffect} from 'react'
import { BsCartCheckFill } from "react-icons/bs";
import { IconContext } from "react-icons";


const Dashboard = () => 
{
  const LMT = 10
  const [reload,setReload] =useState("0"); 
  const SQL = "SELECT * FROM products LIMIT 10"
  const [Products,setProducts] =useState([]);
  const FetchProducts = async () =>
  {
    const requestOptions = {
      method: 'POST',
      Accept:'application/json',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"LMT":`${LMT}`,"sql":`${SQL}`})
    };
    
    try {
    
      const response = await fetch('https://expressapiz.herokuapp.com/products',requestOptions)
      const json = await response.json();
      var dataS = json
      dataS.sort((a,b)=>b.rating-a.rating)
      setProducts(json);   
      setReload(2);      
    } 
    catch (error) 
    {
      console.error(error);
    }
     finally 
     {
         
    } 
   }

useEffect(() =>{
    FetchProducts()
     
  },[]);
  useEffect(() => {

     
   },[reload]);

    return ( <div>
          <div style = {{display:'flex',}}>
                     <div style={OrderBox}>
                  <div style={{marginTop:10,marginRight:30,marginLeft:10}}>
                    <p style={{color:"white",fontSize:20}}>2445</p>  
                    <p>Total Orders</p>                  
                </div>
                <div style={{marginTop:30,marginLeft:70}}>       
                <IconContext.Provider value={{ color: "black", size:44 }}>           
                   <BsCartCheckFill />      
                </IconContext.Provider>  
              </div>
            </div>      
            <div style={UsersBox}>
                  <div style={{marginTop:10,marginRight:30,marginLeft:10}}>
                    <p style={{color:"white",fontSize:20}}>445</p>  
                    <p>Users</p>                  
                </div>
           
            </div>   
            <div style={FactoryBox}>
                  <div style={{marginTop:10,marginRight:30,marginLeft:10}}>
                    <p style={{color:"white",fontSize:20}}>5</p>  
                    <p>ManuFacturers</p>                  
                </div>
              
            </div>   
            <div style={ProductBox}>
                  <div style={{marginTop:10,marginRight:30,marginLeft:10}}>
                    <p style={{color:"white",fontSize:20}}>{Products.length}</p>  
                    <p>Products</p>                  
                </div>
           
            </div>  

          </div>
          <img width = {1280} height ={280} src="https://c0.wallpaperflare.com/preview/347/508/926/analysis-analytics-analyzing-business.jpg" alt="Bloomzon" />
          </div>
     );
}

const OrderBox = { 
 height:"120px",
 width:"250px",
background:`linear-gradient(90deg,pink,blue)`,
backgroundColor:'orange ',
display:'flex',
borderRadius:"10px",
margin:10
}
const UsersBox = { 
  height:"120px",
  width:"250px",
 background:`linear-gradient(90deg,purple,orange)`,
 backgroundColor:'orange ',
 display:'flex',
 borderRadius:"10px",
 margin:10
 }
 const FactoryBox = { 
  height:"120px",
  width:"250px",
 background:`linear-gradient(90deg,red,pink)`,
 backgroundColor:'orange ',
 display:'flex',
 borderRadius:"10px",
 margin:10
 }
 const ProductBox = { 
  height:"120px",
  width:"250px",
 background:`linear-gradient(90deg,purple,grey)`,
 backgroundColor:'orange ',
 display:'flex',
 borderRadius:"10px",
 margin:10
 }
export default Dashboard;