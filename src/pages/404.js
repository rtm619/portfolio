import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import Button from '../components/Button/Button';
import Triangle from '../components/SVG/Triangle';
import Metadata from '../components/Metadata/Metadata';
import Header from '../components/Header/Header';

const NotFoundPage = () => (
  <>
    <Metadata title="404 - Not Found" description="404 Not Found Error Page" />
    <StaticQuery
      query={graphql`
        query{
          contentfulHeader {
            contentful_id
            name
            menuItems {
              contentful_id
              name
              title
              link {
                title
                url
              }
            }
          }
        }
    `}
      render={(data) => (
        <Header isWhite headerData={data.contentfulHeader} />
      )}
    />
    <div className="flex flex-wrap w-full h-screen">
      <div className="flex flex-wrap w-full my-auto">
        <h1 className="w-full px-30 text-white text-center mx-auto font-SpartanBold text-64">404</h1>
        <h2 className="w-full px-30 text-white text-center mx-auto font-SpartanBold text-48 my-30">Not Found</h2>
      </div>
      <div className="flex w-full mb-60">
        <Button component="Link" to="/home" title="Home" className="not-found-btn mx-auto flex h-40 relative overflow-hidden">
          <span className="z-1 mdl:text-white text-black font-SpartanMedium absolute top-0 bottom-0 flex justify-center items-center leading-normal text-14 w-full py-5">Go to Home</span>
          <Triangle className="text-orange fill-current w-full h-full" />
        </Button>
      </div>
    </div>
  </>
);

export default NotFoundPage;
