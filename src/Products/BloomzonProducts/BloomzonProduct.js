import React,{useState,useEffect} from "react";
import ProductSkeleton from "../Skeletonloading/ProductSkeleton";
import BloomzonProductCard from "./BloomzonProductCard";

const BloomzonProductList =()=> 
{
     
    const LMT = 10
    const SQL = "SELECT * FROM products LIMIT 10"
    const [isLoading, setLoading] = useState(true);
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
        setProducts(dataS);   
        //alert("Updated")
        
      } 
      catch (error) 
      {
        console.error(error);
      }
       finally 
       {
           setLoading(false)
      } 
     }
  
      useEffect(() =>{
      FetchProducts()
       
    },[]);
  
    FetchProducts()
  
  useEffect(() => {

     
}, [Products]);
      
    return (
      <div>
          {isLoading?<ProductSkeleton isLoading={isLoading} />:<BloomzonProductCard data = {Products} />}
      </div>
    );
  }

  export default BloomzonProductList ;