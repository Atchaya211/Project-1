import styles from "./style.module.css";
import Header from "./component/Header";
// import Footer from "./component/Footer";
import TextArea from "./component/TextArea";
import Pic from "./component/images/my pic.jpg";
import Blue from "./component/images/gradient.png";
import Tech from "./component/images/tech.png";
import { Parallax,ParallaxLayer } from "@react-spring/parallax";
function App() {
  return (
    <div className="wraper">
      <Parallax pages={2}>
        <ParallaxLayer 
        offset={0} 
        speed={2}
        factor={3}
        style={{
          backgroundImage:`url(${Blue})`,
          backgroundSize:'cover',
          color:'white',
          fontSize:'30px'
        }}
        >
          <Header/>
          <div className={styles.FirstPage}>
            Hello!!!<br></br>
            Thanks for considering my Portfolio<br></br>
            I can guarantee you that,I will do my best if you give me an opportunity!!!<br></br>
            I have attached my Portfolio below.
          </div>
        </ParallaxLayer>
        <ParallaxLayer 
        offset={1}
        speed={1}
        factor={4}
        style={{
          backgroundImage: `url(${Tech})`,
          backgroundSize:'cover'
        }}
        >
          {/* <TextArea/>
          <img src={Pic} alt="My Pic" className={styles.images} ></img> */}
          <div className={styles.body}>
            <TextArea/>
            <img src={Pic} alt="My Pic" className={styles.images} ></img>
          </div>
          {/* <Footer/> */}
        </ParallaxLayer>
      </Parallax>
      {/* <Footer/> */}
      {/* <Header/>
      <div className={styles.body}>
      <TextArea/>
      <img src={Pic} alt="My Pic" className={styles.images} ></img>
      </div>
      <Footer/> */}
    </div>
  );
}

export default App;
