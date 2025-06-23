import about from "../Json/About";
import aboutCardData from "../Json/AboutCardData";
import Card from "./Card";

const About = () => {
  return (
    <>
      <div className="container ms-[120px] mt-[236px] mb-[174px]">
        <div className="flex mb-[65px]">
          <h1 className=" text-[46px] font-[600px]  max-w-100 ">
            {about.titleAbout}
          </h1>
          <p className=" ms-[291px] max-w-110 text-gray-400 leading-10 ">
            {about.descriptionAbout}
          </p>
        </div>
        <div className="flex gap-[100px] ">
          {aboutCardData.map((item) => (
            <div>
              <div className="w-[74px] h-[74px]">
                <img
                  src={item.img}
                  className="bg-blue-600 rounded-full "
                />
              </div>
              <h1 className="font-bold font-[600px] text-[24px]">{item.title}</h1>
              <p className=" font-[500px] leading-[40px] text-[18px] text-gray-400 max-w-50">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
