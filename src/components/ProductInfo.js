

const ProductInfo =({product})=> {


    return (
        <div>
        <h3>Product Name: </h3>
                <p>{product.title}</p>
                <img className="productImage" src={product.image} />
                <h3>Description:</h3>
                <p>{product.description}</p>
                <br/>
                <h3>Unit Price:</h3>
                <p>€ {product.price} </p>
                </div>
    )
}

export default ProductInfo