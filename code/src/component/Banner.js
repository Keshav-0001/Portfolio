import keshav from "../images/keshav.jpeg";
import { ReactTyped } from "react-typed";
import { SiTelegram,} from "react-icons/si";
import { VscVerifiedFilled } from "react-icons/vsc";



const Banner = () => {


  return (
    <div className="bg-slate-50 md:max-w-[1240px] py-6 m-auto ">
      <div className="md:p-16 md:flex justify-between md:my-[50px] my-[100px]">
        <div className="md:w-[40%] md:m-0 mt-8 md:pl-0 text-center keshav-image">
          <img src={keshav} alt="Keshav-img" className=" w-52 rounded-[50%] md:block inline border-2 border-[#416144] " />
        </div>
        <div className="md:w-[60%] w:80% md:m-0 mt-5 text-center md:text-left">
          <h1 className=" md:text-[45px] text-[25px] font-bold text-[#416141] font-sans inline-block">
            Keshav Choudhari   
          </h1>
          <div className="inline-block ml-3"><VscVerifiedFilled className=" text-yellow-500 md:text-[30px] text-[20px] mt-5"/>
            </div>
          <div className=" md:text-[26px] text-[18px] text-[#416141] font-normal my-3 ">
            {" "}
            <span className="font-normal">A Skilled  </span>
            <ReactTyped
              className="pl-2"
              strings={[
                "Web developer",
                "React developer",
                "MERN Stack Developer",
              ]}
              typeSpeed={100}
              loop={true}
              backSpeed={100}
            />
          </div>
       
          <p className=" my-4 text-[13px] text-[#6c7a6c] md:ml-0 md:mr-0 ml-[60px] mr-[60px] font-light font-serif tracking-widest leading-6">
            Hii friends, I am a creative web developer specialized <br/>in react can
            build a responsive website for you.
          </p>
          <button className="p-1 md:w-[25%] w-[80%] bg-[#416141]  pl-4 hover:shadow-2xl font-sans rounded-md mt-3 text-yellow-200 font-bold hover:bg-slate-50 hover:text-[#416141] border border-[#416141]">
            Say Hello
            <SiTelegram className=" inline m-2 hover:text-[#416141] " />
            </button>
        </div>

        
        
      </div>
      
    </div>
  );
};

export default Banner;
