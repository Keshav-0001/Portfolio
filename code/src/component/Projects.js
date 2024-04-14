import drumkit from "../images/drumkit.png";
import weatherApp from "../images/Weatherapp.png";
import Food from "../images/food.png";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <div className="md:max-w-[1240px] text-center p-28">
      <h1 className="font-bold text-[30px] text-[#416144] mb-[30px]">Projects</h1>
      <p className=" px-20 text-center font-sans text-[#416141] tracking-widest leading-6">
          Following projects showcases my skills and experience through real-world examples of my work. Each project is breifly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
      <div className="flex justify-between my-[80px] text-center">
        <div className="w-[200px] h-[330px] border-2 border-gray p-6 hover:scale-90 duration-500  hover:shadow-lg hover:shadow-[#416144] cursor-pointer">
          <h1 className="my-3 font-bold text-[#416144]">Food Ordering App</h1>
          <img src={Food} alt="food-ordering" className="w-[200px] h-[150px] rounded"/>
          <p className="my-4 font-bold text-[#416144]">Order food 😋😊</p>
          <div className="ml-[40%] text-[#416144]"><FaGithub className="text-[35px] hover:shadow-xl hover:shadow-yellow-400 border-none cursor-pointer" /></div>
        </div>
        <div className="border-2 border-gray p-6 text-center hover:scale-105 duration-500  hover:shadow-lg hover:shadow-[#416144] cursor-pointer">
          <h1 className="my-3 font-bold text-[#416144]">Weather Application</h1>
          <img src={weatherApp} alt="game" className="w-[180px] h-[150px] rounded"/>
          <p className=" my-4 font-bold text-[#416144]">Check Weather🌞🌞</p>
         <div className="ml-[40%] text-[#416144]"><FaGithub className="text-[35px] hover:shadow-xl hover:shadow-yellow-400 border-none cursor-pointer"/></div>
        </div>
        <div className="border-2 border-gray p-6 hover:scale-90 duration-500  hover:shadow-lg hover:shadow-[#416144] cursor-pointer ">
          <h1 className="my-3 font-bold text-[#416144]">Drum-Kit-Games</h1>
          <img src={drumkit} alt="weather" className="w-[180px] h-[150px] rounded"/>
          <p className="my-4 font-bold text-[#416144]">Play games 🚴‍♀️</p>
          <div className="ml-[40%] text-[#416144]"><FaGithub  className="text-[35px] hover:shadow-xl hover:shadow-yellow-400 border-none cursor-pointer"/></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
