import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'
import Section5 from './Components/Section5';

function App() {
  return (
    <div>
      <Header />
      <Main/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  
  )
}

export default App
