import React from 'react';
import { Header, About, Products, Testimonials, Contact, Navbar } from '@/components';

const Home: React.FC = () => {
  return (
  <>
      <Navbar />
      <Header />
      <About />
      <Products />
      <Testimonials />
      <Contact />
  </>

  );
};

export default Home;
