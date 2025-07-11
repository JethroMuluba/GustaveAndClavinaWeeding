import React from 'react'
import data from '@/data/data.json';
import BlogPostClient from './BlogPostClient';  

// Données simulées pour les articles de blog
const blogPosts = [
  {
    id: "0",
    guestName: "Mr Jethro Muluba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152678/Weeding%20Baka/Guest-Done/Guest_Mr_Jethro_M_hgafi2.png",
    guestTable: "Patience"
  },

  {
    id: "1",
    guestName: "Mr Germain Kakirage",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Vertu"
  },

  {
    id: "2",
    guestName: "Couple Makabi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152857/Weeding%20Baka/Guest-Done/GuestCouple_Makab_vcwrzs.png",
    guestTable: "Foi"
  },

  {
    id: "3",
    guestName: "Mlle Ruth Mbemba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752185132/Weeding%20Baka/Guest-Done/Guest_Mlle_Ruth_M_wfmij0.png",
    guestTable: "Faith"
  },

  {
    id: "4",
    guestName: "Mme Rebecca Kamba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752185132/Weeding%20Baka/Guest-Done/Guest_Mme_Rebecca_cdv3nu.png",
    guestTable: "Faith"
  },

  {
    id: "5",
    guestName: "Mr Rabby Bumba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752185133/Weeding%20Baka/Guest-Done/Guest_Mr_Rabby_Bu_zal7en.png",
    guestTable: "Faith"
  },

  {
    id: "6",
    guestName: "Eunice & Ruth",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752185579/Weeding%20Baka/Guest-Done/Guest_Eunice_Ru_dylkwm.png",
    guestTable: "Logan"
  },

  {
    id: "7",
    guestName: "Don du Ciel",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752185580/Weeding%20Baka/Guest-Done/Guest_Don_du_Ciel_iwelpt.png",
    guestTable: "Logan"
  },

  {
    id: "8",
    guestName: "Couple Muhemedy",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752188714/Weeding%20Baka/Guest-Done/Guest_Couple_Muhe_ffvcnl.png",
    guestTable: "LindSay"
  },

  {
    id: "9",
    guestName: "Couple Christelle Kasanda",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752188713/Weeding%20Baka/Guest-Done/Guest_Couple_Chri_y6rfpb.png",
    guestTable: "LindSay"
  },

  {
    id: "10",
    guestName: "Katukumbani",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752190310/Weeding%20Baka/Guest-Done/Guest_Katukumbani_n20uy1.png",
    guestTable: "Inaya-Sun"
  },

  {
    id: "11",
    guestName: "Couple Noblesse Nalvacia",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752190310/Weeding%20Baka/Guest-Done/Guest_Couple_Nobl_pb8rot.png",
    guestTable: "Inaya-Sun"
  },

  {
    id: "12",
    guestName: "Couple Sarah",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752190309/Weeding%20Baka/Guest-Done/Guest_Couple_Sara_asejum.png",
    guestTable: "Inaya-Sun"
  },

  {
    id: "13",
    guestName: "Couple Hogocha",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752190310/Weeding%20Baka/Guest-Done/Guest_Couple_Hogo_pwum7b.png",
    guestTable: "Inaya-Sun"
  },

  {
    id: "14",
    guestName: "Sarah Tshienda",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752190310/Weeding%20Baka/Guest-Done/Guest_Sarah_Tshie_juij86.png",
    guestTable: "Inaya-Sun"
  },

  {
    id: "15",
    guestName: "Sophia & Denise",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752191351/Weeding%20Baka/Guest-Done/Guest_Sophia_De_wjmquq.png",
    guestTable: "Merah"
  },

  {
    id: "16",
    guestName: "Couple Glodie Ndaya",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752191350/Weeding%20Baka/Guest-Done/Guest_Couple_Glod_yix0i5.png",
    guestTable: "Merah"
  },

  {
    id: "17",
    guestName: "Couple Bienvenue Walo",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752191830/Weeding%20Baka/Guest-Done/Guest_Couple_Bien_vjj2rk.png",
    guestTable: "Rahade"
  },

  {
    id: "18",
    guestName: "Couple Sevolo",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752191830/Weeding%20Baka/Guest-Done/Guest_Couple_Sevo_ukhe0r.png",
    guestTable: "Rahade"
  },

  {
    id: "19",
    guestName: "Couple Hemedi Julia",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752191829/Weeding%20Baka/Guest-Done/Guest_Couple_Heme_nr4eun.png",
    guestTable: "Rahade"
  },

  {
    id: "20",
    guestName: "Missionnaires de retours",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752192118/Weeding%20Baka/Guest-Done/Guest_Missionnair_obd762.png",
    guestTable: "Brazzaville"
  },

  {
    id: "21",
    guestName: "Leadership",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752192439/Weeding%20Baka/Guest-Done/Guest_Leadership_wqsl8v.png",
    guestTable: "Laura"
  },

  {
    id: "22",
    guestName: "Blessing Kebey",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752192439/Weeding%20Baka/Guest-Done/Guest_Blessing_K_htxlgy.png",
    guestTable: "Laura"
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