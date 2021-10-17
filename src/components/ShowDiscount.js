import React from "react";

const ShowDiscount = ({discount,price}) => {
    
    return (
        (discount!==0) &&
        <i>
        <div className="tableOutput">
                <div className="quantity"></div>
                <div className="productName" >OFFER: {Math.floor((discount) * 100)} % discount applied!</div>
                <div className="unitPrice" > </div>
                <div className="sum" style={{color:"red"}} >{price.toFixed(2)}</div>
        </div>
        </i>
    )
}

export default ShowDiscount