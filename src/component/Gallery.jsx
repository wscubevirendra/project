import React from 'react';

const Gallery = () => {
    return (
    
            <div className='grid grid-rows-2  p-2'>
                {/* first row setop */}
                <div className='grid grid-cols-2 gap-2'>

                    <div >  <img src="img/gallery/2.jpg" alt="" /></div>

                    <div >  <img src="img/gallery/3.jpg" alt="" /></div>

                </div>
                {/* secound row */}
                <div className='grid grid-cols-2 mt-1 gap-2'>

                <div >  <img src="img/gallery/1.jpg" alt="" /></div>
                <div >  <img src="img/gallery/4.jpg" alt="" /></div>

                </div>
            </div>
     
    );
}

export default Gallery;
