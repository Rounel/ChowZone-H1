import React from 'react'

export default function ConfigLayout({kindOfConfig, configArray }) {
  return (
    <div className='flex justify-center items-center flex-col pt-[150px]'>
      <h2 className='text-center mb-10 md:text-[80px] text-[50px]'>{kindOfConfig}</h2>
      <div className='flex justify-center flex-wrap h-auto'>
        {configArray.map(item => (
          <div className='relative lg:w-[364px] w-[335px] max-h-[600px] mx-10 mb-10 pb-4 lmd:pb-0 cursor-pointer md:border-none border-b-2 border-b-slate-400'>
            <div className='w-[335px] lg:h-[363px] h-auto'>
              <img src={item.img} alt="item" />
            </div>
            <p className='text-center text-[30px]'>
              {item.name}&nbsp;|&nbsp;{item.price}
            </p>
            <p className='text-center text-[15px] max-h-[198px] font-poppins font-light'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
