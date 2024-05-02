import React from 'react';
import {
  BiCurrentLocation, BiLogoWhatsapp
} from "react-icons/bi"
import { MdAddCall } from "react-icons/md";




export default function Contact() {
  return (
    <div className='w-full mt-10'>
    
       <iframe className='w-full h-[90vh] p-20' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.9692094848833!2d72.84747247380264!3d21.193382082106886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e5320202ff9%3A0x5dc7a7a21381de3f!2sAvadh%20Textile%20Market!5e0!3m2!1sen!2sin!4v1713846911146!5m2!1sen!2sin" frameborder="0"
                    allowfullscreen ></iframe>
    
      
                <div className=" w-fulln  grid md:grid-cols-3 py-20 gap-10   grid-cols-1  px-3 ">
                  <div  style={{boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}} >
                    <div className="flex p-10 items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100  text-primary">
                        <MdAddCall  className='text-[40px]'/>

                        </div>
                      </div>
                      <div className="ml-2 grow">
                        <p className="mb-2 font-bold dark:text-white">
                          Contact Us
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                        mahadevcreation78b@gmail.com
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                        +91 9662839699
                        </p>
                      </div>
                    </div>
                  </div>
                  <div style={{boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}  >
                    <div className="flex p-10 items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <BiCurrentLocation className='text-[40px]' />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                          Address
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          S-1-A, Gopalpura Bypass Rd, opp. Hotel Grand Safari, Shri Gopal Nagar, Arjun Nagar, Jaipur, Rajasthan 302018
                        </p>
                      </div>
                    </div>
                  </div>
                  <div style={{boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}} >
                    <div className="align-start p-10 flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <BiLogoWhatsapp className='  text-[40px]' />
                        </div>
                      </div>
                      <div className="ml-6 grow">

                        <a href="https://api.whatsapp.com/send/?phone=9662839699&text=Hello%2C+I+am+interested+in your services">
                          <p className="mb-2 font-bold dark:text-white">ChatNow</p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                          +9662839699
                          </p>
                        </a>
                      
                       
                      </div>
                    </div>
                  </div>
                </div>
       <div>

       </div>

    </div>
  )
}

