import { useEffect, useState } from "react";
import Product from "../components/Product";
import { dataProducts } from "../config/data";

function Home() {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    setGetData(dataProducts);
  }, [setGetData]);

  return (
    <div className="container">
      <div className="row">
        <Product dataProducts={getData} />
      </div>
    </div>
  );
}

export default Home;
