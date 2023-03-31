import React, {useEffect} from 'react';
import { audio3 } from '../assets';

export default function ArmesLayout({kindOfClasse, kindOfElement, attirailsArray}) {
  useEffect(() => {
    const audio_3 = document.getElementById('audio3');
    audio_3.play();
  });
  return (
    <div className='flex justify-center items-center flex-col pt-[150px] pb-[50px]'>
        <audio id='audio3' src={audio3} preload='auto'></audio>
        <h2 className='text-center mb-10 md:text-[80px] text-[50px]'>{kindOfClasse}</h2>
        <div className='flex justify-center flex-wrap'>
        {attirailsArray.map(arme => (
            <div className='relative lg:w-[426px] h-[290.75px] w-[335px] bg-indigo-800 m-4 cursor-pointer rounded-lg overflow-hidden'>
            <div className='lg:w-[426px] h-[240.75px] w-[335px] bg-black'>
                <p className='text-center'>{kindOfElement === "image" ? "Image" : "Vidéo"}</p>
            </div>
            <p className='text-center text-[30px]'>
                {arme}
            </p>
            </div>
        ))}
        </div>
    </div>
  )
}
