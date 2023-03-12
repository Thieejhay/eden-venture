import React from 'react'
import Aboutt from './Aboutt';
import Contact from './Contact';
import Universe from './Universe';
import Founder from './Founder';
import Partner from './Partner';
import Solution from './Solution';
// import Footer from './Footer'

const Profile = () => {
  return (
    <div className='flex flex-col opacity-100'>
        <Founder />
        <Aboutt />
        <Solution />
        <Partner />
        <Universe />
        {/* <Footer /> */}
        {/* <Data /> */}
        <Contact />
    </div>
  )
}

export default Profile;