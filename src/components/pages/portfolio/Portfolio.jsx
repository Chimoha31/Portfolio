import React, { useState } from "react";
import "./Portfolio.css";
import { portfolio } from "../../data/data";
import Heading from "../../common/heading/Heading";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];

const Portfoliio = () => {
  const [list, setLists] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  console.log(category);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setLists(newItems);
    if (category === "all") {
      setLists(portfolio);
      return;
    }
  };

  return (
    <>
      <article>
        <Heading title="Projects" />
        <div className="portfolio_container">
          <div className="catButton">
            {category.map((category, index) => (
              <button
                className="primaryBtn"
                onClick={() => filterItems(category)}
                data-aos="zoom-out-down"
                key={index}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="content grid3">
            {list.map((item, index) => (
              <div className="box" data-aos="fade-up" key={item.id}>
                <div className="img">
                  <img
                    src={item.cover}
                    alt=""
                    style={{ width: "335px", height: "210px" }}
                  />
                </div>
                <div className="">
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <a href={item.url}>App</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default Portfoliio;
