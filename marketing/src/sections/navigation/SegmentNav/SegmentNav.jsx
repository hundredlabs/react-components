import './SegmentNav.css';
import React from 'react';


const ProductBar = () => (
    <div className="menuList">
        <div className='lists'>
            <div className='first-menu-list'>
                <h3>SEGMENT FOR....</h3>
                <div className='segment-menu-list'>
                    <img src="./NavBarImg/click.png" alt="" />
                    <span>
                        <h1>Marketing</h1>
                        <p>Personalized and real-time customer experience</p>
                    </span>
                </div>
                <div className='segment-menu-list'>
                    <img src="./NavBarImg/click.png" alt="" />
                    <span>
                        <h1>Product</h1>
                        <p>Personalized and real-time customer experience</p>
                    </span>
                </div>
                <div className='segment-menu-list'>
                    <img src="./NavBarImg/click.png" alt="" />
                    <span>
                        <h1>Engineering</h1>
                        <p>Personalized and real-time customer experience</p>
                    </span>
                </div>
                <div className='product-list'>
                    <h1>PRODUCTS</h1>
                    <div className='segment-menu-list'>
                        <img src="./NavBarImg/click.png" alt="" />
                        <span>
                            <h1>Connections</h1>
                            <p>Personalized and real-time customer experience</p>
                        </span>
                    </div>
                    <div className='segment-menu-list'>
                        <img src="./NavBarImg/click.png" alt="" />
                        <span>
                            <h1>Protocols</h1>
                            <p>Personalized and real-time customer experience</p>
                        </span>
                    </div>
                    <div className='segment-menu-list'>
                        <img src="./NavBarImg/click.png" alt="" />
                        <span>
                            <h1>Profile</h1>
                            <p>Personalized and real-time customer experience</p>
                        </span>
                    </div>
                    <div className='segment-menu-list'>
                        <img src="./NavBarImg/click.png" alt="" />
                        <span>
                            <h1>Twilio Engage</h1>
                            <p>Personalized and real-time customer experience</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className='feature-list'>
                <h1>FEATURES</h1>
                <div className='feature-menu-list'>
                    <img src="./NavBarImg/click.png" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>Personalized and real-time customer experience</p>
                    </span>
                </div>
                <div className='feature-menu-list'>
                    <img src="./NavBarImg/click.png" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>Personalized and real-time customer experience</p>
                    </span>
                </div>
                <div className='feature-menu-list'>
                    <img src="./NavBarImg/click.png" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>Personalized and real-time customer experience</p>
                    </span>
                </div>
                <div className='feature-menu-list'>
                    <img src="./NavBarImg/click.png" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>Personalized and real-time customer experience</p>
                    </span>
                </div>
                <div className='feature-menu-list'>
                    <img src="./NavBarImg/click.png" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>Personalized and real-time customer experience</p>
                    </span>
                </div>
                <div className='feature-menu-list'>
                    <img src="./NavBarImg/click.png" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>Personalized and real-time customer experience</p>
                    </span>
                </div>
                <div className='feature-menu-list'>
                    <img src="./NavBarImg/click.png" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>Personalized and real-time customer experience</p>
                    </span>
                </div>
                <hr className='hr' />
                <div className='feature-menu-list'>
                    <img src="./NavBarImg/click.png" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>Personalized and real-time customer experience</p>
                    </span>
                </div>
                <div className='feature-menu-list'>
                    <img src="./NavBarImg/click.png" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>Personalized and real-time customer experience</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
)


const SegmentNav = () => {
    const [isOpen, modifystate] = React.useState(false)
    return (
        <nav className='segment-Navigation'>
            <div className='header'>
                <img src="../NavBarImg/segment.svg" alt="logo" />
                <h1>Segment</h1>
            </div>
            <div className='features'>
                <a href="" className={`features ${isOpen ? 'open-feature' : ''}`} onMouseOver={(e) => {
                    e.preventDefault();
                    modifystate(true)
                }} onMouseLeave={(e) => modifystate(false)}>
                </a>

                <a href="#sub">Pricing</a>
                <a href="#sub">Customers</a>
                <a href="#sub">Docs</a>
                <a href="#sub">Company</a>
            </div>
            <div className='Nav-Btn'>
                <a href="">Log in</a>
                <button>See How it works</button>
            </div>
        </nav>

    )
};
export default SegmentNav;