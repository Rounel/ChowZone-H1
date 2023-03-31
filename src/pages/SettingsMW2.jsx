import React from 'react';
import MainLayout from "../layout/MainLayout.jsx";

export default function SettingsMW2() {
  return (
    <MainLayout>
      <div className='flex justify-center items-center flex-col pt-[100px] min-h-[95vh]'>
        <h2 className='text-center mb-10 sm:text-[80px] text-[50px]'>Settings MWII</h2>
        <div className='lg:w-[965px] lg:h-[543px] md:w-[725px] md:h-[443px] sm:w-[565px] sm:h-[343px] w-[400px] h-[200px] bg-orange-900'>
          <p className="text-center text-30px">Vidéo</p>
        </div>
      </div>
  </MainLayout>
  )
}
