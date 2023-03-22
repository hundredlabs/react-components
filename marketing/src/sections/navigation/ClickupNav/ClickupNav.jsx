import './ClickupNav.css';
import React from 'react';
const ProductBar = () => (
    <div className="product-menu-List">
        <div>
            <h1>PRODUCT</h1>
            <span className='newTag'>new</span>
            <div className='header'>
                <div className='header-logo'>

                    <img className='img-header' src='./img/sections/ClickupNav/click.png' alt="logo" />
                    <p4>ClichUp</p4><p2>3.0</p2>
                </div>
                <div className='header-sentence'>
                    Unlock the next generation of productivity<p3> →</p3>
                </div>
            </div>
            <div className='menuBar'>
                <div className='product-menu-list'>
                    <div>
                        <img className='img-list' src='./img/sections/ClickupNav/task.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Tasks</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='product-menu-list'>
                    <div>
                        <img className='img-list' src='./img/sections/ClickupNav/doc.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Docs</h1>

                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='product-menu-list'>
                    <div>
                        <img className='img-list' src='./img/sections/ClickupNav/goal.svg' alt="Tash-logo" />
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
                        <img className='img-list' src='./img/sections/ClickupNav/white.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>WhiteBoard</h1>

                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='product-menu-list'>
                    <div>
                        <img className='img-list' src='./img/sections/ClickupNav/dash.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Dashboard</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='product-menu-list'>
                    <div>
                        <img className='img-list' src='./img/sections/ClickupNav/chat.svg' alt="Tash-logo" />
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
                        <img className='img-list' src='./img/sections/ClickupNav/temp.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Templates</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='platform-list'>
                    <div>
                        <img className='img-list' src='./img/sections/ClickupNav/click.svg' alt="Tash-logo" />
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
                        <img className='img-list' src='./img/sections/ClickupNav/inr.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Integrations</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='platform-list'>
                    <div>
                        <img className='img-list' src='./img/sections/ClickupNav/view.svg' alt="Tash-logo" />
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
                        <img className='img-list' src='./img/sections/ClickupNav/hie.svg' alt="Tash-logo" />
                    </div>
                    <div>
                        <h1>Hierarchy</h1>
                        <p>Break down any size product</p>
                        <p>Break down any size product</p>
                    </div>
                </div>
                <div className='platform-list'>
                    <div>
                        <img className='img-list' src='./img/sections/ClickupNav/auto.svg' alt="Tash-logo" />
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
    return (
        <nav className='nav-clickup'>
            <div>
                <img src='./img/sections/ClickupNav/click.png' alt="design" />
                <h1>ClickUp</h1>
            </div>
            <a href="" className={`features ${isOpen ? 'open-feature' : ''}`} onMouseOver={(e) => {
                e.preventDefault();
                modifystate(true)
            }} onMouseLeave={(e) => modifystate(false)}>
                <div >
                    <span className='product-menu'>
                        <div>Product</div>
                        <img className={isOpen ? "open" : "close"} src='./img/sections/ClickupNav/arrow.svg' alt="" />
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


