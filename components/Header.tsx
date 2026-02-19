import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        whileInView={{opacity:1}}
      >
        <h1 className='text-center text-white text-9xl font-semibold'>MG<span className='text-[#975ffe]'>DEV</span></h1>
        <h1 className='text-center text-white text-8xl font-semibold mb-8   '>Full-Stack Web Developer</h1>
        <p className='text-center text-2xl text-white'>Full-Stack JavaScript Developer | Building Secure & Scalable Web Applications</p>
      </motion.div>

      <div className='flex items-center gap-10 mx-auto w-max mt-12'>
        <button className='text-white text-2xl font-semibold bg-white/10 backdrop-blur-md border border-amber-50/15  px-8 py-2 rounded-xl'>Contact</button>
        <button className='text-white text-2xl font-semibold bg-white/10 backdrop-blur-md border border-amber-50/15  px-8 py-2 rounded-xl'>View Projects</button>
      </div>
    </div>
  )
}

export default Header
