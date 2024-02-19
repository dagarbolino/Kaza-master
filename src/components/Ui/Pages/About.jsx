import React from 'react'

import MainAbout from '../MainAbout/MainAbout'
import Footer from '../Footer'
import HeroAbout from '../HeroAbout'

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
