import React from 'react';
import Createheader from './Createheader';
import Createimage from './Createimage';
import Creators from './Creators';
import Footer from './Footer';
import Mapcreate from './Mapcreate';
import Movement from './Movement';
import Together from './Together';

const Wecreate = () => {
  return (
    <div className='flex flex-col opacity-100 font-barlow overflow-x-hidden'>
        <Createheader />
        <Together />
        <Movement />
        <Creators />
        <Createimage />
        <Mapcreate />
        <Footer />
    </div>
  )
}

export default Wecreate;