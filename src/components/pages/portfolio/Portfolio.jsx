import React, { useState } from "react";
import "./Portfolio.css";
import { portfolio } from "../../data/data";
import Heading from "../../common/heading/Heading";

const allCategory = [...new Set(portfolio.map((item) => item.category)), "all"];

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
        <Heading title="Projects" className="heading" />
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
              <div className="portfolio_box" data-aos="fade-up" key={item.id}>
                <div className="img">
                  <img
                    src={item.cover}
                    alt=""
                    style={{ width: "335px", height: "210px" }}
                  />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <a href={item.github}>Github</a>
                  <span> / </span>
                  <a href={item.url}>App</a>
                </div>
                <div className="skills">
                  {item.skill.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
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
