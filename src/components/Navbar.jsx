import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, audio2 } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    function handleAudio() {
      const audio_2 = document.getElementById('audio2')
      if (audio_2.ended === false) {
        audio_2.pause()
        audio_2.currentTime = 0.300
        audio_2.play()
      } else {
        audio_2.currentTime = 0.300
        audio_2.play()
      }
      
    console.log(audio_2.duration);
    }
  
    useEffect(() => {
      const handleScroll = () => {
        
        const scrollTop = window.scrollY;
        if (scrollTop > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-30 ${scrolled ? "lg:sticky bg-primary" : "lg:fixed bg-transparent"}`}>
      <audio id="audio2" src={audio2} preload='auto'></audio>
        <div className='w-full flex justify-around items-center max-w-7xl mx-auto'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt='logo' className='w-[200px] h-auto object-contain' />
          </Link>

          <ul className='list-none hidden lg:flex flex-row bg-[rgba(255,255,255,0.1)] rounded'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`text-white hover:text-[rgba(0,0,0,0.8)] hover:bg-[rgba(255,255,255,0.6)] lg:text-[25px] xl:text-[30px] font-medium cursor-pointer xl:px-5 lg:px-2  pt-1 rounded relative ${nav.id}`}
                onMouseEnter={() => handleAudio()}
              >
                {nav.path !== '' ? <Link to={nav.path}>{nav.title}</Link> : <p>{nav.title}</p> }
                <div className={`hidden list-none flex-row bg-[#222224] rounded absolute left-0 ${nav.id === "settings" ? "w-[220px]" : ""} ${nav.id === "armes" ? "w-[220px]" : ""}`}>
                  {nav.submenu.length > 0 ? nav.submenu.map(sub => (<li key={sub.id} className={`text-white hover:text-[rgba(0,0,0,0.8)] hover:bg-[rgba(255,255,255,0.6)] text-[30px] font-medium cursor-pointer px-5 pt-1 rounded ${sub.id}`}><Link to={sub.path}>{sub.title}</Link></li>)) : ""}
                </div>
              </li>
            ))}
          </ul>

          <div className='lg:hidden flex flex-1 justify-end items-center z-50 h-auto'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[33px] h-[33px] object-contain z-50'
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-0 left-0 z-40 bg-[#222224] w-full pt-[100px]`}
            >
              <ul className='list-none flex items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`text-[#9ca29e] bg-gradient-to-t from-[#303030] via-[#353535] to-[#3e3e3e] w-full text-center hover:text-[rgba(0,0,0,0.8)] text-[30px] font-medium cursor-pointer pt-1 rounded-md  relative ${nav.id} my-1`}
                  >
                    {nav.path !== '' ? <Link to={nav.path}>{nav.title}</Link> : <p>{nav.title}</p> }
                    <div className={`list-none flex-row rounded left-0`}>
                      {nav.submenu.length > 0 ? nav.submenu.map(sub => (<li key={sub.id} className={`${active === sub.title ? "text-black bg-[#f1f1f1]" : "text-white"} hover:text-[rgba(0,0,0,0.8)] hover:bg-[rgba(255,255,255,0.6)] text-[30px] font-medium cursor-pointer px-5 pt-1 rounded ${sub.id}`} onClick={() => setActive(sub.title)}><Link to={sub.path}>{sub.title}</Link></li>)) : ""}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;
