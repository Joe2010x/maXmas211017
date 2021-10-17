import React, { useEffect, useState } from "react"
import axios from "axios"
import DisplayChild from "./DisplayChild.js"
import Cart from "./cart_icon.png"
import CheckOut from "./CheckOut.js"

const Selection = (props) => {
    const [cart,setCart] = useState()
    const [checkOut,setCheckOut] = useState()
    //console.log(props.user)
    const userId = props.user[0].id
    //console.log("user id is : ",userId)

    //get user cart
    useEffect(()=>{
        axios.get ('https://fakestoreapi.com/carts/user/'+userId)
        .then (res => 
           //setCart (res.data)
            //const numBarn = cart.length
           // console.log(res.data)
            res.data
        )
        .then (json => {
           // console.log(json)
            setCart(json)
        })
    },[])
    
    const handleUpdate = (childId,productId,productQuality) =>{
        //console.log(childId,productId,productQuality)
        //console.log("this is current cart before updated quantity: ",cart)
        setCart (cart.map((aChildCart)=>{
            (aChildCart.id ===childId) && aChildCart.products.map((product=>{
                (product.productId === productId) && (product.quantity =productQuality)
                return product
            }))

            return aChildCart
        }))
    }

    const handleDeclineAll = () =>{

        setCart (cart.map((aChildCart)=>{
            //console.log("this is a ChildCart ",aChildCart)
            aChildCart.products.map((product)=>{
                product.quantity =0
                //console.log("this is a product under childCart ",product)
                return product
            })
            return aChildCart

        
        }))
    }

    const handleCheckOut =()=> {
        let checkOutList = []
        //console.log("this is the cart before checkout ",cart)

        cart.forEach(aChildCart=>{
                aChildCart.products.forEach((product)=>{
                    //console.log("found one product is ",product)
                   let foundIdentical = checkOutList.find(element => element.productId ===product.productId)
                   if (foundIdentical) {
                       //update checkoutList
                       checkOutList.find(element => element.productId ===product.productId).quantity=checkOutList.find(element => element.productId ===product.productId).quantity+product.quantity
                   } else {
                       checkOutList=checkOutList.concat(product)
                   }
                })
        })
        setCheckOut (checkOutList)
       // console.log("checkout list is ; ",checkOutList)

    }

    //display carts

    return (
        (checkOut)?

         <CheckOut cartCheckOutList = {checkOut} userName = {props.user[0].name.firstname} />

         :
    <div className = "selections">
        <h3>
            {`Hi ${props.user[0].name.firstname}, welcome come back to maXmas!`}        
            </h3>
            { (cart)
                ?  
                //<p>Cart Loading...1</p>
                cart.map((aChild)=> <DisplayChild 
                    key={aChild.id} 
                    child ={aChild} 
                    onUpdate={(childId,productId,productQuality)=>{handleUpdate (childId,productId,productQuality)}} /> )
                : <p>Cart Loading...</p>
                }

            
            <p>OFFER: buy 2 identical products to have 20% discount for that product! 
                  
            </p><p>OFFER: buy 3 identical products to have 30% discount for that product! 
                  
                  </p>

                  <br/>
                  <p>Please click cart below to complete check out!

            </p>
            <div className="btn-container">
            <button className="btn-cart" onClick ={handleCheckOut} ><img className="btn-cart-img" src={Cart} /></button>
            <button className ="btn-D-all" onClick={handleDeclineAll} >Decline All</button>
            <button className="btn-A-all" onClick ={handleCheckOut}>Approval All</button>
            </div>

        
    </div>
    )
}

export default Selection