import React from 'react'

import MainAbout from '../components/function/MainAbout'
import Footer from '../components/Ui/Footer'
import HeroAbout from '../components/Ui/HeroAbout'

export default function About() {
  return (
    <>
      < HeroAbout />
      <div className="aboutContainer">
        < MainAbout />
      </div>
      < Footer />

    </>
  )
}
