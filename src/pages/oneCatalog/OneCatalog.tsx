import HomeCopies2 from "./HomeCopies2";
import React, { useEffect, useState, useReducer } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";

const OneCatalog = () => {
  const param = useParams();
  const [product, setProduct] = useState([]);
  // console.log(param.id * 1);
  const paramId = param.id * 1;
  // console.log(paramId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/cosmetics/" + paramId
        );
        setProduct([response.data]);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [paramId]);
  return (
    <div className="div">
      <section>
        <div className="container">
          {product.map((el) => {
            return (
              <div className="details-card" key={el.id}>
                <div className="top">
                  <div className="container">
                    <h1 className="">{el.name}</h1>
                  </div>
                </div>

                <div className="left">
                  <img src={el.image} alt="" />
                </div>
                <div className="right">
                  <h1>{el.name}</h1>

                  <p className="de">Pr {el.price}</p>

                  <h2>Pr {el.description}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="my-[10rem]">
        <HomeCopies2 />
      </div>
    </div>
  );
};

export default OneCatalog;
