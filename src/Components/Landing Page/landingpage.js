import React from "react";
import "../Style/LandingPage.scss";
import JoinUsForm from "../JoinUsForm/JoinUsForm";

const LandingPage = () => {
    return(
        <div className="pt-7">
            <div>
                <div className="w-full ">
                <img class="image w-full h-80 absolute" src="https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGludmVzdG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                    <div className="relative grid grid-cols-2 pt-10">
                    <h1 className="text-left col-start-2">Making investment simpler, accessible and democratic. </h1>
                    <h2 className="text-left col-start-2 pt-3">When it comes to investment, alternative investment is the best option!</h2>
                    <button onClick={JoinUsForm} type="button" className="btn btn-primary col-start-2 pt-10 font-bold text-xl">Join Us</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LandingPage;