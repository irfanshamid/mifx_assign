import React, { useState } from "react";

const Carousel = ({ imgsData }) => {
  const [active, setActive] = useState(0);

  const handleChange = (index) => {
    setActive(index);
  };

  return (
    <>
      {imgsData ? (
        <div className="carausel">
          <div className="tumb text-center">
            <img
              src={imgsData[active]}
              alt="imgs_product"
              className="mb-3 tumb-banner"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://www.ipos4mobile.com/wp-content/uploads/woocommerce-placeholder.png";
              }}
            />

            <div className="tumb-counter">
              {active + 1} / {imgsData.length}
            </div>
          </div>

          <div className="tumb-list">
            <div className="row justify-content-center">
              {imgsData.map((img, idx) => {
                return (
                  <div className="col-2 text-center tumb-item" key={idx}>
                    <img
                      onClick={() => handleChange(idx)}
                      src={img}
                      alt="imgs_product"
                      className={
                        active === idx
                          ? "bordered-active tumb-img"
                          : "bordered tumb-img"
                      }
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src =
                          "https://www.ipos4mobile.com/wp-content/uploads/woocommerce-placeholder.png";
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Carousel;
