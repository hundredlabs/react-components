import "./KongNav.css"
import KongNavMenu from "./KongNavMenu/KongNavMenu";
import image from "../../../img/sections/KongNav/dropdown-arrow.svg"
import React from "react";
import navlogo from "../../../img/sections/KongNav/rocket.png"

const KongNav = () => {
    const [isOpen, setOpen] = React.useState(false)
    function bodyClassName() {
        if (isOpen) {
            document.body.className = "dullBackground"
        } else {
            document.body.className = "brightBackground"
        }
    }

    return (
        <div className={bodyClassName()}>
            <div className="kongnav-container">
                <nav className="kongnav">
                    <div >
                        <a href="" className="kong-logo"><img src={navlogo} alt="" /></a>
                        <ul className="kongnav-menu">
                            <li>
                                <div onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(!isOpen)

                                }}>
                                    <a> <div className="product-menu">
                                        Products</div> <img className={isOpen ? "open" : "close"} src={image} alt="" /></a>
                                    {isOpen && (<KongNavMenu />)}
                                </div>
                            </li>
                            <li className="kongnav-menu-2">Solution</li>
                            <li className="kongnav-menu-2">Customers</li>
                            <li className="kongnav-menu-2">Resources</li>
                            <li className="kongnav-menu-2">Company</li>
                        </ul>
                    </div>
                    <div className="kongnav-link">
                        <a href="">Login</a>
                        <button className="demoBtn">Get a Demo</button>
                        <button className="startBtn">Start for Free</button>
                    </div>
                </nav>
                <hr />
            </div>
        </div>
    )
}
export default KongNav;