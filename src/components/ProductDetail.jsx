import React from "react";
import Rating from "react-rating";
import Carousel from "./Carausel";

const ProductDetail = ({ dataProducts }) => {
  // console.log(dataProducts);

  return (
    <div className="product-list">
      <h2> Detail Products</h2>

      <div className="card card-body">
        <div className="row">
          <div className="col-md-7">
            <Carousel imgsData={dataProducts.images} />
          </div>
          <div className="col-md-5">
            <div className="border-bottom mb-4 pb-4">
              <h5 className="text-danger">SALE</h5>
              <h3>{dataProducts.name}</h3>

              <div className="d-flex my-2 align-items-center">
                <div className="star">
                  <Rating
                    initialRating={dataProducts.rating}
                    readonly
                    emptySymbol={
                      <img
                        src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png"
                        className="icon rating-img-unfill"
                        alt="icon"
                      />
                    }
                    fullSymbol={
                      <img
                        src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png"
                        className="icon rating-img"
                        alt="icon"
                      />
                    }
                  />
                </div>
                <small>({dataProducts.reviewCount} review) </small>
              </div>

              <h2>{dataProducts.price}</h2>
            </div>

            <div className="row">
              <div className="col-6">
                <button className="btn btn-warning w-100 rounded">
                  Add To Cart
                </button>
              </div>
              <div className="col-6">
                <button className="btn btn-success w-100 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
