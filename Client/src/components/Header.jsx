import React from "react";

function Header(props) {
  return (
    <>
      <nav className=" min-h-18 navbar navbar-dark bg-dark p-3 mb-3 flex justify-around align-middle">
        <li className={`font-bold text-orange-300 quintessential-heading list-none`}>{props.name}</li>
      </nav>
      
    </>
  );
}

export default Header;
