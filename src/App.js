import React, { useState, useEffect } from "react";
import Axios from "axios";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import { BsTelephoneFill, BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube, AiFillLinkedin } from "react-icons/ai"

import './App.css';

const App=() =>{
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")

  const [formErrors,setFormErrors]=useState({})
const [isSubmit,setIsSubmit]=useState(false)

  const data={username,email}
  
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(username,email)
    }
  },[username,email,formErrors,isSubmit])

  const onSubmitForm = async (e) => {
    console.log(data)
    e.preventDefault()
    setIsSubmit(true)
    setFormErrors(validate(data))
    Axios.post("http://localhost:3003/adduser", {username,email}).then(
       (res) => console.log(res)
    );
    setEmail("")
    setUsername("")
    console.log(username,email)
  }

  const validate = (values) => {
    const errors = {}
    if (!values.username) {
      errors.username="*Username is Required"
    }
    if (!values.email) {
      errors.email="*Email is Required"
    }
    return errors
  }

  return (
    <div >
  <div className="bg-gray-900 bg-cover w-100vw h-100vh p-12 md:p-0 bg-container pb-4 text-white md:pl-20 md:pt-8 md:pr-20 border border-b-1 border-l-0 border-gray-800">
        <div className='flex flex-row md:justify-between pb-8'>
          <h1 className='font-bold text-3xl md:mt-4'> OPENAUTO</h1>
          <div className='info-container ml-20 flex sm:hidden md:block flex-row '>
            <div className='flex flex-row mt-4 pt-2'>
              <BsTelephoneFill className='text-gray-200 mt-1' size={20}/>
              <h3 className='text-md tracking-wide font-semibold  ml-2 text-gray-400'>+91 987654321</h3>
            </div>
            <div className='flex flex-row mr-8 mt-4 ml-8 pt-2'>
              <MdEmail className='text-gray-200 mt-1' size={19} />
              <h3 className='text-md font-semibold tracking-wide ml-2 text-gray-400'>service@openauto.ca</h3>
            </div>
            <div className='flex flex-row mt-2'>
              <button className='border border-solid border-white text-md rounded-full w-[340px] p-4'>Download the mobile app</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className='flex flex-col items-center md:items-start justify-center mt-16 '>
            <div className='md:mr-32 '>
             <h1 className='text-3xl md:text-left text-center font-bold leading-relaxed mt-2'>Vehicle Maintanance <br /> From The Comfort of <br />Your Home</h1>
             <p className='text-gray-400 md:text-left mt-8 text-md text-center'>Open Auto Soothes the hassle of maintaining <br/> your vehicle and helps you deal with <br/> unexpected repairs worry-free.</p>
            </div>
            <form method="post" className='flex flex-col mt-12' onSubmit={onSubmitForm}>
              <div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='outline-none bg-transparent border rounded-full p-4 pl-8 text-md h-16 w-[350px]' placeholder='Enter Your Name' />
                <p className="text-red-500 text-md mt-2 ml-4 mb-2">{formErrors.username}</p>
              </div>
              <div className='mt-4 mb-4'>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className='outline-none bg-transparent border rounded-full p-4 pl-8 text-md h-16 w-[350px]' placeholder='Enter Your Email' />
               <p className="text-red-500 text-md mt-2 ml-4 mb-2">{formErrors.email}</p>
              </div>
              <div>
                <input type="submit" value="Submit"
                  className='cursor-pointer outline-none text-center bg-transparent border font-bold rounded-full p-4 pl-8 text-xl h-16 w-[350px]  hover:bg-purple-700 hover:border-0' placeholder='Enter Your Name' />
              </div>
            </form>
          </div>
          <div className="">
          <img src={img2} className="h-[340px] md:h-[450px] md:ml-20 mt-32" alt="" />
          </div>
        </div>
      <div className='flex flex-row justify-center md:justify-end md:mt-8 mt-16 mb-20'>
        <a href='www.facebook.com'><FaFacebookF className=' mr-8' size={35}/></a>
        <a href='www.twitter.com'><AiOutlineTwitter className='mr-8' size={37}/></a>
        <a href='www.youtube.com'><AiFillYoutube className=' mr-8' size={37}/></a>
        <a href='www.linkedin.com'><AiFillLinkedin className=' mr-8' size={37}/></a>
        <a href='www.instagram.com'><BsInstagram className='mr-8' size={32}/></a>
      </div>
      </div>
      <div className='flex flex-col items-center justify-center md:flex-row md:justify-between bg-gray-900 pl-24 pt-12 pb-16 border border-b-1 border-l-0 border-gray-800'>
         <img src={img1} className="h-[350px] md:ml-12 mr-16 md:mr-40 order-2 md:order-1" alt="" />
         <div className="flex items-center md:items-start order-1 text-center flex-col mr-20 md:mr-52 mt-4 mb-12">
          <h1 className='text-3xl text-white font-bold md:text-left leading-relaxed'>Focus on Time Saving</h1>
          <p className='text-md text-gray-400 mb-8 md:mt-8 md:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknoun printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, ut also the leap into electric typesetting, remeining essentially unchanged. It was</p>
          <button className=' border-2 border-solid border-white text-md rounded-full h-16 mt-4 w-[350px] md:ml-0 p-3 text-white'>Download the mobile app</button>
        </div>
      </div>
      <footer className='bg-gray-900 pl-12 md:pl-24 pt-12 pb-12'>
        <div className='flex flex-col md:flex-row md:justify-between '>
          <h1 className='font-bold text-white text-5xl md:text-2xl text-center md:text-left'> OPENAUTO</h1>
          <div className='flex flex-row justify-between md:justify-center mt-20 md:mt-0'>
            <div className='flex flex-row pt-2'>
              <BsTelephoneFill className='text-gray-200 mt-1' size={25}/>
              <h3 className='text-xl tracking-wide font-semibold  ml-2 text-gray-400'>+91 987654321</h3>
            </div>
            <div className='flex flex-row mr-8 ml-8 pt-2'>
              <MdEmail className='text-gray-200 mt-1' size={27} />
              <h3 className='text-xl font-semibold tracking-wide ml-2 text-gray-400'>service@openauto.ca</h3>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center md:flex-row md:justify-between'>
          <p className='text-gray-400 text-md mt-20 md:mt-4'>Open Auto @ all rights reserved</p>
          <div className="md:hidden flex flex-row justify-around  mt-20">
            <p className="text-gray-400 text-2xl mr-20">Privacy polici</p>
            <p className="text-gray-400 text-2xl mr-20">Privacy polici</p>
            <p className="text-gray-400 text-2xl">Privacy polici</p>
          </div>
          <div className='flex flex-row text-white mt-20 mb-12 mr-8'>
        <a href='www.facebook.com'><FaFacebookF className='mr-12' size={35}/></a>
        <a href='www.twitter.com'><AiOutlineTwitter className='mr-12' size={37}/></a>
        <a href='www.youtube.com'><AiFillYoutube className='mr-12' size={37}/></a>
        <a href='www.linkedin.com'><AiFillLinkedin className='mr-12' size={35}/></a>
        <a href='www.instagram.com'><BsInstagram className='' size={32}/></a>
      </div>
        </div>
      </footer>
  </div>
  );
}

export default App;
