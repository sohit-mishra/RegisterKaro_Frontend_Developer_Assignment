import React from 'react'
import Startup from '../components/Startup'
import Service from '../components/Service'
import Video from '../components/Video'
import Box from '../components/Box'
import Company from '../components/Company'
import SubScribe from '../components/SubScribe'
import Important from '../components/Important'
import MobileDevice from '../components/MobileDevice'
import Faq from '../components/Faq'
import About from '../components/About'
import Blog from '../components/Blog'
import Clients from '../components/Clients'
import Choose from '../components/Choose'
import Welcome from '../components/Welcome'
import Drashboard from '../components/Drashboard'
import Testimonial from '../components/Testimonial'

export default function Home() {
  return (
    <>
      <Drashboard />
      <Startup />
      <Service />
      <Welcome />
      <About />
      <Choose />
      <Video />
      <Clients />
      <Box />
      <Blog />
      <Testimonial />
      <Faq />
      <MobileDevice />
      <Important />
      <SubScribe />
      <Company />
    </>
  )
}
