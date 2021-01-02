import { React } from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
// import OrderButton from "./OrderButton.js";
// import { makeStyles } from "@material-ui/core/styles";

// CSS STYLES
// const useStyles = makeStyles((theme) => ({

// }));



export const Home = () => {
  // const classes = useStyles();
  return (
    <div >
      <div id="intro">
        <Navbar />
        <Intro />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="aboutus">
        <AboutUs />
        <Footer />
      </div>



    </div >
  );
};

export default Home;

/* react-particles-js docs https://www.npmjs.com/package/react-particles-js
  type: star or circle
  value property is size of the dots

          Home
  Intro, Work Experience, Contact
      Work ExperienceEntry
*/
