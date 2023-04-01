import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { listProduct } from "../actions/productAction";
import axios from "axios";
import { useSelector } from "react-redux";

export default function HomeScreen() {

  // to set the data from the frontend and use it in backend here we use useState hook
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const productList = useSelector(state => state.productList);
  const { loading, err } = productList;
  // const dispatch = useDispatch();

  // to fetch data from server we use useEffect hook
  // and to fetch data from web api we use Axios library
  useEffect(() => {
    // dispatch(listProduct());
    // defining async function to fetch the data

    const fetchData = async () => {

      // '{data}' but not 'data' because we have to fetch data from web api in the form of key value pair

      try {
        const response = await axios.get("http://localhost:1600/api/products/");
        setError(null);
        setProducts(response.data);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();

  },[products])

  if (error) {
    return console.log("Page is loading ")
  }

  return (
    loading? (<h1>Page is loading, please wait...</h1>) :
    err? (<div>Opps...Error</div>) : (

    <ul className="products">
      
      {/* inserting JSX in the form of dynamic coding */}
      {products.map((product) => (
        <li key={product.id}>
          <div className="product">
            <img src={product.image} alt="product-img" />
            <div className="product-name">
              <Link to={"/product/" + product.id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="price">Rs. {product.price}</div>
            <div className="product-ratings">
              {product.rating} stars ({product.numReviews} reviews)
            </div>
            <div>
              <Link to={"/product/" + product.id}>
              <button type="submit" className="buttonn primary">
                Add to cart
              </button>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
    )
  );
}
