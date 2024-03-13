import React from 'react'


import BannerAbout from '../../components/about/banner/BannerAbout'
import MainAbout from '../../components/about/main/MainAbout'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navBar/NavBar'


export default function About() {
  return (
    <>
    <NavBar />
      < BannerAbout />
      < MainAbout />
      < Footer />
    </>
  )
}
