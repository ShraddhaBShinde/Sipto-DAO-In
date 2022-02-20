import React from "react";
import "../Style/navbar.css"
import Images from "../../Images/siptologo"

function Navbar() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light flex p-0">
  <div class="container-fluid ">
    <img class="object-contain h-12 w-40 " src={Images.siptologo}></img>
    <div class="flex gap-3 rounded p-2 w-1/2 ">
          <i class="bi bi-search pt-1"></i>
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span class="border-0" id="search-addon"></span>
        </div>
        <ul class="navbar-nav">
        <li class="nav-item pr-7">
          <a class="nav-link active text-2xl font-bold hover:underline" aria-current="page" href="About">About</a>
        </li>
        </ul>
  </div>
</nav>
</>
    );
};

export default Navbar;