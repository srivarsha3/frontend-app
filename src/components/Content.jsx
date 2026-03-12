import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
import "./Content.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Content() {

  const [products, setProducts] = useState([]);

  const { cart, setCart } = useContext(AppContext);

  const fetchProducts = async () => {
    try {
      const url = `${API_URL}/store`;
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {

    const found = cart.find((item) => item._id === product._id);

    if (!found) {
      const newProduct = { ...product, quantity: 1 };
      setCart([...cart, newProduct]);
    }
  };

  return (
    <div>

      <div className="row">

        {products.length === 0 ? (
          <h2>Loading products...</h2>
        ) : (
          products.map((product) => (
            <div className="box" key={product._id}>

              <img
                src={`${API_URL}/${product.imageUrl}`}
                width="300"
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p>{product.desc}</p>

              <h4>{product.price}</h4>

              <p>
                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </p>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Content;