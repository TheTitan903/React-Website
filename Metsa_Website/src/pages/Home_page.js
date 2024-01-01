import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import Amalgam from '../components/Amalgam'
import Events from '../components/Events'
const Home = () => {
  return(
    <div>
      <Header/>
      <About/>
      <Amalgam/>
      <Events/>
      <Footer/>
    </div>
  )
}
export default Home;
