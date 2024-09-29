import BannerSection from '@/components/BannerSection'
import HeroSection from '@/components/HeroSection'
import TrendingSection from '@/components/trendingSection'
import React from 'react'

function page() {
  return (
    <div className=''>
      <HeroSection></HeroSection>
      <TrendingSection></TrendingSection>
      <BannerSection></BannerSection>
    </div>
  )
}

export default page