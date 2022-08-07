import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React from "react"

const ProductSkeleton = () => {
    return ( 
         <div>
            <Skeleton height={20} width={400}/> 
            <Skeleton height={20} count={2}/> 
            <Skeleton  count={28} /> 
         </div>
     );
}
 
export default ProductSkeleton;