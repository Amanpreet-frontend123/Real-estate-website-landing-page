import React from "react";
import article from "../Json/Article";
import Card from '../components/Card';

const Article = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-[46px] font-[600px] ms-60">{article.title}</h1>
        <div className="flex container ms-50">
        {article.data.map((item) => (
          <Card 
            key={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
      </div>
    </>
  );
};

export default Article;
