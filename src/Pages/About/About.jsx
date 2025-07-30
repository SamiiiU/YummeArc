import React from 'react'
import MainNav from '../../Common/Navbar/MainNav'
import Footer from '../../Common/Footer/Footer'
import HeroSection from './sections/HeroSection'
import Story from './sections/Story'
import MeetArtist from './sections/MeetArtist'
import Mission from './sections/Mission'
import CreativeProcess from './sections/CreativeProcess'
import CTAsection from './sections/CTAsection'

const About = () => {
  return (
    <div className='w-full   font-inter overflow-x-hidden'>
        <MainNav/>
            <HeroSection/>
            <Story/>
            <MeetArtist/>
            <Mission/>
            <CreativeProcess/>
            <CTAsection/>
        <Footer/>
    </div>
  )
}

export default About
