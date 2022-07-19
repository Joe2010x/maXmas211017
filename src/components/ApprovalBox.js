import React,{useState} from "react"
import Notification from "./Notification.js"


const ApprovalBox =({quan,upDateQuantity}) => {
    const [quantity, setQuantity] =useState(quan)
    const [errorMessage,setErrorMessage] =useState ([null,{}])

    const handleDecrease =()=> {
        if (quantity===0) {
            setErrorMessage(["The minimum value of quanlity is 0.",{color:"red"}])
            setTimeout(()=>{
                setErrorMessage([null,{}])
            },5000)
        } else {
            setQuantity (quantity-1)
        }
             
    }  
    
    const handleIncrease =()=> {
        if (quantity===quan) {
            setErrorMessage(["The maximum value of quanlity is "+quan,{color:"red"}])
            setTimeout(()=>{
                setErrorMessage([null,{}])
            },5000)
        } else {
            setQuantity (quantity+1)
        }
             
    }

    const handleDiscard =() => {
        //set quantity to zero then leave the room 
        setQuantity (0)
    }

    const handleApproval =() =>{
        //update the user Account
        upDateQuantity(quantity)

    }

    return (
    
    <div className="approvalBox">
    <Notification message ={errorMessage} />
    <button className="btn-discard" onClick={handleDiscard} >Discard</button>
    <button className="btn-approval" onClick={handleApproval} >Approval</button>

        <div className="quantity-control">
            <button className="btn-decrease" onClick={handleDecrease} >-</button>
            <input className="input-quantity" value={quantity}/>
            <button className="btn-increase" onClick={handleIncrease} >+</button>
        </div>
        </div>
        )
}


export default ApprovalBox
