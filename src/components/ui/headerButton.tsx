'use client'

import { ArrowRight } from 'lucide-react';
import Link from "next/link"

export function HeaderButton() {
  return( 
  
  
    
    <Link href="/contact" className=" hidden bg-[#FAB613] hover:bg-[#D89A1E] px-8 py-4 rounded-lg font-normal text-white cursor-pointer self-center lg:self-start lg:flex items-center gap-2 ">
          <span>CONTACT</span>
          <ArrowRight className="w-5 h-5" />
    </Link>
  )
}
