import React from "react";
import article from "../Json/Article";
import Card from "../components/Card";

const Article = () => {
  return (
    <>
    <div className=" container mx-auto ms-[120px]">
      <h1 className=" text-[46px] font-[600px] mb-12 ms-[90px]">
        {article.title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container">
        {article.data.map((item) => (
          <Card 
            key={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
             page="article"
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Article;


