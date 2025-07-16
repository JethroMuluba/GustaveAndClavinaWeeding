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
    guestTable: "Dieuleveux"
  },

  {
    id: "1",
    guestName: "Mr Germain Kakirage",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Dieuleveux"
  },

  {
    id: "2",
    guestName: "Mr Presley Ndjoku",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152857/Weeding%20Baka/Guest-Done/GuestCouple_Makab_vcwrzs.png",
    guestTable: "Dieuleveux"
  },

  {
    id: "3",
    guestName: "Couple Ruth Mbemba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752227302/Weeding%20Baka/Guest-Done/Guest_Couple_Rut_ikaluw.png",
    guestTable: "Faith"
  },

  {
    id: "4",
    guestName: "Couple Rebecca Kamba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752227302/Weeding%20Baka/Guest-Done/GuestCouple_Rebec_vneeji.png",
    guestTable: "Faith"
  },

  {
    id: "5",
    guestName: "Couple Rabby Bumba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752227302/Weeding%20Baka/Guest-Done/GuestCouple_Rabby_iulbrn.png",
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
    guestName: "Couple Don du Ciel",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752227644/Weeding%20Baka/Guest-Done/GuestCouple_Don_d_vzfrhn.png",
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
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226870/Weeding%20Baka/Guest-Done/Guest_Leadership_ofpcux.png",
    guestTable: "Leadership"
  },

  {
    id: "22",
    guestName: "Blessing Kebey",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Leadership"
  },

  {
    id: "23",
    guestName: "Couple Mayamba Pavody",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Pamela"
  },

  {
    id: "24",
    guestName: "Couple Kenakuta Abraham",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Panclas"
  },

  {
    id: "25",
    guestName: "Couple Mbuyi Joël",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Panclas" 
  },

  {
    id: "26",
    guestName: "Couple Kakirage Gislain",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Panclas"
  },

  {
    id: "27",
    guestName: "Couple Kabuya",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Vainqueur"
  },

  {
    id: "28",
    guestName: "Declère Lubaba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Krishina"
  },

  {
    id: "29",
    guestName: "Dieulevet Mahenda",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Krishina"
  },

  {
    id: "30",
    guestName: "Lamama",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Krishina"
  },

  {
    id: "31",
    guestName: "Winnie",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Krishina"
  },

  {
    id: "32",
    guestName: "Alphosine",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Krishina"
  },

  {
    id: "33",
    guestName: "Guy",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Krishina"
  },

  {
    id: "34",
    guestName: "Adriella M.",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Intelligra"
  },

  {
    id: "35",
    guestName: "Emmanuel SL.",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Intelligra"
  },
  

  {
    id: "36",
    guestName: "Miriam",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Intelligra"
  },
  

  {
    id: "37",
    guestName: "Jonathan",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Intelligra"
  },
  

  {
    id: "38",
    guestName: "Bénie",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Intelligra"
  },
  

  {
    id: "39",
    guestName: "Gemima",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Intelligra"
  },
  

  {
    id: "40",
    guestName: "Antony",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Intelligra"
  },

  {
    id: "41",
    guestName: "Hébreu",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Intelligra"
  },

  {
    id: "42",
    guestName: "Mardoché",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Fils"
  },

  {
    id: "43",
    guestName: "Joël Kilaba ",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Fils"
  },

  {
    id: "44",
    guestName: "Julia",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Fils"
  },


  {
    id: "45",
    guestName: "François Ngumb",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Fils"
  },

  {
    id: "46",
    guestName: "Amisi Musa",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Fils"
  },

  {
    id: "47",
    guestName: "Kashou",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Fils"
  },

  {
    id: "48",
    guestName: "David Mbuyi ",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Dieuleveux"
  },

  {
    id: "49",
    guestName: "Plir Vermalin Ntumba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Intelligra"
  },

  {
    id: "50",
    guestName: "Yanick Messa",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Intelligra"
  },

  {
    id: "51",
    guestName: "Nephtalie Zola",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Vainqueur"
  },

  {
    id: "52",
    guestName: "Drognet kinkela",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Panclas"
  },
  
  {
    id: "53",
    guestName: "Couple Lauriane",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Jad"
  },

  {
    id: "54",
    guestName: "Couple Junior Tamba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Jad"
  },

  {
    id: "55",
    guestName: "Justina et Jad",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Jad"
  },

  {
    id: "56",
    guestName: "Beggen",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Jad"
  },

  {
    id: "57",
    guestName: "Rev Kim",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Rev Kim"
  },

  {
    id: "58",
    guestName: "Ruth Luvuma ",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Inaya-Sun"
  },

  {
    id: "59",
    guestName: "Couple Sharon Mulumba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Zimbo"
  },
  {
    id: "60",
    guestName: "Couple Daniel Maseko",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Zimbo"
  },
  {
    id: "61",
    guestName: "Nadine Mukendi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Zimbo"
  },
  {
    id: "62",
    guestName: "Couple Simplice",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Zimbo"
  },
  {
    id: "63",
    guestName: "Couple Jeremie Biezi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Zimbo"
  },
  {
    id: "64",
    guestName: "Couple Fortinat Lishiku",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Zimbo"
  },

  {
    id: "65",
    guestName: "Luhembwe Mambassa",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Zimbo"
  },
  {
    id: "66",
    guestName: "Serge Tshisekedi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Zimbo"
  },
  {
    id: "67",
    guestName: "Couple Josky Bunzeki",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Zimbo"
  },

  {
    id: "68",
    guestName: "Couple Mutundu",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Amour"
  },
]

// Données simulées pour les articles connexes Drognet kinkela


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