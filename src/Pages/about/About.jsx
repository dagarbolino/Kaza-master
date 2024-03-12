import React from 'react'


import MainAbout from '../../sass/libs/scenes/about/components/main/MainAbout'
import BannerAbout from '../../sass/libs/scenes/about/components/banner/BannerAbout'
import Footer from '../../sass/libs/scenes/footer/components/Footer'
import NavBar from '../../sass/libs/scenes/navBar/components/NavBar'

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
