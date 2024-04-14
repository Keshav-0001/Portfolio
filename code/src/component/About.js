import imageItems, { AllImages } from "../utils/constant";

const About = () => {
  const Images = imageItems.map((imgitem) => {
    return (
      <div className="inline-block m-6">
        <div className=" border border-[#416144] rounded-lg p-9 text-center hover:scale-105 duration-500  hover:shadow-lg hover:shadow-[#416144] cursor-pointer" >
          <img src={imgitem.image} alt="images" className="w-[100px] my-4" />
          <span className="my-6 font-bold text-[#416141]">{imgitem.label}</span>
        </div>
      </div>
    );
  });

  const allImages = AllImages.map((iconImage) => {
    return (
      <div className="inline-block p-3 my-8">
        <div className=" border-t-4 p-4 rounded-2xl shadow-lg shadow-black">
          <img src={iconImage.image} alt="images" className="w-[60px] h-[50px] my-4 rounded" />
      
        </div>
        <p className="mt-4 text-[#416141]">{iconImage.label}</p>
      </div>
    );
  });

  return (
    <div className="md:max-w-[1240px] my-4">
      <div className=" p-[30px]">
        <h2 className="font-bold text-[30px] text-center my-6 text-[#416141]">Introduction</h2>
        <p className=" px-20 text-center font-sans text-[#416141] tracking-widest leading-6">
          I'm a skilled web developer with experience in JavaScript and
          expertise in frameworks like React, Nodejs. I'm a quick learner and
          collaborate, scalable and user-friendly solutions that solves
          real-world problems. Let's work together to bring your ideas to Life!.
        </p>
      </div>
      <div className="text-center">{Images}</div>
      <div className="text-center">{allImages}</div>
    </div>
  );
};

export default About;
