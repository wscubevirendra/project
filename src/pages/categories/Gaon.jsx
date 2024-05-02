import React, { useContext } from 'react';
import { MainContext } from '../../contaxt/Context';
import Share from "../../component/Share";



const Gaon = () => {
   const cart=[
    {
        image:"img/100.jpeg",
        name: "Gaon Design",
    },{
        image:"img/101.jpeg",
        name: "Gaon Design",
    },{
        image:"img/102.jpeg",
        name: "Gaon Design",
    },{
        image:"img/103.jpeg",
        name: "Gaon Design",
    },
    {
        image:"img/IMG-20240422-WA0007.jpg",
        name: "Gaon Design",
    },
    {
        image:"img/IMG-20240422-WA0008.jpg",
        name: "Gaon Design",
    },
    {
        image:'img/IMG-20240422-WA0009.jpg',
        name:'Gaon Design'
    },{
        image:'img/IMG-20240422-WA0010.jpg',
        name:'Gaon Design'
    }, {
        image: "img/IMG-20240422-WA0010.jpg",
        name: "Gaon Design",
      
    } , {
        image: "img/IMG-20240422-WA0011.jpg",
        name: "Gaon Design",
    } , {
        image:"img/IMG-20240422-WA0012.jpg",
        name: "Gaon Design",
    },{
        image:"img/IMG-20240422-WA0014.jpg",
        name: "Gaon Design",
    }
   
   ]
   
    const { handleWhatsAppClick,handleShareClick} = useContext(MainContext)
    return (
        <div className='my-8 mt-[100px] p-3'>
              <div className='grid grid-cols-2 md:grid-cols-4  gap-4 justify-center mb-5'>
                {
                    cart.map((data, index) => {
                        return (
                            <div key={index} className='border p-2  relative hover:shadow-lg'>
                                              <Share onClick={handleShareClick} data={data.name}/>

                                <div className='mx-auto transition duration-300 ease-in-out hover:scale-110 h-[80%]'><img className='h-[100%] w-[100%]' src={data.image} alt="" /></div>
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

            </div>
    );
}

export default Gaon;
