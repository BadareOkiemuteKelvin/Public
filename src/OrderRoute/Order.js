import React from "react"


const Order = ()=>
{
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);

   return (
    <div>
        <p>Orders Routes{initialValue} </p>
    </div>
   )
}
export default Order;