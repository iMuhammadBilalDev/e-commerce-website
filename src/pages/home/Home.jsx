import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import Loader from '../../components/loader/Loader'

function Home() {
  return (
    <div>
      <Layout>
        <HeroSection/>
        <HomePageProductCard/>
        <Track/>
        <Testimonial/>
        <Loader/>
      </Layout>
    </div>
  )
}

export default Home;
