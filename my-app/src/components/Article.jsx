import React from "react";
import article from "../Json/Article";
import Card from "../components/Card";

const Article = () => {
  return (
    <>
      <div className=" container mx-auto ms-[120px] mb-[95px]">
        <h1 className=" text-[46px] font-[600px] mb-12 ">{article.title}</h1>

        <div className=" flex container gap-[48px]">
          {article.data.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              page="article"
              titleSize="art"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Article;
