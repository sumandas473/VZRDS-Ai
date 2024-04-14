import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Main from '../../Components/Main/Main'
import CardSec from '../../Components/cardsec/CardSec'
import LocomotiveScroll from 'locomotive-scroll'
import CardSec2 from '../../Components/cardsec2/CardSec2'

function Home() {
  const locomotivescroll = new LocomotiveScroll();
  return (
    <div className='bg-black h-screen'>
        <Navbar />
        <Main  />
        <CardSec />
        <CardSec2 />
    </div>
  )
}

export default Home