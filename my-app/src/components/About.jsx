import about from "../Json/About";
import aboutCardData from "../Json/AboutCardData";
import Card from "./Card";

const About = () => {
  return (
    <>
    <div className="container">
      <div className=" ms-[190px] -mb:-[50px] sm:ms-[50px] mt-[123px] sm:mb-[174px]">
        <img src={about.RecImg} className="w-[90px] h-[9px] mb-[40px]"/>
        <div className="flex mb-[65px]">
          <h1 className=" text-[46px] font-[600] min-w-100 sm:max-w-100 ">
            {about.titleAbout}
          </h1>
          <p className="ms-[321px] min-w-120 sm:max-w-130 text-gray-400 leading-10 ">
            {about.descriptionAbout}
          </p>
        </div>
        <div className="flex gap-[150px] ">
          {aboutCardData.map((item) => (
            <div>
              <div className="max-w-[94px] w-full h-[94px] rounded-full bg-[#2387C04D]">
                <img src={about.circleImg} className="absolute m-4 h-[64px] w-[64px] "/>
                <img
                  src={item.img}
                  className="absolute mt-[28px] ms-[30px] ms-[15px]  "
                />
              </div>
              <h1 className="mt-[36px] font-bold font-[600] text-[24px]">{item.title}</h1>
              <p className="min-w-50 mt-[24px] font-[500px] leading-[40px] text-[18px] text-gray-400 sm:max-w-250">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
