import React from "react";
import './navbar.css';

function NavBar(){
    return (
        <>
            <navbar>
                <div className="NavMenuContainer">
                    <img src="./images/onemanstudioupdated.png"></img>
                    <div className="NavMenu setBackgroundColorToPrimaryColor">
                        <h3 className="LogoFont setColorToBackgroundColor">ONE
                            MAN 
                            STUDIO
                        </h3>
                        <div className="NavMenuButtons">
                            <a class="link setColorToBackgroundColor" href="#">HOME</a>
                        </div>
                    </div>
                </div>
            </navbar>
        </>
    )
}
export default NavBar;