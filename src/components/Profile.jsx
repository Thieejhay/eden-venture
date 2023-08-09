import React from 'react'
import Aboutt from './Aboutt';
import Universe from './Universe';
import Founder from './Founder';
import Partner from './Partner';
import Solution from './Solution';
import Footerr from './Footerr'

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
        <Footerr />
    </div>
  )
}

export default Profile;