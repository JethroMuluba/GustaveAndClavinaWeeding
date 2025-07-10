'use client'

import React from 'react'
import { motion} from 'framer-motion'
import Image from "next/image"
import { Download } from "lucide-react"
import Link from "next/link"


interface BlogPost {
  id: string;
  guestName: string;
  guestQRCode: string;
  guestCard: string;
  guestTable: string;

}


interface BlogPostClientProps {
  post: BlogPost;
  getTemplate01: string;
  getTemplate02: string;
}

const BlogPostClient = ({ post, getTemplate01, getTemplate02,  }: BlogPostClientProps) => {


  return (
    <main className="min-h-screen ">
      <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="bg-fixed bg-no-repeat overflow-hidden flex justify-between items-center   py-100 md:py-230   "
      style={{ backgroundImage: `url(${getTemplate01})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
    </motion.section>

    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="bg-scroll overflow-hidden flex justify-between items-center px-4 pt-20 pb-4 "
      style={{ backgroundImage: `url(${getTemplate02})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className=' text-white text-center flex flex-col justify-center items-center'>
        <h2 className='text-2xl mb-14'>
            {post.guestName}
        </h2>

        <div className='flex flex-col justify-center items-center'>
          <p className='mb-6'>
            C&apos;est avec beaucoup d&apos;émotions que Gustave et Clavina vous convient à leur soirée dansante
          </p>

          <p className='mb-6'>
            Le vendredi 25 juillet 2025 à 19h00. 
          </p>


          <div className='flex flex-col justify-center items-center'>
            <p className='mb-2'>
              L&apos;événement aura lieu dans la magnifique Salle de fête Turbant Tower sise 169, Avenue Lowa, Q/Ngwaka, C/Kinshasa.
            </p>

            <p className='mb-6'>
              Réf. Huilerie en diagonale de Camp Lufungula.
            </p>
          </div>

          <p className='mb-4'>
            Pour plus d’infos contactez :
          </p>

          <p className='mb-4'>
          +243 999 859 282 | +243 829 915 672
          </p>

          <p className='mb-4'>
            Cordiale Bienvenue 🌸
          </p>

          <p className='mb-6'>
            Table : {post.guestTable}
          </p>

        </div>

        <div className='flex flex-col gap-4 items-center'>
          <Image
                  src={post.guestQRCode || '/placeholder.svg?height=767&width=748'}
                  alt="Enywork en Formation du Personnel"
                  width={448}
                  height={448}
                  className="w-20 h-20 object-cover rounded-lg transition-transform duration-600 hover:scale-110"
                />

          <Link href={post.guestCard} download className="bg-[#c49344] hover:bg-[#9e793c] px-6 py-2 rounded-lg font-normal text-white cursor-pointer flex items-center gap-2 mb-10">
                <span className='text-xs'>TELECHARGEZ ICI</span>
                <Download  className="w-5 h-5 animate-bounce" />
          </Link>
        </div>



      </div>
    </motion.section>

    

    </main>
  )
}

export default BlogPostClient 