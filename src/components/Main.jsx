import { useEffect, useState } from "react";
import "./Main.css"
import ProductsList from "./ProductsList";
import axios from "axios";

export default function Main({ addToCart }) {
    const [products, setProducts] = useState([]);

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
        </main>
    );
}