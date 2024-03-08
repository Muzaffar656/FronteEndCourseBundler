import React from 'react';

import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/bg.png';
import introVideo from '../../assets/videos/intro.mp4';

const Home = () => {
  return (
    <section className="home font-sans">
      <div className="flex  items-center sm:justify-center flex-col sm:flex-row p-16">
      <div className="text-items  justify-between ">
        <h1 className=' text-3xl  font-bold'>LEARN FROM THE EXPERTS</h1>
        <Link to='/courses'>

        <button className=' bg-yellow-300 mt-2 p-2 rounded-sm font-bold text-sm'>Explore Now</button>
        </Link>
      </div>
        <img src={vg} alt="imageslogo" className=' mt-4 sm:m-0 object-contain h-72 ml-3'  />
      </div>
      <div className=' bg-black py-5 '>
        <h2 className=' text-center  font-bold text-lg text-yellow-300'>OUR BRANDS</h2>
        <div className='flex justify-evenly text-white text-2xl mt-3'>
        <CgGoogle className='hover:text-yellow-300' />
          <CgYoutube  className='hover:text-yellow-300'/>
          <SiCoursera className='hover:text-yellow-300' />
          <SiUdemy className='hover:text-yellow-300' />
          <DiAws className='hover:text-yellow-300' />
       
        </div>
      </div>
        <div className=' object-contain sm:mx-44 my-5 shadow-md rounded-md border'>
          <video src={introVideo} 
            controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback></video>
        </div>
    </section>
  );
};

export default Home;
