import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Product = ({ dataProducts }) => {
  const navigate = useNavigate();

  const handleClick = (index) => {
    console.log(index);
    // Router.push("/detail");
    navigate(`/detail/${index}`);
  };

  return (
    <div className="product-list">
      <h2> All Products</h2>

      <div className="row">
        {dataProducts.map((item, index) => (
          <div className="col-md-4 my-2" key={index}>
            <div className="card" role="button">
              <img
                onClick={() => handleClick(item.id)}
                src={item.image}
                alt="product"
                className="card-img-top img-fluid"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://www.ipos4mobile.com/wp-content/uploads/woocommerce-placeholder.png";
                }}
              />
              <div className="card-body">
                <h5>{item.name}</h5>
                <h5>{item.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
