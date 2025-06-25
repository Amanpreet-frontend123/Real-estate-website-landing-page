import about from "../Json/About";
import aboutCardData from "../Json/AboutCardData";
import Card from "./Card";

const About = () => {
  return (
    <>
      <div className="container ms-[120px] mt-[123px] mb-[174px]">
        <img src={about.RecImg} className="w-[90px] h-[9px] mb-[40px]"/>
        <div className="flex mb-[65px]">
          <h1 className=" text-[46px] font-[600px]  max-w-100 ">
            {about.titleAbout}
          </h1>
          <p className="ms-[321px] max-w-130 text-gray-400 leading-10 ">
            {about.descriptionAbout}
          </p>
        </div>
        <div className="flex gap-[150px] ">
          {aboutCardData.map((item) => (
            <div>
              <div className="w-[94px] h-[94px] rounded-full bg-[#2387C04D]">
                <img src={about.circleImg} className="absolute m-4 h-[64px] w-[64px] "/>
                <img
                  src={item.img}
                  className="absolute mt-[30px] ms-[30px] ms-[15px]  "
                />
              </div>
              <h1 className="mt-[36px] font-bold font-[600px] text-[24px]">{item.title}</h1>
              <p className="mt-[24px] font-[500px] leading-[40px] text-[18px] text-gray-400 max-w-50">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
