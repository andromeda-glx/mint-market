import Product from "./Product";
import "./ProductsList.css";

export default function ProductsList({ products }) {
    return (
        <ul className="products">
            {products.map(product => (
                <Product
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    description={product.description}
                    image={product.image}
                />))}
        </ul>
    );
}