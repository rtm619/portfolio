import React from 'react';

import Button from '../components/Button/Button';
import Triangle from '../components/SVG/Triangle';
import Metadata from '../components/Metadata/Metadata';

const NotFoundPage = () => (
  <>
    <Metadata title="404 - Not Found" description="404 Not Found Error Page" />
    <div className="flex flex-wrap w-full my-60">
      <h1 className="w-full px-30 text-white text-center mx-auto font-SpartanBold text-64">404</h1>
      <h2 className="w-full px-30 text-white text-center mx-auto font-SpartanBold text-48 my-30">Not Found</h2>
    </div>
    <div className="block w-full">
      <Button component="Link" to="/home" title="Home" className="not-found-btn mx-auto flex h-40 relative overflow-hidden">
        <span className="z-1 mdl:text-white text-black font-SpartanMedium absolute top-0 bottom-0 flex justify-center items-center leading-normal text-14 w-full py-5">Go to Home</span>
        <Triangle className="text-orange fill-current w-full h-full" />
      </Button>
    </div>
  </>
);

export default NotFoundPage;
