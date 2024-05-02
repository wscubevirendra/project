import React from 'react';


const BrandLogo = () => {
    return (
      
      <div>
        <h1 className='text-[35px] text-center text-[#9d6a37]'>Explore Popular Brands</h1>
    
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6'>
          <div>
            <img className='w-full  md:h-[140px]' src="img/IMG-20240422-WA0034.jpg" alt="" />
          </div>
    
          <div>
            <img className='w-full h-[80px] md:h-[140px] ' src="img/IMG-20240422-WA0015.jpg" alt="" />
          </div>
    
          
    
          <div>
            <img className='w-full h-[80px] md:h-[140px]' src="img/IMG-20240422-WA0007.jpg" alt="" />
          </div>
        </div>
        <hr />
      </div>
    
    
    );
}

export default BrandLogo;
