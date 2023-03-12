import React from 'react';
import About from './About';
// import Brands from './Brands';
import Contact from "./Contact";
import Create from './Create';
// import Footer from './Footer';
// import Header from "./Header";
import Hero from "./Hero";
import Values from './Values';
import What from "./What";

const Home = () => {
  return (
    <div className='opacity-100'>
      {/* <Header /> */}
      <Hero />
      <What />
      <About />
      <Create />
      <Values />
      {/* <Footer /> */}
      <Contact />
    </div>
  )
}

export default Home;