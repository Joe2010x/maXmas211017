import React,{useEffect,useState} from "react"
import axios from "axios"
import ShowDiscount from "./ShowDiscount.js"

const UnitSum =({proId,quantity}) =>{
    const [productList,setProductList] =useState ([])
    //const [discount,setDiscount] = useState(0)
    //const [showDiscount,setShowDiscount ] =useState(false)
   // console.log(proId,quantity)
    let discount =0;
    //let productList =[]
    if (quantity === 2) {
        discount =0.2;
        //setDiscount (0.2);
        //setShowDiscount(true)
    } else if (quantity >2) {
        //setDiscount (0.3);
        discount =0.3;
        //setShowDiscount(true)
    }

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${proId}`)
            .then (res => {
           // console.log(res.data)
            
            setProductList (res.data)
               })

},[])


    return (
        <div>
            {(productList.length!==0) &&
            <div>
            <div className="tableOutput">
                <div className="quantity">{quantity}</div>
                <div className="productName" >{productList.title}</div>
                <div className="unitPrice" > {productList.price}</div>
                <div className="sum" >{productList.price * quantity}</div>
            
            </div>
           <ShowDiscount discount ={discount} price ={productList.price * quantity*discount*(-1)} />
           </div>
           }
        </div>

    )
}


export default UnitSum