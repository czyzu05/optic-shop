import React, { useState, useEffect } from "react";
import Product from "../components/Product";

const ProductsList = ({ productsTerm }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [productsTerm]);

  const getProducts = async () => {
    const request = await fetch(
      `https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&q=${productsTerm}&sizeSchema=US&offset=0&categoryId=4209&limit=5&store=US`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "asos2.p.rapidapi.com",
          "x-rapidapi-key":
            "326e8e7414mshd51a15891865252p1030ffjsnf86624255eb1",
        },
      }
    );
    const response = await request.json();
    setProducts(response.products);
  };
  console.log(products);
  const productsList = products.map((product) => <Product {...product} />);

  return <div>{productsList}</div>;
};

export default ProductsList;
