import React from 'react'
import data from '@/data/data.json';
// import { motion, useInView } from 'framer-motion'
// import { useRef } from 'react'
// import Link from "next/link"
// import Image from "next/image"
// import { ArrowLeft, Check, SendHorizontal  } from "lucide-react"
// import NewsletterSection from '@/components/news-letters';
import BlogPostClient from './BlogPostClient';

// Données simulées pour les articles de blog
const blogPosts = [
  {
    id: "0",
    guestName: "Mr Jethro Muluba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1745496908/Enywork/optsolution-bg.webp",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752105481/Weeding%20Baka/Template02_rb0tif.webp",
    guestTable: "Patience"
  },

  {
    id: "1",
    guestName: "Mr Germain Kakirage",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1745497080/Enywork/vps-bg.webp",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752105481/Weeding%20Baka/Template02_rb0tif.webp",
    guestTable: "Vertu"
  },

  {
    id: "2",
    guestName: "Couple Makabi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1745497080/Enywork/vps-bg.webp",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752105481/Weeding%20Baka/Template02_rb0tif.webp",
    guestTable: "Foi"
  },

]

// Données simulées pour les articles connexes


interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined
  }>
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const resolvedParams = await params;  
  // Trouver l'article correspondant à l'ID
  const post = blogPosts.find((post) => post.id === resolvedParams.slug) || blogPosts[0];
  const getTemplate01 = data.home?.[0]?.heroSection?.[0]?.cover || "/placeholder.svg";
  const getTemplate02 = data.home?.[0]?.heroSection?.[0]?.cover1 || "/placeholder.svg";

  return <BlogPostClient 
    post={post} 
    getTemplate01={getTemplate01}
    getTemplate02={getTemplate02}
  />
}

export default BlogPostPage

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id
  }))
}