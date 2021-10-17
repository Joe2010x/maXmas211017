import React from "react"
import DisplayProduct from "./DisplayProduct.js"

const DisplayProductList =({productList,upDateProduct}) => {
    //const proId =child.products[0].productId
    //let product = null
    //console.log("this is productList:", productList)
    //console.log(productList[0].productId,productList[0].quantity)
   

    return (
        <div className="productList">

            {productList.map(
                (product)=>
                <DisplayProduct key={product.productId}
                    proId ={product.productId} 
                    quan ={product.quantity}   
                    upDateProduct={(proId,qu)=>upDateProduct(proId,qu)}
                      />)}
        </div>
        )
}



export default DisplayProductList