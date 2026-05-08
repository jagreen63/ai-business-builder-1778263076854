import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Top-Rated Pressure Washing Services | Home Improvement Solutions</title>
        <meta name="description" content="Get quick quotes for pressure washing and exterior cleaning services for residential and commercial properties. Book your cleaning today!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
