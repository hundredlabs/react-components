import './ClickupNav.css';
import React from 'react';
import './ClickupResponsive.css';
import { webProductMenu, productSubList } from './ProductList';


const ProductBar = () => (
    <div className="product-menu-List">
        <div>
            <h1>PRODUCT</h1>
            <span className='newTag'>new</span>
            <div className='header'>
                <div className='header-logo'>

                    <img className='img-header' src='./img/sections/navigations/ClickupNav/click.png' alt="logo" />
                    <p4>ClichUp</p4><p2>3.0</p2>
                </div>
                <div className='header-sentence'>
                    Unlock the next generation of productivity<p3> →</p3>
                </div>
            </div>
            <div className='menuBar'>
                <div className='product-menu-list'>
                    <div>
                        <img className='img-list' src='./img/sections/navigations/ClickupNav/task.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Tasks</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='product-menu-list'>
                    <div>
                        <img className='img-list' src='./img/sections/navigations/ClickupNav/doc.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Docs</h1>

                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='product-menu-list'>
                    <div>
                        <img className='img-list' src='./img/sections/navigations/ClickupNav/goal.svg' alt="Tash-logo" />
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
                        <img className='img-list' src='./img/sections/navigations/ClickupNav/white.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>WhiteBoard</h1>

                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='product-menu-list'>
                    <div>
                        <img className='img-list' src='./img/sections/navigations/ClickupNav/dash.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Dashboard</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='product-menu-list'>
                    <div>
                        <img className='img-list' src='./img/sections/navigations/ClickupNav/chat.svg' alt="Tash-logo" />
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
        <hr className='list-menu-hr' />
        <div className='platform-menu'>
            <h1 className='platform-h1'>PLATFORM</h1>
            <div className='platform-menu-list'>
                <div className='platform-list'>
                    <div>
                        <img className='img-list' src='./img/sections/navigations/ClickupNav/temp.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Templates</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='platform-list'>
                    <div>
                        <img className='img-list' src='./img/sections/navigations/ClickupNav/click.svg' alt="Tash-logo" />
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
                        <img className='img-list' src='./img/sections/navigations/ClickupNav/inr.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Integrations</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='platform-list'>
                    <div>
                        <img className='img-list' src='./img/sections/navigations/ClickupNav/view.svg' alt="Tash-logo" />
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
                        <img className='img-list' src='./img/sections/navigations/ClickupNav/hie.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Hierarchy</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='platform-list'>
                    <div>
                        <img className='img-list' src='./img/sections/navigations/ClickupNav/auto.svg'
                            alt="Tash-logo" />
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

const NavclickUp = () => {
    const [isOpen, modifystate] = React.useState(false)
    const [isHamburger, setHamburger] = React.useState(false)
    const [isSubNavActive, setSubNavActive] = React.useState(false)
    const [isArrowOpen, setArrowOpen] = React.useState(false)
    const [isWebProductOpen, setWebProductOpen] = React.useState(false)

    return (
        <>
            <nav className='nav-clickup'>
                <div>
                    <img src='./img/sections/navigations/ClickupNav/click.png' alt="design" />
                    <h1>ClickUp</h1>
                </div>
                <div className='web-full-product-menu'>
                    <div className='product-btn'>
                        <span onClick={() => {
                            setWebProductOpen(!isWebProductOpen)
                        }}>Product</span>


                    </div>
                    <div className={`webProduct ${isWebProductOpen ? "open-product" : "close-product"}`}>
                        {webProductMenu.map((t, i) => {
                            return (
                                <>
                                    <div key={i} className="web-nav-list">
                                        <div className='web-product-list' >
                                            <img className='web-img-list' src={t.img} alt="task" />
                                            <h1>{t.title}</h1>
                                        </div>
                                    </div>

                                </>
                            )
                        })}

                    </div>
                </div>

                <a href="#sub">Solution</a>
                <a href="#sub">Learn</a>
                <a href="#sub">Pricing</a>
                <a href="#">Enterprises</a>
                <a className='contact' href="#">Contact Sales</a>
                <div className='buttons'>
                    <button className='sign-btn-nav'>Sign Up</button>
                    <button className='log-btn-nav'>Log in</button>
                </div>
                <div className={`hamburger ${isHamburger ? "open-hamburger" : "close-hamburger"}`}
                    onClick={() => setHamburger(!isHamburger)} >
                    <div className='slice slice-1'></div>
                    <div className='slice slice-2'></div>
                    <div className='slice slice-3'></div>
                </div>
            </nav >
            <div className={`mobile-nav-links ${isHamburger ? "sub-nav-link-active" : "sub-nav-link-deactive"}`}>
                <div href="#">
                    <span className='product-main-mob-link' onClick={() => {
                        setSubNavActive(!isSubNavActive)
                    }}><p8>Product</p8>
                        <img onClick={() => {
                            setArrowOpen(!isArrowOpen)
                        }} className={isArrowOpen ? "product-open-arrow" : "close"} src='./img/sections/navigations/ClickupNav/arrow.svg' alt="" />
                        <div className={`mob-product-menu-List ${isArrowOpen ? "open-menu" : "close-menu"}`}>
                            <span className='newTag'>new</span>
                            <div className='mob-header'>
                                <div className='mob-header-logo'>
                                    <img className='img-header' src='./img/sections/navigations/ClickupNav/click.png' alt="logo" />
                                    <p4>ClichUp</p4><p2>3.0</p2>
                                </div>
                                <div className='mob-header-sentence'>
                                    Unlock the next generation of productivity<p3> →</p3>
                                </div>
                            </div>
                        </div>
                    </span>
                    {productSubList.map((t, i) => {
                        return (
                            <>
                                <div key={i} className={`sub-nav-list ${isSubNavActive ? "sub-list-open" : "sub-list-close"}`}>
                                    <div className='mob-product-list' >
                                        <img className='mob-img-list' src={t.img} alt="task" />
                                        <h1>{t.title}</h1>
                                    </div>
                                    <hr />
                                </div>
                            </>
                        )
                    })}
                </div>
                <a href="#sub">Learn</a>
                <a href="#sub">Pricing</a>
                <a href="#">Enterprises</a>
            </div>

        </>

    );
}
export default NavclickUp;

