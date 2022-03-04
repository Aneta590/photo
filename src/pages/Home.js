import React from "react";
import react from "../assets/react.png";
import coding from "../assets/coding.png";
import xd from "../assets/xd.png";
import mm1 from "../assets/mm1.png";
import mm2 from "../assets/mm2.png";
import mm3 from "../assets/mm3.png";
import mmwireframe from "../assets/mmwireframe.jpg";
import kartagraficzna from "../assets/kartagraficzna.png";
import github from "../assets/github.png";

import "../styles/home.css";

const Home = () => {
  return (
    <>
      {/* <div>Photos</div>
   <img className='one' src={img1} alt="image"/> */}
      <div className="onediv">
        <img className="one" src={react} alt="logo react" />
        <img className="one" src={coding} alt="logo HTML/CSS" />
      </div>
      <div className="line"></div>
      
      
      <img className="two" src={mm1} alt="MM project " />
      <div className="line"></div>
      <img className="two" src={mm2} alt="MM project" />
      <div className="line"></div>
      <img className="two" src={mm3} alt="MM project" />
      <div className="line"></div>
      <img className="kartagraficzna" src={kartagraficzna} alt="MM project " />
      <div className="line"></div>
      <div className="onediv">
        <img className="one" src={xd} alt="MM project" />
      </div>
      <img className="two" src={mmwireframe} alt="MM project " />
      <div className="line"></div>
      

      <iframe
        className="video"
        title="vimeo-player"
        src="https://player.vimeo.com/video/683784317?h=b5fe1a48f4"
        width="640"
        height="376"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <a
        className="makieta"
        href="https://xd.adobe.com/view/b1606310-ec8b-4c9c-931e-65b1740f4e6b-e433/"
      >
        MODÈLE DYNAMIQUE : CLIQUEZ
      </a>
      <div className="line"></div>

      <a className="linkgithub" href="https://github.com/Aneta590">
        <img className="image" src={github} alt="github" />
        <div className="middle">
          <p className="text">Github Portolio</p>
        </div>
      </a>
      <div className="line"></div>
    </>
  );
};

export default Home;
