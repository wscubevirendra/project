import React from 'react';
import { Outlet } from 'react-router-dom';
import Footers from '../component/Footers';
import Grandmenu from '../component/Grandmenu';




const Main = () => {
    return (
        <>
            <Grandmenu />
            <Outlet />
            <Footers />
        </>
    );
}
export default Main;
