import React from "react";
import article from "../Json/Article";
import Card from "../components/Card";

const Article = () => {
  return (
    <>
    <div className="container ">
      <div className=" ms-[120px] mb-[110px] sm:-ms-[40px] sm:mb-[95px]">
        <h1 className=" text-[31px] font-[600] ms-[60px] sm:text-[46px] sm:font-[600] mb-12 sm:max-w-100">{article.title}</h1>

        <div className=" flex container gap-[48px]">
          {article.data.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              date={item.date}
              title={item.title}
              desc={item.desc}
              page="article"
              titleSize="art"
            />
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Article;
