import Button from "./Button";
import "./Product.css"
import formatPrice from "../utils/format-price";


export default function Product({ title, price, category, description, image, addToCart }) {
    return (
        <div className="product">
            <div className="product-img-c">
                <img src={image} alt="" />
            </div>
            <div className="product-details-c">
                <h2 className="product-title">
                    {title}
                </h2>
                <p className="product-price">
                    {formatPrice(price)}
                </p>
            </div>
            <Button text={"Add to cart"} name={"buy-btn"} handleClick={addToCart} />
        </div>
    );
}