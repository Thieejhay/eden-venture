import React, { useState } from 'react';
import Sophie from '../assets/profile/Sophia.png';
import John from '../assets/profile/John Igwe.png';
import Fife from '../assets/profile/Fifehan.png';
import Nkiru from '../assets/profile/Nkiru.png';
import Alexander from '../assets/profile/Alexander.png';
import Zehra from '../assets/profile/Zehra.png';
import Funmbi from '../assets/profile/Funmbi.png';
import Amaka from '../assets/profile/Amaka.png';
import Kamal from '../assets/profile/Kamal.png';
import Titi from '../assets/profile/Titi.png';
import Ose from '../assets/profile/Ose.png';
import Anita from '../assets/profile/Anita.png';
import Anthony from '../assets/profile/Anthony.png';
import Ann from '../assets/profile/Ann.png';
import Jude from '../assets/profile/Jude.png';
import Chioma from '../assets/profile/Chioma.png';
import Yvonne from '../assets/profile/Yvonne.png';
import Habeeb from '../assets/profile/Habeeb.png';
import Adesua from '../assets/profile/Adesua.png';
import Eniola from '../assets/profile/Eniola.png';
import Otu from '../assets/profile/Otu.png';
import { BsLinkedin } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';

const Dataa = () => {

    const[toggleMore, setToggleMore] = useState();
    const[toggleMore1, setToggleMore1] = useState();

  return (
    <div className='flex flex-col lg:px-12 px-4 py-4 lg:gap-28 gap-12 mb-12 relative bg-[#fffdf3]'>
        <div className='lg:flex hidden  gap-28 justify-center'>
            <div className='flex flex-col gap-2'>
                <img src={Sophie} alt='' className='lg:w-64 lg:h-64 lg:mt-16 w-96 h-80'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Sophia Logan</h1>
                <p className='lg:text-base text-sm font-light'>Advisory parther</p>
                <p className='lg:text base text-sm font-light underline cursor-pointer' onClick = {() => {setToggleMore(true)}}>Bio</p>
                <a href='https://www.linkedin.com/in/sophialogan/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
            <div className='flex flex-col gap-1 lg:-mt-12'>
                <img src={Fife} alt='' className='lg:w-[20rem] lg:h-[20rem] w-96 h-80'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Fifehan Osikanlu</h1>
                <p className='lg:text-base text-sm font-light'>Founder</p>
                <p className='lg:text-base text-sm font-light underline'>Bio</p>
                <a href='https://www.linkedin.com/in/fifehan-osikanlu/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
            <div className='flex flex-col gap-1 lg:mt-16'>
                <img src={Otu} alt='' className='lg:w-64 lg:h-64 w-96 h-80'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Otu Hughes</h1>
                <p className='lg:text-base text-sm font-light'>Advisory Partner</p>
                <a href='https://www.linkedin.com/in/otu-hughes-037232/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
            
        </div>
        <div className='flex lg:hidden md:hidden flex-col gap-12 -mt-12'>
            <div className='flex flex-col gap-1 lg:-mt-12'>
                <img src={Fife} alt='' className='lg:w-[20rem] lg:h-[20rem] w-96 h-80'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Fifehan Osikanlu</h1>
                <p className='lg:text-base text-sm font-light'>Founder</p>
                <p className='lg:text-base text-sm font-light underline'>Bio</p>
                <a href='https://www.linkedin.com/in/fifehan-osikanlu/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
            <div className='flex flex-col gap-2'>
                <img src={Sophie} alt='' className='lg:w-56 lg:h-56 lg:mt-16 w-96 h-80'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Sophia Logan</h1>
                <p className='lg:text-base text-sm font-light'>Advisory parther</p>
                <p className='lg:text base text-sm font-light underline' onClick = {() => {setToggleMore(true)}}>Bio</p>
                <a href='https://www.linkedin.com/in/sophialogan/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
            <div className='flex flex-col gap-1 lg:mt-16'>
            <img src={Otu} alt='' className='lg:w-64 lg:h-64 w-96 h-80'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Otu Hughes</h1>
                <p className='lg:text-base text-sm font-light'>Advisory Partner</p>
                <a href='https://www.linkedin.com/in/otu-hughes-037232/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col lg:justify-center lg:gap-32 gap-12'>
            <div className='flex flex-col gap-2 lg:-mt-12'>
                <img src={Habeeb} alt='' className='lg:w-64 lg:h-64 w-96 h-80lg:'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Habeeb Alebiosu</h1>
                <p className='lg:text-base text-sm font-light'>Advisory Partner</p>
                <a href='https://www.linkedin.com/in/habeeb-alebiosu-262486a/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
            <div className='flex flex-col gap-1 lg:mt-20'>
                <img src={Eniola} alt='' className='lg:w-[18rem] lg:h-[18rem] w-96 h-80'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Eniola Mafe</h1>
                <p className='lg:text-base text-sm font-light'>Advisory Partner</p>
                <a href='https://www.linkedin.com/in/eniolamafe/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
            <div className='flex flex-col gap-2 lg:-mt-8'>
                <img src={Titi} alt='' className='lg:w-64 lg:h-64 lg:mt-20 w-96 h-80'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Titi Ogufere</h1>
                <p className='lg:text-base text-sm font-light'>Project Partner</p>
                <a href='https://www.linkedin.com/in/titi-sandra-ogufere-7b11493/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col lg:justify-center lg:gap-32 gap-12'>
            <div className='flex flex-col gap-2 lg:-mt-12'>
                <img src={Kamal} alt='' className='lg:w-[15rem] w-96 h-96 lg:h-[18rem]'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Kamal Ajiboye</h1>
                <p className='lg:text-base text-sm font-light'>Project Partner</p>
                <a href='https://www.linkedin.com/in/kamal-ajiboye-10990848/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
            <div className='flex flex-col gap-2'>
                <img src={Alexander} alt='' className='lg:w-64 lg:h-64 w-96 h-80'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Alexander Okeke</h1>
                <p className='lg:text-base text-sm font-light'>Project Partner</p>
                <BsLinkedin className='w-6 h-6'/>
            </div>
            <div className='flex flex-col gap-2 lg:mt-12'>
                <img src={Amaka} alt='' className='lg:w-64 lg:h-64 w-96 h-80'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Amaka Okechukwu Opara</h1>
                <p className='lg:text-base text-sm font-light'>Project Partner</p>
                <a href='https://www.linkedin.com/in/amaka-okechukwu-opara-8064935/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col lg:justify-center lg:gap-28 gap-12'>
            <div className='flex flex-col gap-2'>
                <img src={Anthony} alt='' className='lg:w-64 lg:h-64 w-96 h-80'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Anthony Alagbile</h1>
                <p className='lg:text-base text-sm font-light'>Project Partner</p>
                <a href='https://www.linkedin.com/in/anthony-alagbile-cpsychol-73aa9315/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
            <div className='flex flex-col gap-2 lg:mt-14'>
                <img src={Ann} alt='' className='lg:w-[18rem] lg:h-[19rem] w-96 h-[23rem]'/>
                <h1 className='text-lg font-semibold'>Ann Ogunsulire</h1>
                <p className='lg:text-base text-sm font-light'>Project Partner</p>
                <a href='https://www.linkedin.com/in/annogunsulire/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
            <div className='flex flex-col gap-2'>
                <img src={Jude} alt='' className='lg:w-64 lg:h-64  w-96 h-[22rem]'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Jude Abaga</h1>
                <p className='lg:text-base text-sm font-light'>Project Partner</p>
                <a href='https://www.linkedin.com/in/jude-abaga-85b200186/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col lg:justify-center lg:gap-32 gap-12'>
            <div className='flex flex-col gap-2 lg:mt-12'>
                <img src={Chioma} alt='' className='lg:w-64 lg:h-[17rem] w-96 h-80lg:'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Chioma Ude</h1>
                <p className='lg:text-base text-sm font-light'>Project Partner</p>
                <BsLinkedin className='w-6 h-6'/>
            </div>
            <div className='flex flex-col gap-2 lg:mt-8'>
                <img src={Funmbi} alt='' className='lg:w-60 lg:h-64 w-96 h-80'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Funmbi Ogunbanwo</h1>
                <p className='lg:text-base text-sm font-light'>Project Partner</p>
                <a href='https://www.linkedin.com/in/funmbiogunbanwo/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
            <div className='flex flex-col gap-2 lg:mt-14'>
                <img src={Yvonne} alt='' className='lg:w-[17rem] lg:h-[20rem] w-96 h-[30rem]'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Yvonne Victor-Olomu</h1>
                <p className='lg:text-base text-sm font-light'>Project Partner</p>
                <a href='https://www.linkedin.com/in/yvonne-victor-olomu-553245205/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col lg:justify-center lg:gap-32 gap-12'>
            <div className='flex flex-col gap-1 lg:mr-6'>
                <img src={Adesua} alt='' className='lg:w-52 lg:h-64 w-96 h-[23rem]'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Adesua Okosun </h1>
                <p className='lg:text-base text-sm font-light'>Project Partner</p>
                <a href='https://www.linkedin.com/in/adesua-okosun-486b05100/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
            <div className='flex flex-col lg:gap-1 gap-2 lg:mt-20'>
                <img src={Nkiru} alt='' className='lg:w-64 lg:h-64 w-96 h-80'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Nkiru Balonwu</h1>
                <p className='lg:text-base text-sm font-light'>Project Partner</p>
                <a href='https://www.linkedin.com/in/nkiru-balonwu-7143b691/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
            <div className='flex flex-col gap-1 lg:mt-8'>
                <img src={John} alt='' className='lg:w-64 lg:h-64 w-96 h-[23rem]'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>John Igwe</h1>
                <p className='lg:text-base text-sm font-light'>Chief of Staff/Operations</p>
                <p className='lg:text-base text-sm font-light underline cursor-pointer' onClick = {() => {setToggleMore1(true)}}>Bio</p>
                <a href='https://www.linkedin.com/in/iamsonto/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col lg:justify-center lg:gap-28 gap-12'>
            <div className='flex flex-col gap-2 lg:mr-6'>
                <img src={Ose} alt='' className='lg:w-[15rem] lg:h-[17rem] w-96 h-[22rem]'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Ose Ikhureigbe</h1>
                <p className='lg:text-base text-sm font-light'>Project Director</p>
                <a href='https://www.linkedin.com/in/ose-ikhureigbe/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
            <div className='flex flex-col gap-2'>
                <img src={Zehra} alt='' className='lg:w-[16rem] lg:h-[16rem] w-96 h-80'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Zehra Talib</h1>
                <p className='lg:text-base text-sm font-light'>Project Director</p>
                <a href='https://www.linkedin.com/in/zehra-talib-mph/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
            <div className='flex flex-col gap-2'>
                <img src={Anita} alt='' className='lg:w-64 lg:h-64 lg:mt-12 w-96 h-80'/>
                <h1 className='lg:text text-base lg:font-semibold font-medium'>Anita Udegbue</h1>
                <p className='lg:text-base text-sm font-light'>Project Manager</p>
                <a href='https://www.linkedin.com/in/anita-udegbue/' target='_blank' rel='noreferrer'> <BsLinkedin className='w-6 h-6'/></a>
            </div>
        </div> 
        

        {
        toggleMore && (
          <div className='flex fixed bg-white lg:p-12 px-4 pt-16 lg:pt-0 lg:px-0 lg:w-[60rem] bottom-0 m-auto left-0 right-0 top-0 lg:h-[25rem] h-[43rem] mx-4'>
            <div className='flex flex-col gap-4'>
            <span><p className='text-2xl font-medium lg:font-bold text-black/90 opacity-80'>Sophia Logan</p></span>
            <span className=''>Advisory Partner</span>
            <span><p className='lg:text-base text-sm font-extralight lg:font-light  text-black/80'>
                Sophia is founding Partner at Eden. She has extensive business management consulting experience across a broad range of industries including music and entertainment, fashion & beauty, and healthcare & wellness.
                Over the last 16 years, her core focus has been business transformation and operational excellence for the development and implementation of innovative solutions to increase organizational effectiveness. Currently she project manages and develop innovative strategies for music label operation initiatives in NY and creative initiatives in Lagos, Nigeria.Prior to consulting she led Talent and Learning Development for manufacturing plants and over 2,000 employees. In addition, she consulted for a start-up distribution company helping to strengthen its business model and organizational design, resulting in the company generating 20% more profit than forecasted in its first 3 months.Sophia holds an MBA in International Business from the Thunderbird School of Global Management at Arizona State University and MBA in Merchandising from the University of Delaware.
                </p>
            </span>
            <span className='text-black/60 flex justify-center' onClick = {() => {setToggleMore(false)}}><MdOutlineCancel className='w-6 h-6'/></span>
            </div>
          </div>
        )
      }

{
        toggleMore1 && (
          <div className='flex fixed bg-white lg:p-12 px-4 pt-16 lg:pt-0 lg:px-0 lg:w-[60rem] bottom-0 m-auto left-0 right-0 top-0 lg:h-[35rem] h-[53rem] mx-4'>
            <div className='flex flex-col gap-4'>
            <span><p className='text-2xl font-medium lg:font-bold text-black/90 opacity-80'>John Igwe</p></span>
            <span>Chief of Staff | Operations Lead</span>
            <span><p className='lg:text-base text-xs font-extralight lg:font-light  text-black/80'>
                John Igwe is a seasoned leadership and venture expert with an extensive background in managing projects and curating interventions.Previously, John served as the Project Manager, Startup Practise at Co-creation Hub and the Senior Program Manager at The Afara Initiative where he led a diverse team to curate and deploy innovative designs, hackathons and learning modules to diverse stakeholders including university students, startup founders across Africa, mid-level managers, government officials and corporate organisations.Before joining The Afara Initiative in 2018, John served as Vice-President, Innovation at Jumpstart Academy. Jumpstart Academy is a non-profit organization that ran for five (5) years as a fixed-term project funded by MTN and Segal Family Foundation aimed at bridging the competency gap between students from low-income backgrounds with their contemporaries across the globe. Through his work, the Academy raised students who excelled in local and international standard examinations and tests, and were able to compete for opportunities like scholarships and study abroad programs. While at Jumpstart Academy, he led a team of 40 educators to deliver the five (5) year project with over 2000 students as beneficiaries.His interest in learning innovation and management stems from a deep-rooted background in education. Having served as science teacher at top schools in Lagos and Ibadan, John was recognised by two international organisations, the African Leadership Academy and Hult Business School. At the African Leadership Academy, John went through rigorous training which exposed him to the innovation around learning systems design and a deep dive into creating custom curricula tailored to users. At Hult Business School, John received first hand training and mentorship from the faculty of Hult Business School and was prepared with tools to bolster his problem solving skills. John later went on to compete at the Hultz Prize.John enjoys helping startups and organizations solve pressing problems. He has consulted for the World Economic Forum, Unilever, Taeillo, Nile Farms, Evolve Credit,  and Steering for Greatness Foundation. 
 
                </p>
            </span>
            <span className='text-black/60 flex justify-center' onClick = {() => {setToggleMore1(false)}}><MdOutlineCancel className='w-6 h-6'/></span>
            </div>
          </div>
        )
      }     

    </div>
  )
}

export default Dataa;