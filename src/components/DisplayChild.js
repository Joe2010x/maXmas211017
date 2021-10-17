import React , {useEffect, useState} from "react"
import axios from "axios"
//import icon from "./image/child3.jpg"
import DisplayProductList from "./DisplayProductList.js"

const DisplayChild = ({child,onUpdate}) => {
    //const [product,setProduct] = useState()
    //console.log(child)
    //console.log('child id is ',child.id)
    return (

        <div className="childDisplay">
            <div className="childIcon">
                <img className="childDisplayImage" src ={`/image/child${child.id}.jpg`} />
                <p>Child {child.id}</p>
                {/* This is what the child has ordered! */}
            </div>
                <DisplayProductList    
                    productList ={child.products}  
                    upDateProduct={(pid,qu) => {onUpdate(child.id,pid,qu)}}       />
            
         
        </div>
    )
}

export default DisplayChild