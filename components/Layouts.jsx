import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
// import Navigation from './Navigation';
// import { AuthContext } from '../contexts/AuthProvider';

function Layouts({ children }) {
  //const { user, setAuthUser } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Ozone.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navigation /> */}
      {children}
    </>
  );
}

export default Layouts;
