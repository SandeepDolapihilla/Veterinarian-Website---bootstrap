// TopBar.js
import React from "react";

const TopBar = () => {
  return (
    <div className=" row bg-dark text-white py-2 align-items-center container-fluid ">
      <div className="col-2 text-center">
        {/* Logo */}
        <h2>WMS</h2>
      </div>
      <div className="col-7">
        {/* Search Box */}
        <form className="d-flex justify-content-end">
          <input
            className="form-control w-50"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default TopBar;
