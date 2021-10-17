import React ,{useState,useEffect} from "react"
import axios from "axios"
import ProductInfo from "./ProductInfo.js"
import ApprovalBox from "./ApprovalBox.js"

const InfoBox =({proId,quan,closePopUp,upDateProduct}) => {
    const [product,setProduct] =useState()
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${proId}`)
            .then (res => {
            //console.log(res.data)
            setProduct (res.data)
    })},[])
    

    return (
        <div className="infoBox">
            <div className="overlay"></div>
            <div className ="infoBox-content">
                <h2>Product Information Page</h2>
                <br/>
                {(product)
                ?<ProductInfo product={product} />
                : <p>Loading product page...</p>}

                <hr className="infoBoxLine" />           
                    <ApprovalBox quan={quan} upDateQuantity={(qu)=>upDateProduct(proId,qu)}/>

               
                    <hr className="infoBoxLine" />  
            <button className="close-infoBox" onClick={closePopUp} >Close</button>
            </div>
            
        </div>
    )

}

export default InfoBox