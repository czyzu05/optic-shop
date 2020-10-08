// import React, { useState, useEffect } from "react";
// import ArrivalsProduct from "../components/ArrivalsProduct";

// // import glass1 from "../IMG/Layer_516.png";
// // import glass2 from "../IMG/Layer_508.png";
// // import glass3 from "../IMG/Layer_513.png";
// // import glass4 from "../IMG/Layer_514.png";
// // import glass5 from "../IMG/Layer_517.png";
// // import glass6 from "../IMG/Layer_511.png";

import "../styles/Arivals.css";

// // const ArivalsItems = [glass1, glass2, glass3, glass4, glass5, glass6];

// // const Arivals = () => {
// //   return (
// //     <div className="Arivals">
// //       <h4>New Arrivals</h4>
// //       <div className="grid-Arivals">
// //         {ArivalsItems.map((img, index) => {
// //           return <ArrivalsProduct src={img} key={index} />;
// //         })}
// //       </div>
// //       <button className="arivalsMoreBtn">LOAD MORE</button>
// //     </div>
// //   );
// // };

// // export default Arivals;

// const Arrivals = ({ ArivalsProductTerm }) => {
//   const [ArivalsProduct, setArivalsProduct] = useState([]);

//   useEffect(() => {
//     getArivalsProduct();
//   }, [ArivalsProductTerm]);

//   const getArivalsProduct = async () => {
//     const request = await fetch(
//       `https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&q=${ArivalsProductTerm}&sizeSchema=US&offset=0&categoryId=4209&limit=5&store=US`,
//       {
//         method: "GET",
//         headers: {
//           "x-rapidapi-host": "asos2.p.rapidapi.com",
//           "x-rapidapi-key":
//             "326e8e7414mshd51a15891865252p1030ffjsnf86624255eb1",
//         },
//       }
//     );
//     const response = await request.json();
//     setArivalsProduct(response.ArivalsProduct);
//   };
//   // console.log(ArivalsProduct);
//   const arrivals = ArivalsProduct.map((product) => (
//     <ArrivalsProduct {...product} />
//   ));

//   return <div>{arrivals}</div>;
// };

// export default Arrivals;

import React, { useState, useEffect } from "react";
import ArrivalsProduct from "../components/ArrivalsProduct";

const Arivals = ({ ArrivalsProductTerm }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [ArrivalsProductTerm]);

  const getProducts = async () => {
    const request = await fetch(
      `https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&q=${ArrivalsProductTerm}&sizeSchema=US&offset=0&categoryId=4209&limit=6&store=US`,
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
  const productsList = products.map((product) => (
    <ArrivalsProduct {...product} />
  ));

  return <div>{productsList}</div>;
};

export default Arivals;
