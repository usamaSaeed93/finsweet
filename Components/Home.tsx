import React from 'react'
import TopBanner from './Home/TopBanner/TopBanner';
import Quality from './Home/Quality/Quality';
import Reason from './Home/Reason/Reason';
import Trial from './Home/Trial/Trial';
import LogoIpsum from './Home/LogoIpsum';
import Discover from './Home/Discover/Discover';
import Features from './Home/Features/Features';
import Reviews from './Home/Review/Review';
import Pricing from './Home/Pricing/Pricing';
import Footer from './Layout/Footer';
import SynchronizedChart from './Home/Graph/Graph';
const Home:React.FC=()=> {
  return (
    <div>
        <TopBanner />
        <SynchronizedChart />
        <Quality />
        <Reason />
        <Trial />
        <LogoIpsum />
        <Discover />
        <Features />
        <Reviews />
        <Pricing />
        <Footer />

    </div>
  )
}
export default Home;