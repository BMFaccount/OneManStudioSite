import React from "react";
import './navbar.css';

function NavBar(){
    return (
        <>
            <navbar>
                <div className="NavMenuContainer">
                    <img src="./images/onemanlogo2.png"></img>
                    <div className="NavMenu">
                        <h3 className="LogoFont">ONE
                            MAN 
                            STUDIO
                        </h3>
                        <div className="NavMenuButtons">
                            <a class="link" href="#">HOME</a>
                        </div>
                    </div>
                </div>
            </navbar>
        </>
    )
}
export default NavBar;