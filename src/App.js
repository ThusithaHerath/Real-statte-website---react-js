import React from 'react'
import Best from './Components/best/Best';
import Featured from './Components/featured/Featured';
import Footer from './Components/footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/navbar/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Best/>
      <Featured/>
      <Footer/>
    </>
  );
}

export default App;
