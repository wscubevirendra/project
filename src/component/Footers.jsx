import React,{useContext} from 'react';
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs"
import { AiOutlineArrowUp } from "react-icons/ai"
import { Link } from 'react-router-dom';
import { MainContext } from '../contaxt/Context';

const Footers = () => {
  const {scrollToTop} = useContext(MainContext);
  const socialMediaLinks = [
    {
      name: 'Facebook',
      icon: BsFacebook,
      url: 'https://www.facebook.com/mahadevcreatiom.shop',
    },
    {
      name: 'WhatsApp',
      icon: BsWhatsapp,
      url: 'https://api.whatsapp.com/send/?phone=9662839699&text=Hello%2C+I+am+interested+in your services',
    },
    {
      name: 'Instagram',
      icon: BsInstagram,
      url: 'https://www.facebook.com/mahadevcreatiom.shop',
    },
  ];
  const handleSocialClick = (url) => {
    window.location.href = url
  }
  
 
  return (
    <div>

        <footer style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} className="relative bg-[#D4D4D4] pt-8 pb-6">
          <div className="container mx-auto px-4">
            <div >
              <div className='grid gap-5 md:grid-cols-3'>
                <div >
                  <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                  <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                    Find us on any of these platforms, we respond 1-2 business days.
                  </h5>
                  <div className="mt-6  flex lg:mb-0 mb-6 ">
                    {socialMediaLinks.map((socialMedia, index) => (
                      <socialMedia.icon className="shadow  cursor-pointer font-normal text-[30px] items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        key={index}
                        onClick={() => handleSocialClick(socialMedia.url)}

                      />
                    ))}
                  </div>
                </div>
                <div className=' md:ml-10 '>
                  <span className="block uppercase text-md text-[#000000] font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled text-[12px]">
                    
                    <li>
                      <Link onClick={scrollToTop}  to='/about' className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm" >About Us</Link>
                    </li>
                    <li>
                      <Link onClick={scrollToTop}   to='/bulk' className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm" >Contact Us</Link>
                    </li>
                    <li>
                      <Link onClick={scrollToTop}  to='/' className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm" >Home Page</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="block uppercase text-[16px] text-[#000000] font-semibold mb-2">Registation Office</span>
                  <ul className="list-unstyled text-sm ">
                    <li>   F-78/B, Avadh textile market,
Opp new bombay market,
Surat, 395010,Gujrat, India</li>
                    <li className='mt-2'>mahadevcreation78b@gmail.com</li>
                    <li className='mt-2'>+91 9662839699</li>
                   
                  </ul>
                </div>
              </div>
              <div className="container flex justify-end">
                    <button onClick={scrollToTop} className="scroll-to-top-button inline-block border border-[red] rounded-full">
                        <AiOutlineArrowUp style={{border:'2px solid blue'}} className="w-[30px]  rounded-full  text-center animate-bounce h-[30px] text-[blue]" />
                    </button>
                </div>
            </div>
            <hr className="my-6 border-blueGray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-2 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold ">
                All Right Reserved. Copyright © MAHADEV CREATION
                </div>
              </div>
            </div>
          </div>
        
        </footer>
      </div>

  );
}

export default Footers;
