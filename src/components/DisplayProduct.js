import React,{useEffect, useState} from "react"
import axios from "axios"
import InfoBox from "./infoBox.js"
      
const DisplayProduct =({proId,quan,upDateProduct}) => {
    //console.log("this is props ",proId,quan)
    // console.log("this is productID: ",productId)
    // console.log("this is quantity: ",quantity)
    const [showInfoBox, setShowInfoBox] =useState(false)

    const [product,setProduct] =useState()
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${proId}`)
            .then (res => {
            //console.log(res.data)
            setProduct (res.data)
    })},[])

    const handleClick =(proId,quan) => {
        // mouse over show info box
        setShowInfoBox (true);
        // <InfoBox proId ={proId} quan={quan}/>

        //also show selection box
    }

    const clickClose =() => {
        setShowInfoBox(!showInfoBox)
        //console.log("close button clicked")
        //console.log("this is the ShowInfoBox", showInfoBox)
    }

    return (
        <div>
        <div className="product" onClick={(proId,quan)=>handleClick(proId,quan)}>
            {/* <p>This is produce page</p> */}

            <p className="quantity">{quan} x</p> 
                {(product!==undefined)?
                <img className="productListImage" src ={product.image} />
                :<p>Loading...</p>}
                </div>
            {showInfoBox && <InfoBox proId ={proId} quan={quan} closePopUp={clickClose} upDateProduct={(proId,qu)=>upDateProduct(proId,qu)}/>                           
            }
        </div>
            )
            
        
}

export default DisplayProduct