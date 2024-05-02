import React from 'react';

const Abouts = () => {
    return (
        <div className='px-6 w-full  md:px-0 mb-8'>
           <div className='grid text-justify md:grid-cols-2 mt-10'>
   <div className='md:w-[400px] h-[400px] sm:w-[200px]  flex justify-center items-center'>
      <img className='h-full w-full' src="img/IMG-20240422-WA0087.jpg" alt="" />
      {/* <img className='h-full w-full' src="img/IMG-20240419-WA0007.jpg" alt="" /> */}
   </div>
   <div className='flex px-2 flex-col gap-3'>
      <p className='text-lg text-[#000]'>Mahadev Creation</p>
      <hr />
      <p className='text-sm text-[black]'>Mahadev Creation is one of the leading multi-brand organizations in India, offering expert guidance to customers for project planning and showcasing unique and luxurious designs based on current trends. As a collaboration of esteemed brands, Mahadev Creation brings together a range of offerings from companies like Design Gaon, Saree Emporium, Kurti Couture, and Lehnga Loft.
      </p>
      <p className='text-sm text-[black]'>Our dedicated team provides innovative ideas drawn from these diverse channels, ensuring personalized assistance to clients and maintaining a commitment to product excellence. With manufacturing units situated in key locations such as Ahmedabad, Delhi, Surat, and Mumbai, Mahadev Creation delivers a wide selection of high-quality sarees, kurtis, lehngas, and other traditional attire to both domestic and international markets.
      <br />
      With nearly four decades of combined experience, each brand under Mahadev Creation ensures meticulous attention to detail and ergonomic designs, resulting in products that are not only stylish but also comfortable and functional.
      </p>
   </div>
</div>

<div className='grid text-justify md:grid-cols-2 mt-10'>
    
    <div className='flex px-2 flex-col gap-3'>
        <p className='text-lg text-[#000]'>Mahadev Creation</p>
        <hr />
        <p className='text-sm text-[black]'>According to Mahadev Creation's principles, we don't operate as distributors or dealers in the market. Our work is highly esteemed in the industry for its comfort and stylish designs, and our products are consistently in high demand.

We believe in focusing on the destination, not the difficulties. Our entire team is driven by enthusiasm and energy. We take immense pride in providing customer service that is not just good but legendary.

</p>
        <p className='text-sm text-[black]'>Healthy Seating Instructions:
Prolonged sitting can increase stress on the back, neck, shoulders, arms, and legs, and can put pressure on the spinal discs. That's why it's essential to use ergonomic seating options, such as our expertly crafted chairs, sarees, kurtis, and lehngas, which provide adequate support and encourage good posture. Even with ergonomic seating, here are some important guidelines for maximizing their effectiveness:

ELBOW ANGLE: When wearing our elegant attire, ensure you maintain a comfortable posture. Stand or sit with your upper arms parallel to your spine. Rest your hands gracefully, adjusting your posture as needed to maintain a natural alignment.</p>
    </div>
    <div className='md:w-[400px] h-[400px] sm:w-[200px] flex justify-center items-center'>
      <img className='h-[90%]' src="img/IMG-20240419-WA0005.jpg" alt="" />
   </div>
</div>

</div>
    );
}
export default Abouts;
