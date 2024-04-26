import React, { useEffect, useState } from "react";
import "./items.css";
import ProductCard from "./ProductCard";
import { useGlobalContext } from "../../context";
import notFound from "../../Images/notfound.webp";
import loading from "../../Images/loading.svg";

// const url = "./data.json";

const Item = () => {
const url="http://localhost:8000/api/v1/items";

  const [data, setData] = useState(null);
  const { searchData } = useGlobalContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const items = await response.json();
        setData(items.data.items);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div className="loading"><img src={loading} alt="loading" /></div>;
  }

  if (!searchData || searchData === "") {
    return (
      <div className="content">
        {data.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            seller={product.seller}
            price={product.price}
            description={product.description}
            _id={product._id}
            itemname={product.itemname}
            lpuid={product.lpuid}
            whatsapp={product.whatsapp}
          />
        ))}
      </div>
    );
  } else {
    const filteredData = data.filter((product) =>
      product.itemname.toLowerCase().includes(searchData.toLowerCase())
    );

    if (filteredData.length === 0) {
      return <div className="noresults"><img src={notFound} alt="notfound" className="notfound" /></div>;
    }

    return (
      <div className="content">
        {filteredData.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            seller={product.seller}
            price={product.price}
            description={product.description}
            _id={product._id}
            itemname={product.itemname}
            lpuid={product.lpuid}
            whatsapp={product.whatsapp}
          />
        ))}
      </div>
    );
  }
};

export default Item;
