import { useEffect, useState } from "react";
import "./Main.css"
import ProductsList from "./ProductsList";
import axios from "axios";

export default function Main({ addToCart }) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    function toggleLoading(isLoading) {
        const loadingContainer = document.querySelector(".loading-c");
        loadingContainer.style.display = isLoading ? "flex" : "none";
    }

    useEffect(() => {
        toggleLoading(true);
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                setProducts([...response.data])
            }).catch(e => {
                console.log("Something went wrong!");
                setError(true);
            }).finally(() => {
                toggleLoading(false);
            });
    }, []);

    return (
        <main>
            <div className="products-c">
                <h1>All Products</h1>
                <ProductsList products={products} addToCart={addToCart} />
                <div className="loading-c"></div>
            </div>
            {error && <div className="error-c">
                <p>Something went wrong! Please refresh the page or try again later.</p>
            </div>}
        </main>
    );
}