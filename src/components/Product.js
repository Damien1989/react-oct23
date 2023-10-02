import "./../style.css";

function Product({productData}) {
    return (
        <article className="product">
            <h2>{productData.title}</h2>
            <p className="price">{productData.price} euros</p>
            <p>Description : {productData.description}</p>
        </article>
    );
}

export default Product;