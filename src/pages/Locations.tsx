import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Locations = (): JSX.Element => {
  return (
    <>
      <div className="yellowBlock"></div>

      <Header />
      <div className="mt-10 h-[200px] px-5 text-center">
        THIS IS LOCATIONS PAGE
        <p>IM DOING SOMETHING</p>
      </div>
      <Footer />
    </>
  );
};

export default Locations;
