'use client'

// import Link from "next/link"
// // import Image from "next/image"
// import { ArrowRight } from "lucide-react"
import data from "@/data/data.json"
import { motion } from 'framer-motion'
// import { useKeenSlider } from "keen-slider/react"
// import "keen-slider/keen-slider.min.css"
// import type { KeenSliderInstance } from "keen-slider/react"


// Plugin autoplay pour keen-slider
// function AutoplayPlugin(slider: KeenSliderInstance) {
//   let timeout: ReturnType<typeof setTimeout> | undefined
//   let mouseOver = false
//   function clearNextTimeout() {
//     if (timeout) clearTimeout(timeout)
//   }
//   function nextTimeout() {
//     if (timeout) clearTimeout(timeout)
//     if (mouseOver) return
//     timeout = setTimeout(() => {
//       slider.next()
//     }, 4500)
//   }
//   slider.on("created", () => {
//     slider.container.addEventListener("mouseover", () => {
//       mouseOver = true
//       clearNextTimeout()
//     })
//     slider.container.addEventListener("mouseout", () => {
//       mouseOver = false
//       nextTimeout()
//     })
//     nextTimeout()
//   })
//   slider.on("dragStarted", clearNextTimeout)
//   slider.on("animationEnded", nextTimeout)
//   slider.on("updated", nextTimeout)
// }

export default function  HeroSection() {
  // const images = (data.home?.[0]?.heroSection || []).filter(item => !!item.image)
  // const getTitle = data.home?.[0]?.heroSection?.[0]?.title;
  // const getSubTitle = data.home?.[0]?.heroSection?.[0]?.subtitle;
  const getCover = data.home?.[0]?.heroSection?.[0]?.cover;
  // const getCover = cover01 ;

  // const [sliderRef] = useKeenSlider({ loop: true }, [AutoplayPlugin])

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="bg-fixed overflow-hidden flex justify-between items-center  h-full  py-100 md:py-230 w-1989  "
      style={{ backgroundImage: `url(${getCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
    </motion.section>
  )
}

