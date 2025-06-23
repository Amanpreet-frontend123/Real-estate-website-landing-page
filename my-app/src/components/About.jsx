
import about from "../Js/About";
import aboutCardData from "../Js/AboutCardData";
import Card from "./Card";

const About = () => {
  return (
    <>
      <div className="container ms-50">
        <div className="flex justify-evenly columns-2">
          <h1 className=" text-[46px]  max-w-100 m-10">{about.titleAbout}</h1>
          <p className=" m-10 max-w-110 text-gray-500 leading-10 ">
            {about.descriptionAbout}
          </p>
        </div>
        <div className="flex justify-between">
          {aboutCardData?.map((item) => (
            <Card
              key={item?.id}
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

export default About;
