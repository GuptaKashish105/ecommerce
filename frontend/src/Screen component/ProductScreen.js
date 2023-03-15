import React, { useState } from "react";
import data from "../data";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { detailsProduct } from "../actions/productAction";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  // access the list of product from the redux state
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error } = productDetails;
  // const dispatch = useDispatch();

  let { id } = useParams(1);
  const Product =
    data.products.find((x) => parseInt(x.id) === parseInt(id)) || {};
  detailsProduct(Product);
  console.log(Product);

  // console.log(Product.count);

  const history = useNavigate();

  const handleAddToCart = () => {
    history("/cart/" + id + "?qty= " + qty);
  };

  return loading ? (
    console.log("Page is loading, please wait...")
  ) : error ? (
    console.log("Opps...Error")
  ) : (
    <div>
      <div className="back-to-result">
        <Link to="/"> ⬅️ Back to home screen</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={Product.image} alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{Product.name}</h4>
            </li>
            <li>
              {Product.rating} Stars ({Product.numReviews} Reviews)
            </li>
            <li>
              Price: <b>$ {Product.price}</b>
            </li>
            <li>
              Description
              <div>{Product.description}</div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: {Product.price}</li>
            <li>Status: {Product.count > 0 ? "In stock" : "Unavailable"}</li>
            <li>
              Qty:
              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                {[...Array(Product.count).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </li>

            <li>
              {Product.count > 0 && (
                <button onClick={handleAddToCart} className="btn">
                  Add to cart
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
