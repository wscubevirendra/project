import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Grandmenu = () => {
    const [isActive, setIsActive] = useState(false);
    const handleMenuClick = () => {
        setIsActive(!isActive);
    };
    return (
            <header className='text-[10px] bg-[white] px-4' style={{ zIndex: '1000' }}>
                <div className="container ">
                    <nav className={isActive ? 'active' : ''}>
                        <div>
                        <div className="menu-icons" onClick={handleMenuClick}>
                            <i className="fas text-black text-3xl fa-bars"></i>
                            <i className="fas text-black text-3xl fa-times"></i>
                        </div>
                        <Link to='/' className='my-4'>
                            <img src="img/logo.jpg" className="md:cursor-pointer w-18 h-16" alt="logo" />
                        </Link>
                        </div>
                        <ul class="nav-list mr-10">
                            <li className='md:hidden mt-[20px]'>
                                <Link to='' class="logo">
                                    <img src="img/logo.jpg" className="md:cursor-pointer w-18 h-12" alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link onClick={handleMenuClick} className='text-[10px]' to='/'>Home</Link>
                            </li>
                            <li>
                                <Link className='text-[10px] ' to=''>Category<i class="fas  fa-caret-down"></i></Link>
                                <ul style={{ width: '12rem' }} class="sub-menu p-2">
                                    <li>
                                     <Link onClick={handleMenuClick} to='/kurties_design'> Kurties </Link>
                                    </li>
                                    <li>
                                 <Link onClick={handleMenuClick} to='/Saree_design'>Shadi 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleMenuClick} to='/langha_Choli_design'>Langha Choli </Link>
                                    </li>
                                    <li>
                              <Link onClick={handleMenuClick} to='/gaon_design'>Gaun</Link>
                                    </li>
                                 
                                   
                                </ul>
                            </li>

                            <li>
                                <Link  onClick={handleMenuClick} to='/about'>ABOUT US</Link>
                            </li> 
                            <li>
                                <Link  onClick={handleMenuClick} to='/contact'>Contact Us</Link>
                            </li>
                           
                        </ul>
                    </nav>
                </div>
            </header>
        
    );
}
export default Grandmenu;










