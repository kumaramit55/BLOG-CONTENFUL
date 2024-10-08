import axios from 'axios'
import React, { useState } from 'react'

function Footer() {
  const [email,setEmail]=useState(null)
  const notify= async ()=>{
    console.log(email)
    try {
      const url=`https://api.contentful.com/spaces/${import.meta.env.VITE_SPACE_ID}/environments/master/entries`
      const headers={
        Authorization: `Bearer ${import.meta.env.VITE_CMA}`,
        "Content-Type": "application/vnd.contentful.management.v1+json",
        "X-Contentful-Content-Type": "notifications"
      }
  
      const sendemail={
        fields:{
          
          email:{
            "en-US":email
         
        }
      }
    }
  
      const response=await axios.post(url,sendemail,{headers})
      console.log(response)
      
    } catch (error) {
      console.log(error)
      
    }

  }
  return (
    <div className='mt-20  '>
      <h1 className='text-3xl font-bold'>Follow my journey</h1>
      <p className='text-gray-600 text-xl w-11/12  sm:w-1/2 mx-auto my-3  '>Get notified about updates and be the first to get early access to the new, safer, and smarter way to archive your files.</p>
      <div className='p-2 '>
        <input type="email" placeholder='Enter Your Email To Get Noitfy' 
        className='p-2 text-xl w-3/5 sm:w-1/2 ' 
        onChange={(e)=>{

            setEmail(e.target.value)
          
        }
        }/>
        <button className='bg-gray-800 text-white  p-2 text-xl' 
        onClick={()=>{if(email !=null) notify()}}>Send It</button>
        
      </div>
      <h5 className='text-gray-500 my-1  w-11/12 sm:w-1/2 mx-auto'>By subscribing to our newsletter you accept to receive recurring emails about our product and company</h5>

 
    </div>
  )
}

export default Footer
