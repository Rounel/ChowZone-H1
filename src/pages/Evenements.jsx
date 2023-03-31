import React from 'react';
import MainLayout from "../layout/MainLayout.jsx";
import { planning } from '../assets/index.js';

export default function Evenements() {
  return (
    <MainLayout>
    <div className='flex justify-center items-center flex-col pt-[100px] pb-[40px] min-h-[95vh]'>
      <h2 className='text-center mb-10 text-[80px]'>Planning</h2>
      <div className=''>
        <img src={planning} alt="programme" className='w-screen h-auto' />
      </div>
    </div>
  </MainLayout>
  )
}
