import Header from "./component/Header";
import Banner from "./component/Banner";
import About from "./component/About";
import Project from "./component/Projects";

const App = () => {


  return (
    <div className=" bg-slate-50">
      <Header />
      <Banner/>
       <hr className="hrBorder"></hr>
      <About/>
      <hr className="hrBorder-2"></hr>
      <Project/>
    </div>
  );
};
export default App;
