import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
import "./Content.css";

<<<<<<< HEAD
const API_URL = import.meta.env.VITE_API_URL;

function Content() {
  // const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const { user, setUser, cart, setCart } = useContext(AppContext);
  const fetchProducts = async () => {
    const url = `${API_URL}/store`;
    const res = await axios.get(url);
    setProducts(res.data);
  };
=======
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

>>>>>>> f01d12072a1eaf8e1f8f6e2cc3f88c668d4f91e7
  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
<<<<<<< HEAD
    const found = cart.find((item) => item._id === product._id);
    if (!found) {
      product.quantity = 1;
      setCart([...cart,product]);
=======

    const found = cart.find((item) => item._id === product._id);

    if (!found) {
      const newProduct = { ...product, quantity: 1 };
      setCart([...cart, newProduct]);
>>>>>>> f01d12072a1eaf8e1f8f6e2cc3f88c668d4f91e7
    }
  };

  return (
    <div>
<<<<<<< HEAD
      <div className="row">
        {products.map((product) => (
          <div className="box">
            <img src={`${API_URL}/${product.imageUrl}`} width="300px" alt="" />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <h4>{product.price}</h4>
            <p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Content;
=======

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
>>>>>>> f01d12072a1eaf8e1f8f6e2cc3f88c668d4f91e7
