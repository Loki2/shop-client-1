import React, { useContext, useEffect } from "react";
import Router from "next/router";
import { AuthContext } from "../../contexts/AuthProvider";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_USER } from "../../graphql/User";

const Header = () => {
  const { user, signout, setAuthUser } = useContext(AuthContext);
  const { data } = useQuery(QUERY_USER);

  //console.log("User from Header", user);

  useEffect(() => {
    if (data) {
      setAuthUser(data.user);
    }
  }, [data]);
  return (
    <>
      {/* Header */}
      <header>
        <div className="search-wrapper">
          <span className="ti-search" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>
        <div className="social-icons">
          <span className="ti-home" onClick={() => Router.push("/")}></span>
          <span className="ti-bell" />
          <span
            className="ti-shopping-cart"
            onClick={() => Router.push("/Carts")}
          >
          </span>
          <span className="ti-arrow-circle-right" onClick={() => signout()} />
          <div></div>
        </div>
      </header>
    </>
  );
};

export default Header;
