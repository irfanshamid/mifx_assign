import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import { dataProducts } from "../config/data";

function Detail() {
  const [getData, setGetData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    let data = dataProducts.find((item) => item.id === id);
    setGetData(data);
  }, [setGetData]);

  return (
    <div className="container">
      <div className="row">
        <ProductDetail dataProducts={getData} />
      </div>
    </div>
  );
}

export default Detail;
