import './NavclickUp.css';
import React from 'react';
import arrowImage from "../../../img/sections/hero/arrow.svg"
const ProductBar = () => (
    <div className="menuList">
        <div>
            <h1>PRODUCT</h1>
            <span className='newTag'>new</span>
            <div className='header'>
                <div className='header-logo'>

                    <img className='img-header' src='./NavBarImg/click.png' alt="logo" />
                    <p4>ClichUp</p4><p2>3.0</p2>
                </div>
                <div className='header-sentence'>
                    Unlock the next generation of productivity<p3> →</p3>
                </div>
            </div>
            <div className='menuBar'>
                <div className='product-menu-list'>
                    <div>
                        <img className='img-list' src='./NavBarImg/task.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Tasks</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='product-menu-list'>
                    <div>
                        <img className='img-list' src='./NavBarImg/docs.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Docs</h1>

                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='product-menu-list'>
                    <div>
                        <img className='img-list' src='./NavBarImg/trophy.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Goals</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
            </div>

            <div className='menuBar'>
                <div className='product-menu-list'>
                    <div>
                        <img className='img-list' src='./NavBarImg/white.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>WhiteBoard</h1>

                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='product-menu-list'>
                    <div>
                        <img className='img-list' src='./NavBarImg/dash.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Dashboard</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='product-menu-list'>
                    <div>
                        <img className='img-list' src='./NavBarImg/has.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Chat</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
            </div>
            <button>See All Features    <div className='btnP'>→</div></button>
        </div>
        <hr className='hr' />
        <div className='platform-menu'>
            <h1 className='platform-h1'>PLATFORM</h1>
            <div className='platform-menu-list'>
                <div className='platform-list'>
                    <div>
                        <img className='img-list' src='./NavBarImg/temp.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Templates</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='platform-list'>
                    <div>
                        <img className='img-list' src='./NavBarImg/app.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>ClickApps</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
            </div>
            <div className='platform-menu-list'>
                <div className='platform-list'>
                    <div>
                        <img className='img-list' src='./NavBarImg/flower.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Integrations</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='platform-list'>
                    <div>
                        <img className='img-list' src='./NavBarImg/views.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Views</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
            </div>
            <div className='platform-menu-list'>
                <div className='platform-list'>
                    <div>
                        <img className='img-list' src='./NavBarImg/hier.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Hierarchy</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='platform-list'>
                    <div>
                        <img className='img-list' src='./NavBarImg/auto.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Automotions</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


const NavclickUp = ({ image }) => {
    const [isOpen, modifystate] = React.useState(false)
    return (
        <nav className='clickup-navigation'>
            <div>
                <img src={image} alt="design" />
                <h1>ClickUp</h1>
            </div>

            <a href="" className="features">
                <div onMouseOver={(e) => {
                    e.preventDefault();
                    modifystate(!isOpen)
                }}>
                    <span className='product-menu'>
                        <div>Product</div>
                        <img className={isOpen ? "open" : "close"} src={arrowImage} alt="" />
                    </span>
                    {isOpen && (<ProductBar />)}
                </div>
            </a>
            <a href="#sub">Solution</a>
            <a href="#sub">Learn</a>
            <a href="#sub">Pricing</a>
            <a href="#">Enterprises</a>
            <a className='contact' href="#">Contact Sales</a>
            <div className='buttons'>
                <button className='sign-btn-nav'>Sign Up</button>
                <button className='log-btn-nav'>Log in</button>
            </div>
        </nav >

    );
}
export default NavclickUp;
