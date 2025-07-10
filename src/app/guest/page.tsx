'use client'

import React from 'react'
import data from '@/data/data.json'
import { motion } from 'framer-motion'





const Guest = () => {
  const getCover = data.home?.[0]?.heroSection?.[0]?.cover  || "/placeholder.svg";

  return (
    <main className="min-h-screen">

<motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="bg-fixed overflow-hidden flex justify-between items-center  h-full  py-100 md:py-230 w-1989  "
      style={{ backgroundImage: `url(${getCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
    </motion.section>
    </main>
  )
}

export default Guest