import React from 'react';
import { social_links } from '../constants';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='w-full h-max-[80px] flex flex-row justify-center flex-wrap'>
        {social_links.map(link => (
            <div key={link.id} className='flex flex-row items-center mx-5'>
                <img src={link.logo} alt="icon" className='w-[30px] h-[30px] mr-3 icon' />
                <Link to={link.link} className='text-[30px] hover:text-violet-600'>
                    {link.name}
                </Link>
            </div>
        ))}
    </div>
  )
}
