import React from 'react'

export const ProjectCard = () => {
  return (
    <div className="mt-20 w-150 bg-amber-50/20 border border-white/10 p-4 rounded-lg">
        <div className='w-full overflow-hidden rounded-lg'>
          <img className='h-full w-full object-cover' src="UniHealth.png" alt="unihealth" />
        </div>
        <div className='mt-4'>
          <h1 className='text-white text-4xl font-semibold'>UniHealth</h1>
          <p className='text-white mt-2'>UniHealth simplifies medical appointment booking, helping patients schedule easily and clinics manage their schedules efficiently. </p>
          <button className='text-2xl text-white mt-4 py-1 px-4 rounded-lg font-black border border-white/20 bg-[#5c10d9]'>View Project</button>
        </div>
    </div>
  )
}
