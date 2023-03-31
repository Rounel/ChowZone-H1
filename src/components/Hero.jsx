import { TwitchPlayer, TwitchChat } from 'react-twitch-embed';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomLeftArrow, CustomRightArrow } from "./CustomArrows";
import { audio1 } from "../assets";
import { TypeAnimation } from 'react-type-animation';

import { styles } from "../styles";
import { vidInfos } from "../constants";

const Hero = () => {
  function handleHero(id, heroEvent) {
    const audio_1 = document.getElementById('audio1')
    if (heroEvent) {
      if (id !== active) {
        setActive(id)
      }
      document.body.classList.remove('typingTrigger')
      document.body.classList.add('typingTrigger')
    }
    if (audio_1.ended === false) {
      audio_1.pause()
      audio_1.currentTime = 0
      audio_1.play()
    } else {
      audio_1.play()
    }
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1600 },
      items: 5,
      slidesToSlide: 5
    },
    desktop: {
      breakpoint: { max: 1600, min: 1150 },
      items: 4,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1150, min: 700 },
      items: 3,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 0
    }
  };
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  }, []);

  return (
    <section className={`relative w-screen max-w-screen md:h-[95vh] flex flex-col items-center justify-center bg-black lg:overflow-hidden`}>
      <audio id='audio1' src={audio1} preload='auto'></audio>
      <div className="w-full flex flex-row h-full">
        <div className={`twitch-container ${active !== "" ? "hidden" : "block"} mt-[110px] lg:mt-0 w-full lg:h-full ${toggle ? "h-screen" : "h-[350px]"} flex lg:flex-row flex-col ${toggle ? 'lg:z-40' : ""}`}>
          <TwitchPlayer channel="chowh1" frameborder="0" allowfullscreen="true" scrolling="no" chat="true" autoplay="false" width="100%" height="100%" layout="video" className='max-h-[350px] sm:max-h-none lg:h-full ' onPlay={() => setToggle(true)} onPause={() => setToggle(false)}/>
          <TwitchChat channel="chowh1" height="100%" width="100%" className={`${toggle ? "block lg:w-[40%]" : "hidden"}`}/>
        </div>
        {vidInfos.map(vid => (
          <div key={vid.id} className={`relative ${active === vid.id ? "lg:block" : "hidden"} w-full h-full`}>
            <img className='w-[100%] h-[100%] brightness-75' src={vid.thumbnail1} alt="miniature" />
          </div>
        ))}
      </div>

        {vidInfos.map(vid => (
          <div key={vid.id} className={`absolute top-[200px] lg:left-[120px] left-[70px] max-h-[234px] ${active === vid.id ? "lg:block" : "hidden"} box-shadowed glitch-wrapper overflow-hidden`}>
                <p className={`${styles.heroHeadText} text-white tracking-wide text-shaded glitch max-h-[100px] text-ellipsis overflow-hidden`} data-glitch={vid.name}>
                {vid.name}
                </p>
            <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-[900px] text-shaded2 text-ellipsis overflow-hidden`}>
              {vid.description}
            </p>
          </div>
        ))}

      <div className={`lg:absolute lg:left-0 lg:bottom-[20px] flex flex-col md:items-start lg:gap-5`}>
        <div className='flex flex-row md:justify-center items-center mt-5 mb-3 ml-4'>
          <div className='w-2 h-2 rounded-full bg-[#f1f1f1] mr-2' />
          <p className='bg-[#f1f1f1] text-black px-2 py-1 rounded-sm text-2xl'>NOUVEAUTÉS</p>
        </div>
        <div className="hidden md:flex flex-row h-[190px] relative">
          <Carousel responsive={responsive} className='w-screen' customLeftArrow={<CustomLeftArrow />} customRightArrow={<CustomRightArrow />}>
            <div className="max-w-[320px] xl:w-[320px] xl:h-[180px] w-[250px] h-[140.625px] hidden md:flex items-center justify-center cursor-pointer mx-3 rounded-sm hover:scale-110 bg-gradient-to-t from-amber-400 via-amber-300 to-amber-200" onMouseOver={() => handleHero("")}>
              <div className="triangle1 w-4 h-4 bg-neutral-700"></div>
              <p className='text-5xl text-neutral-700 mx-3'>LIVE</p>
              <div className="triangle2 w-4 h-4 bg-neutral-700"></div>
            </div>
            {vidInfos.map(vid => (
              <div key={vid.id} className="xl:w-[320px] xl:h-[180px] w-[250px] h-[160px] hover:border-y-4 hover:border-[#915eff] cursor-pointer mx-3 rounded-sm hover:scale-110 overflow-y-hidden" onMouseEnter={() => handleHero(vid.id, true)}>
                <Link to={vid.link} className='flex items-center gap-2'>
                  <img className='' src={vid.thumbnail2} alt="miniature" />
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="md:hidden flex flex-row flex-wrap justify-center items-center relative">
          {vidInfos.map(vid => (
            <div key={vid.id} className="w-[320px] h-[180px] hover:border-y-4 hover:border-[#915eff] cursor-pointer my-3 mx-2 rounded-sm hover:scale-110 overflow-y-hidden" onClick={() => handleHero(vid.id, false)}>
              <Link to={vid.link} className='flex items-center gap-2'>
                <img className='' src={vid.thumbnail2} alt="miniature" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
