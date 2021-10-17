import React,{useEffect, useState} from "react"
import axios from "axios"
import UnitSum from "./UnitSum.js"

const CheckOut =({cartCheckOutList,userName}) => {
    //console.log("this is cartCheckOutList, ",cartCheckOutList)
    const [totalPrice,setTotalPrice] =useState(0);
    let productList = [];

    var total = 0;
    
    const discountApplied = (product) => {
        if (product.quantity < 2 ) {
            return 1
        } else if (product.quantity === 2 ) {
            return 1 - 0.2
        } else if (product.quantity > 2 ) {
            return 1 - 0.3
        }
    } 

    const upDateTotal=(product,price) =>{
        //console.log("this is total before updated, ", total)
        const productSum = product.quantity*price* discountApplied(product)
        //console.log("this is product Sum, after discount ", productSum)
        total = total + productSum;
        //console.log("this is total after updated, ", total)
    }

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/")
            .then(res=>{
                productList =res.data
               // console.log("this is productList in checkout: ",productList)

                cartCheckOutList.forEach (product=>{
                   // console.log("this is the each product from the product List ", product)
                    let productWithPrice = []
                    productList.forEach(element=> 
                        //element.Id === product.productId
                        {
                        //console.log("this is element in product List ",element)    
                        //console.log( "element.id is ", element.id,"product.productId is ", product.productId)
                        if (element.id === product.productId) {
                            productWithPrice =  element
                          //  console.log("find one, the element is ,",productWithPrice)
                        }           
                    
                    }
                    )
                    //console.log("this is the product with price ", productWithPrice)
                    const price = productWithPrice.price;
                    //console.log("Unit price of each item is ",price)
            
                    upDateTotal (product,price);
                }) 
                //console.log("this is total before final rendering", total)
                setTotalPrice (total)

            })
    },[])

  

    return (
        <div>
        <h3 className="greeting" >Hi {userName}, please check below for your product list. </h3>
        <div className="wholeTable" >
            
            <strong>
            <div className="tableOutput">
                    <div className="quantity">
                        Quantity                      
                    </div>
                    <div className="productName">
                        Product Name
                    </div>
                    <div className="unitPrice">
                        Unit Price 
                    </div>
                    <div className="sum">
                        Sum
                    </div>
                    </div>
                    </strong>
                    {cartCheckOutList.map(product=>
                            <UnitSum key={product.productId}
                                proId = {product.productId} 
                                quantity ={product.quantity}  />
                    )}
                   
            {/* {cartCheckOutList.map(product=>{})} */}


        </div>
        <strong>
        <p className="finalPrice" >Total price is {totalPrice.toFixed(2)} €</p>
        </strong>
        <hr className="infoBoxLine" />  
        <button className="btn-pay" >Pay</button>
        </div>
    )

}

export default CheckOut