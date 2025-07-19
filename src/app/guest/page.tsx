'use client'

import React from 'react'
import data from '@/data/data.json'
import { motion } from 'framer-motion'
import { useState } from 'react';
import FallingHearts from '@/components/FallingHearts';


const tableOfGuest = [
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

  {
    id: "69",
    guestName: "Christian Kabeya",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Zimbo"
  },

  {
    id: "70",
    guestName: "Maman Yvone Lubala",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Vainqueur"
  },
  {
    id: "71",
    guestName: "Dianeline",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Vainqueur"
  },
  {
    id: "72",
    guestName: "Jeremy Bundu",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Vainqueur"
  },

  {
    id: "73",
    guestName: "Gedeon Ilenda",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Vainqueur"
  },
  {
    id: "74",
    guestName: "Bamey Gode",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Vainqueur"
  },
  {
    id: "75",
    guestName: "Couple Mayamba Pavody",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Vainqueur"
  },

  {
    id: "76",
    guestName: "Sr Charlie",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Amour"
  },

  {
    id: "77",
    guestName: "Fifi Pemba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Vainqueur"
  },

  {
    id: "78",
    guestName: "Couple justin muloba (Carine kilaba)",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Vainqueur"
  },

  {
    id: "79",
    guestName: "Héritier Kabeya",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Amour"
  },

  {
    id: "80",
    guestName: "Couple Mbo mboma",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Intelligra"
  },

  {
    id: "81",
    guestName: "Blessing Samba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Lindsay"
  },

  {
    id: "82",
    guestName: "Jordan Segba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Inaya Sun"
  },

  {
    id: "83",
    guestName: "Gabriel",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Laura"
  },
]







const Guest = () => {
  const [search, setSearch] = useState('');
  const getCover = data.home?.[0]?.heroSection?.[0]?.cover  || "/placeholder.svg";

  // Filtrage dynamique par nom d'invité
  const filteredGuests = tableOfGuest.filter(guest =>
    guest.guestName.toLowerCase().includes(search.toLowerCase()) || guest.guestTable.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white flex flex-col md:items-center">
      <FallingHearts />


<motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="bg-no-repeat overflow-hidden items-center h-[926px] md:w-[428px] "
      style={{ backgroundImage: `url(${getCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
    </motion.section>
      {/* Liste des invités */}
      <section className="w-full max-w-2xl mx-auto mt-8  p-4 bg-white rounded-2xl shadow-lg border-light-quaternary backdrop-blur-md">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
          <h2 className="text-3xl font-made-infinity font-bold text-[#c49344] tracking-wide text-center sm:text-left">Liste des invités</h2>
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Rechercher un invité..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#f1d7a3] text-[#6f3d2c] placeholder:text-light-quaternary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-light-quaternary opacity-35 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" /></svg>
            </span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-base text-left font-poppins">
            <thead>
              <tr className="bg-secondary/90 text-[#c49344]">
                <th className="px-3 py-2 rounded-tl-2xl">N°</th>
                <th className="px-3 py-2">Nom de l&apos;invité </th>
                <th className="px-3 py-2 rounded-tr-2xl">Table</th>
                <th className="px-3 py-2">Invitation</th>
              </tr>
            </thead>
            <tbody>
              {filteredGuests.map((guest, idx) => (
                <tr key={guest.id} className={
                  ` transition-colors text-black text-[14px] duration-200 ${idx % 2 === 0 ? 'bg-light-secondary/60' : 'bg-[#f1d7a3]'} hover:bg-secondary/30 hover:text-[#c49344]`
                }>
                  <td className="px-3 py-2 font-semibold">{guest.id}</td>
                  <td className="px-3 py-2">{guest.guestName}</td>
                  <td className="px-3 py-2  text-primary">{guest.guestTable}</td>
                  <td className="px-3 py-2">
                    <a
                      href={`/guest/${guest.id}`}
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-1  rounded-lg bg-primary text-black  shadow hover:bg-secondary hover:text-[#c49344] transition-colors duration-200 text-sm"
                    >
                      Voir invitation
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Guest