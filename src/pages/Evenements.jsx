import React, {useEffect} from 'react';
import MainLayout from "../layout/MainLayout.jsx";
import { planning } from '../assets/index.js';
import { audio3 } from '../assets/index.js';

export default function Evenements() {
  useEffect(() => {
    const audio_3 = document.getElementById('audio3');
    audio_3.play();
  });
  return (
    <MainLayout>
      <audio id='audio3' src={audio3} preload='auto'></audio>
    <div className='flex justify-center items-center flex-col pt-[100px] pb-[40px] min-h-[95vh]'>
      <h2 className='text-center mb-10 text-[80px]'>Planning</h2>
      <div className=''>
        <img src={planning} alt="programme" className='w-screen h-auto' />
      </div>
    </div>
  </MainLayout>
  )
}
