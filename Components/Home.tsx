import React from 'react'
import TopBanner from './Home/TopBanner/TopBanner';
import Quality from './Home/Quality/Quality';
import Reason from './Home/Reason/Reason';
import Trial from './Home/Trial/Trial';
import LogoIpsum from './Home/LogoIpsum';
import Discover from './Home/Discover/Discover';
import Features from './Home/Features/Features';
import Reviews from './Home/Review/Review';
const Home:React.FC=()=> {
  return (
    <div>
        <TopBanner />
        <Quality />
        <Reason />
        <Trial />
        <LogoIpsum />
        <Discover />
        <Features />
        <Reviews />
    </div>
  )
}
export default Home;