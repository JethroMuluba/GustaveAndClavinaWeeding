'use client'

import React from 'react'
import data from '@/data/data.json'
import { motion } from 'framer-motion'
import { useState } from 'react';
import FallingHearts from '@/components/FallingHearts';
import { Eye, SquarePen, Trash } from 'lucide-react';


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
    guestTable: "Laura"
  },

  {
    id: "22",
    guestName: "Blessing Kebey",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Laura"
  },

  {
    id: "23",
    guestName: "Couple Mayamba Pavody",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Elie"
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
    guestName: "Couple Loïc Lumu",
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
    guestName: "",
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
    guestTable: "Elie"
  },

  {
    id: "70",
    guestName: "Maman Yvone Lubala",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elie"
  },
  {
    id: "71",
    guestName: "Couple Mambu",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Elie"
  },
  {
    id: "72",
    guestName: "Jeremy Bundu",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Zimbo"
  },

  {
    id: "73",
    guestName: "Gedeon Ilenda",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Zimbo"
  },
  {
    id: "74",
    guestName: "Bamey Gode",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Pamela"
  },
  {
    id: "75",
    guestName: "Couple Mbo mboma",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Pamela"
  },

  {
    id: "76",
    guestName: "Sr Charlie",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Panclas"
  },

  {
    id: "77",
    guestName: "Fifi Pemba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Krishina"
  },

  {
    id: "78",
    guestName: "Couple Justin Muloba (Carine kilaba)",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Famille"
  },

  {
    id: "79",
    guestName: "Héritier Kabeya",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Zimbo"
  },

  {
    id: "80",
    guestName: "Couple Mbo mboma",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Pamela"
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

  {
    id: "84",
    guestName: "Couple Muanda David",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Zimbo"
  },

  {
    id: "85",
    guestName: "Rodrigue",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Fils"
  },

  {
    id: "86",
    guestName: "Couple Pascal Lomboto",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Promedi"
  },

  {
    id: "87",
    guestName: "Couple Fidel Keba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Fils"
  },

  {
    id: "88",
    guestName: "Mr Moïse Kianga",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Intelligra"
  },

  {
    id: "89",
    guestName: "Couple Tshimanga",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Faith"
  },

  {
    id: "90",
    guestName: "Couple Kenakuta Abraham",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Panclas"
  },

  {
    id: "91",
    guestName: "Couple Mbuyi Joël",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Panclas" 
  },

  {
    id: "92",
    guestName: "Couple Jerôme",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152678/Weeding%20Baka/Guest-Done/Guest_Mr_Jethro_M_hgafi2.png",
    guestTable: "Dieuleveux"
  },

  {
    id: "93",
    guestName: "Couple Kumanzi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Dieuleveux"
  },

  {
    id: "94",
    guestName: "Cynthia Mayenda",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Famille"
  },

  {
    id: "95",
    guestName: "Ornella & Gima",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Famille"
  },

  {
    id: "96",
    guestName: "Davina",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Famille"
  },

  {
    id: "97",
    guestName: "Océanne",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Famille" 
  },

  {
    id: "98",
    guestName: "Vainqueur Baka",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152678/Weeding%20Baka/Guest-Done/Guest_Mr_Jethro_M_hgafi2.png",
    guestTable: "Famille"
  },

  {
    id: "99",
    guestName: "Promedi Baka",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Famille"
  },

  {
    id: "100",
    guestName: "Noella Kiama",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Famille"
  },

  {
    id: "101",
    guestName: "Couple Lasuku Adolph ",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Moroni"
  },

  {
    id: "102",
    guestName: "Couple Flory Mpondolo",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Moroni"
  },

  {
    id: "103",
    guestName: "Couple Françisko Lunda ",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Moroni"
  },

  {
    id: "104",
    guestName: "Couple Rassoul Bueso ",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Moroni"
  },

  {
    id: "105",
    guestName: "Couple Athanase",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Moroni"
  },

  {
    id: "106",
    guestName: "Couple Baka Martin",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Krishita"
  },

  {
    id: "107",
    guestName: "Couple Kanzabi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Krishita"
  },

  {
    id: "108",
    guestName: "Couple Prospère Kusakumuka",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Krishita"
  },

  {
    id: "109",
    guestName: "Couple Evodie Bwapapa",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Krishita"
  },

  {
    id: "110",
    guestName: "Couple Bwiri",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Krishita"
  },

  {
    id: "111",
    guestName: "Declère Lubaba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Krishita"
  },

  {
    id: "112",
    guestName: "Dieulevet Mahenda",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Krishita"
  },

  {
    id: "113",
    guestName: "Maman Espet Kianga",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Krishita"
  },

  {
    id: "114",
    guestName: "Désiré Baka",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Krishita"
  },

  {
    id: "115",
    guestName: "Oncle Anselme",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Krishita"
  },

  {
    id: "116",
    guestName: "Oncle Hugo",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Krishita"
  },

  {
    id: "117",
    guestName: "Lamama",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Krishita"
  },

  {
    id: "118",
    guestName: "Winnie",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Krishita"
  },

  {
    id: "119",
    guestName: "Alphonsine",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Krishita"
  },

  {
    id: "120",
    guestName: "Guy",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Krishita"
  },

  {
    id: "121",
    guestName: "Couple Lumana",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Promedi"
  },

  {
    id: "122",
    guestName: "Couple Nzuzi Jonathan",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Promedi"
  },

  {
    id: "123",
    guestName: "Couple Fiston Tambola Batu",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Promedi"
  },

  {
    id: "124",
    guestName: "Guy",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752152859/Weeding%20Baka/Guest-Done/GuestMr_Germain_K_a2zy31.png",
    guestTable: "Promedi"
  },

  {
    id: "125",
    guestName: "Couple Simplice Nyumba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Vainqueur"
  },

  {
    id: "126",
    guestName: "Couple Merveille Lukenge",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Vainqueur"
  },

  {
    id: "127",
    guestName: "Couple Olivier Bidwaya",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Vainqueur"
  },

  {
    id: "128",
    guestName: "Kakuta & Batu",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Vainqueur"
  },

  {
    id: "129",
    guestName: "Lokwa",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Vainqueur"
  },

  {
    id: "130",
    guestName: "Kavie",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Vainqueur"
  },

  {
    id: "131",
    guestName: "Couple N'Losi Créas",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Zimbo"
  },
  {
    id: "132",
    guestName: "Couple Manda",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Zimbo"
  },

  {
    id: "133",
    guestName: "Couple Munzela",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Christelle"
  },

  {
    id: "134",
    guestName: "Couple Makabi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Christelle"
  },

  {
    id: "135",
    guestName: "Couple Guelord Mesa",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Christelle"
  },

  {
    id: "136",
    guestName: "Couple Justice Kintembila",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Christelle"
  },

  {
    id: "137",
    guestName: "Couple Malu Malu",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Elie"
  },

  {
    id: "138",
    guestName: "Couple Jérémie Kolangaza",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Elie"
  },

  {
    id: "139",
    guestName: "Couple Maneka",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Pamela"
  },
  {
    id: "140",
    guestName: "Couple Ngwey",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Pamela"
  },
  {
    id: "141",
    guestName: "Couple Mwepu Etienne",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Pamela"
  },

  {
    id: "142",
    guestName: "Claudie Ndaya",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Faith"
  },

  {
    id: "143",
    guestName: "Couple Maseko",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Merah"
  },

  {
    id: "144",
    guestName: "Justin Tshibamba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Jad"
  },

  {
    id: "145",
    guestName: "Esther et Mitonga",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Jad"
  },

  {
    id: "146",
    guestName: "Papy Mudiwa",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Jad"
  },

  {
    id: "147",
    guestName: "Achile",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Jad"
  },

  {
    id: "148",
    guestName: "Papa et Maman",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Jad"
  },

  {
    id: "149",
    guestName: "Adache",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752284016/Weeding%20Ya%20Djo/Location_QR_Code_j1afr2.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752453028/Weeding%20Ya%20Djo/Card/Table%20Baserons/Bottom_guest_Miss_Karl_boqbhb.png",
    guestTable: "Jad"
  },

  {
    id: "150",
    guestName: "Baudoin",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Jad"
  },

  {
    id: "151",
    guestName: "Kisita",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Jad"
  },

  {
    id: "152",
    guestName: "Ya mina et Y'antho",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Jad"
  },

  {
    id: "153",
    guestName: "Lysette",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Jad"
  },

  {
    id: "154",
    guestName: "Claudi Kisita",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Jad"
  },

  {
    id: "155",
    guestName: "Avenue Grâce (5personnes)",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Joy"
  },

  {
    id: "156",
    guestName: "Mapo",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Joy"
  },


  {
    id: "157",
    guestName: "Sola",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Joy"
  },

  {
    id: "158",
    guestName: "Merveille",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Joy"
  },

  {
    id: "159",
    guestName: "Elie Kikinga",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Justina"
  },

  {
    id: "160",
    guestName: "Grâçe Kapalala",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Justina"
  },

  {
    id: "161",
    guestName: "Pierre Tusamba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Justina"
  },


  {
    id: "162",
    guestName: "ESther et Voldie",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Justina"
  },

  {
    id: "163",
    guestName: "Couple Kelokelo",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Justina"
  },


  {
    id: "164",
    guestName: "Couple Hortance Pepe",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Light"
  },

  {
    id: "165",
    guestName: "Couple Winner et Miss",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Light"
  },

  {
    id: "166",
    guestName: "Couple Mike",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Light"
  },

  {
    id: "167",
    guestName: "Maman Aimée",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Light"
  },

  {
    id: "168",
    guestName: "Couple Djombo",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Light"
  },

  {
    id: "169",
    guestName: "Couple Moïse Ntambwe",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Light"
  },

  {
    id: "170",
    guestName: "Sophie Tusamba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Rev Kim"
  },


  {
    id: "171",
    guestName: "Couple Maman Batu",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Merah"
  },

  {
    id: "172",
    guestName: "Couple Matondo",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Merah"
  },

  {
    id: "173",
    guestName: "Couple Malokesi",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Merah"
  },

  {
    id: "174",
    guestName: "Couple Noëlly",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Merah"
  },

  {
    id: "175",
    guestName: "Couple Naomie Lutumba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Merah"
  },

  {
    id: "176",
    guestName: "Couple Cathy Haboko",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Logan"
  },

  {
    id: "177",
    guestName: "Couple Bénédicte Haboko (Laury)",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Logan"
  },

  {
    id: "178",
    guestName: "Couple Eric Kayembe",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Lindsay"
  },

  {
    id: "179",
    guestName: "Couple Jonathan Bulamba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Lindsay"
  },

  {
    id: "180",
    guestName: "Couple Meta",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Rahade"
  },

  {
    id: "181",
    guestName: "Couple Silvie",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Rahade"
  },

  {
    id: "182",
    guestName: "Couple Ruht",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Rahade"
  },

  {
    id: "183",
    guestName: "Couple Kitatshima",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Tehilla"
  },

  {
    id: "184",
    guestName: "Couple Lomena",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Tehilla"
  },

  {
    id: "185",
    guestName: "Mamu Tshienda",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Tehilla"
  },

  {
    id: "186",
    guestName: "Mamu Ndaya",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Tehilla"
  },

  {
    id: "187",
    guestName: "Maman Clematine",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Tehilla"
  },

  {
    id: "188",
    guestName: "Papa Tamba",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Tehilla"
  },

  {
    id: "189",
    guestName: "Gearge Kim",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Tehilla"
  },

  {
    id: "190",
    guestName: "J Caldie",
    guestQRCode: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752115767/Weeding%20Baka/qr-code_1_dzs5lg.png",
    guestCard: "https://res.cloudinary.com/dr8ofciki/image/upload/v1752226871/Weeding%20Baka/Guest-Done/Guest_Blessing_K_eh6uzi.png",
    guestTable: "Tehilla"
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
                <th className="px-3 py-2">Actions</th>
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
                  <td className="px-2 py-2 flex gap-2">
                    <a
                      href={`/guest/${guest.id}`}
                      rel="noopener noreferrer"
                      className="inline-block px-2 py-1  rounded-lg bg-primary text-black  shadow hover:bg-secondary hover:text-[#c49344] transition-colors duration-200 text-[8px]"
                    >
                      <Eye />
                    </a>

                    <a
                      href={`/guest/${guest.id}`}
                      rel="noopener noreferrer"
                      className="inline-block px-2 py-1  rounded-lg bg-primary text-green-500  shadow hover:bg-secondary hover:text-[#c49344] transition-colors duration-200 text-[8px]"
                    >
                      <SquarePen />
                    </a>


                    <a
                      href={`/guest/${guest.id}`}
                      rel="noopener noreferrer"
                      className="inline-block px-2 py-1  rounded-lg bg-primary text-red-600  shadow hover:bg-secondary hover:text-[#c49344] transition-colors duration-200 text-[8px]"
                    >
                      <Trash />
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