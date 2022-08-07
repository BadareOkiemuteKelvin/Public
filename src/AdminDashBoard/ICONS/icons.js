import React from 'react'
import { BsCartCheckFill } from "react-icons/bs";
import { FaUsers,FaGifts } from "react-icons/fa";
import { FcFactory } from "react-icons/fc";
import { RiDashboardLine } from "react-icons/ri";
import { IconContext } from "react-icons";

export const ProductIcons = () => {
    return (
   
                    <div>
                    <FaGifts /> 
                    </div>
           
    )
 
 }

export const DashboardIcon = ({size,color}) => {
    return (
        
                    <RiDashboardLine />
    )
 
 }

export const FactoryIcon = ({size,color}) => {
    return (
     <div>
          <IconContext.Provider value={{ color: color, size:size }}>
                    <div>
                    <FcFactory /> 
                    </div>
             </IconContext.Provider>   
     </div>
    )
 
 }


 export const CartCheckIcon = ({size,color}) => {
   return (
    <div>
         <IconContext.Provider value={{ color: color, size:size }}>
                   <div>
                   <BsCartCheckFill /> 
                   </div>
            </IconContext.Provider>   
    </div>
   )

}

export const UsersIcon = ({size,color}) => {
    return (
     <div>
          <IconContext.Provider value={{ color: color, size:size }}>
                    <div>
                     <FaUsers /> 
                    </div>
             </IconContext.Provider>   
     </div>
    )
 
 }

