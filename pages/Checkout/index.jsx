import React, { useContext, useEffect } from "react";
import Footer from "../../components/Partials/Footer";
import Navigation from "../../components/Partials/Navigation";
import CheckOut from "../../components/Checkout";

const CheckOuts = () => {

  return (
    <>
      <Navigation />  
       <div>
        <CheckOut />
       </div>
      <Footer />
    </>
  );
};

export default CheckOuts;
