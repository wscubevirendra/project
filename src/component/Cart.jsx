import React, { useContext } from 'react';
import { MainContext } from '../contaxt/Context';
import Share from "../component/Share";

const Cart = () => {
    const cart = [
        {
            image: "img/IMG-20240422-WA0004.jpg",
            name: "Lehnga",
        } , {
            image: "img/IMG-20240422-WA0005.jpg",
            name: "Lehnga",
        }, {
            image:"img/saree/3.jpeg",
            name: "Saree Design",
        },  {
            image: "img/IMG-20240422-WA0007.jpg",
            name: "Gaon",
        },  {
            image: "img/IMG-20240422-WA0008.jpg",
            name: "Gaon",
        },  {
            image: "img/IMG-20240422-WA0009.jpg",
            name: "Gaon",
        },  {
            image: "img/IMG-20240422-WA0010.jpg",
            name: "Gaon",
        },  {
            image:"img/saree/5.jpeg",
            name: "Saree Design",
        }, {
            image:"img/saree/1.jpeg",
            name: "Saree Design",
        },  {
            image: "img/IMG-20240422-WA0049.jpg",
            name: "Kurtie",
        },  {
            image: "img/IMG-20240422-WA0044.jpg",
            name: "Kurtie",
        },  {
            image: "img/IMG-20240422-WA0060.jpg",
            name: "Gaon",
        },
        
       
        
        
    ]
    console.log(cart)
    const { handleWhatsAppClick ,handleShareClick} = useContext(MainContext)
    return (
            <div className='grid grid-cols-2 md:grid-cols-4  gap-4 justify-center mb-5'>
                {
                    cart.map((data, index) => {
                        return (
                            <div key={index} className='border relative transition duration-300 ease-in-out hover:scale-110 p-2  hover:shadow-lg'>
                                              <Share onClick={handleShareClick} data={data.name}/>

                                <div className='mx-auto h-[80%] '><img className='h-[100%] w-[100%]' src={data.image} alt="" /></div>
                                <div className='text-center'>
                                    <h1 className='text-[#5b5b5f] text-[10px] md:text-[17px] uppercase  font-bold mt-3'>{data.name}</h1>
                                    <button onClick={() => { handleWhatsAppClick(data) }} className="relative text-[10px] my-3 hover:bg-[blue] md:px-7 px-4 md:text-[16px] inline-flex text-white items-center justify-start py-2 overflow-hidden font-semibold  transition-all duration-150 ease-in-out rounded  bg-gray-800 group">

                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
    )
}
export default Cart;
