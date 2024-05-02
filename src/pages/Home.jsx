import React from 'react';
import Carosel from '../component/Carosel'
import Buy from '../component/Buy'
import Banner from '../component/Banner'
import Gallery from '../component/Gallery'
import Cart from '../component/Cart'
import BrandLogo from '../component/BrandLogo'
import Testmon from '../component/Testmon'

const Home = () => {
    return (
        <>
            <Carosel />
            <Banner />
            {/* <Testmon/> */}
            <Gallery />
            <Cart />
            <BrandLogo/>


        </>
    );
}

export default Home;
