import './SegmentNav.css';
import React from 'react';
import './SegmentResponsive.css';
import { featureProduct, productBarMenu, webProductItems, segmentProductMenu } from './SegmentProductMenu';


const ProductBar = () => (
    <div className="menuList">
        <div className='lists'>
            <div className='first-menu-list'>
                <h3>SEGMENT FOR....</h3>
                <div className='segment-menu-list'>
                    <img src="./img/sections/navigations/SegmentNav/c1.svg" alt="" />
                    <span>
                        <h1>Marketing</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing </p>
                    </span>
                </div>
                <div className='segment-menu-list'>
                    <img src="./img/sections/navigations/SegmentNav/c2.svg" alt="" />
                    <span>
                        <h1>Product</h1>
                        <p>It is a long established fact that a reader</p>
                    </span>
                </div>
                <div className='segment-menu-list'>
                    <img src="./img/sections/navigations/SegmentNav/c3.svg" alt="" />
                    <span>
                        <h1>Engineering</h1>
                        <p>It has survived not only five centuries</p>
                    </span>
                </div>
                <div className='product-list'>
                    <h1>PRODUCTS</h1>
                    <div className='segment-menu-list'>
                        <img src="./img/sections/navigations/SegmentNav/logo.svg" alt="" />
                        <span>
                            <h1>Connections</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing </p>
                        </span>
                    </div>
                    <div className='segment-menu-list'>
                        <img src="./img/sections/navigations/SegmentNav/c1.svg" alt="" />
                        <span>
                            <h1>Protocols</h1>
                            <p>It is a long established fact that a reader</p>
                        </span>
                    </div>
                    <div className='segment-menu-list'>
                        <img src="./img/sections/navigations/SegmentNav/c2.svg" alt="" />
                        <span>
                            <h1>Profile</h1>
                            <p>Personalized and real-time customer experience</p>
                        </span>
                    </div>
                    <div className='segment-menu-list'>
                        <img src="./img/sections/navigations/SegmentNav/c3.svg" alt="" />
                        <span>
                            <h1>Twilio Engage</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing </p>
                        </span>
                    </div>
                </div>
            </div>
            <div className='feature-list'>
                <h1>FEATURES</h1>
                <div className='feature-menu-list'>
                    <img src="./img/sections/navigations/SegmentNav/logo.svg" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>It is a long established fact that a reader</p>
                    </span>
                </div>
                <div className='feature-menu-list'>
                    <img src="./img/sections/navigations/SegmentNav/c1.svg" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing </p>
                    </span>
                </div>
                <div className='feature-menu-list'>
                    <img src="./img/sections/navigations/SegmentNav/c2.svg" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>It has survived not only five centuries</p>
                    </span>
                </div>
                <div className='feature-menu-list'>
                    <img src="./img/sections/navigations/SegmentNav/c3.svg" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>It is a long established fact that a reader</p>
                    </span>
                </div>
                <div className='feature-menu-list'>
                    <img src="./img/sections/navigations/SegmentNav/logo.svg" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing </p>
                    </span>
                </div>
                <div className='feature-menu-list'>
                    <img src="./img/sections/navigations/SegmentNav/c1.svg" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>It has survived not only five centuries</p>
                    </span>
                </div>
                <div className='feature-menu-list'>
                    <img src="./img/sections/navigations/SegmentNav/c2.svg" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>Personalized and real-time customer experience</p>
                    </span>
                </div>
                <hr className='nav-segment-hr' />
                <div className='feature-menu-list'>
                    <img src="./img/sections/navigations/SegmentNav/c3.svg" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing </p>
                    </span>
                </div>
                <div className='feature-menu-list'>
                    <img src="./img/sections/navigations/SegmentNav/c1.svg" alt="" />
                    <span>
                        <h1>Twilio Engage</h1>
                        <p>It has survived not only five centuries</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
)


const SegmentNav = () => {
    const [isOpen, modifystate] = React.useState(false)
    const [isHamburger, setHamburger] = React.useState(false)
    const [isArrorOpen, setArrorOpen] = React.useState(false)
    const [isProductMenu, setProductMenu] = React.useState(false)
    return (
        <>
            <nav className='segment-navigation'>
                <div className='heading'>
                    <img src="./img/sections/navigations/SegmentNav/logo.svg" alt="logo" />
                    <h9>Segment</h9>
                </div>
                <div className='features'>
                    <a href="" className="lists">
                        <div onClick={(e) => {
                            e.preventDefault();
                            modifystate(!isOpen)
                        }}>
                            <span >Product</span>
                            <div className={`productBtn ${isOpen ? "open-product" : "close-product"}`} >
                                <h1>Segment for</h1>
                                <div className='segment-product'>
                                    <div className='all-product-menu'>
                                        {webProductItems.map((t, i) => {
                                            return (
                                                <>
                                                    <div>
                                                        <div key={i} className='productMenu'>
                                                            <img src={t.img} />
                                                            <div>
                                                                <h1>{t.title}</h1>
                                                                <p>{t.author}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                        <div>
                                            <h1>Products</h1>
                                            <div >
                                                {productBarMenu.map((t, i) => {
                                                    return (
                                                        <>
                                                            <div>
                                                                <div key={i} className='productMenu'>
                                                                    <img src={t.img} />
                                                                    <div>
                                                                        <h1>{t.title}</h1>
                                                                        <p>{t.author}</p>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                    </div>

                                    <div className='items'>
                                        <span>FEATURES</span>
                                        <div className='secondBar'>
                                            {featureProduct.map((t, i) => {
                                                return (
                                                    <>
                                                        <div className='featuresItems'>
                                                            <div key={i} className='productMenu'>
                                                                <img src={t.img} />
                                                                <div>
                                                                    <h1>{t.title}</h1>
                                                                    <p>{t.author}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })}

                                        </div>
                                        <hr />
                                        <div className='lastItem'>
                                            <img src='./img/sections/navigations/SegmentNav/c1.svg' alt="" />
                                            <div>
                                                <h1>Protocols</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                        <div className='lastItem'>
                                            <img src='./img/sections/navigations/SegmentNav/c1.svg' alt="" />
                                            <div>
                                                <h1>Market</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="#sub">Pricing</a>
                    <a href="#sub">Customers</a>
                    <a href="#sub">Docs</a>
                    <a href="#sub">Company</a>
                </div>
                <div className='nav-btn'>
                    <a href="">Log in</a>
                    <button>See How it works</button>

                </div>
                <div className={`hamburger ${isHamburger ? "open-hamburger" : "close-hamburger"}`}
                    onClick={() => setHamburger(!isHamburger)}
                >
                    <div className="slice slice-1"></div>
                    <div className="slice slice-2"></div>
                    <div className="slice slice-3"></div>
                </div>
            </nav >

            <div className={`mobile-product-list ${isHamburger ? "sub-product-active" : "sub-product-deactive"}`}>
                <div className='mob-product-menu-list' >
                    <span onClick={() => {
                        setProductMenu(!isProductMenu)
                    }}   ><p2>Product</p2>
                        <img onClick={() => {
                            setArrorOpen(!isArrorOpen)
                        }} className={`product-arrow-menu ${isArrorOpen ? "open-arror" : "close-arrow"}`} src="./img/sections/navigations/SegmentNav/right-arrow.svg" alt="" />
                    </span>
                    {segmentProductMenu.map((t, i) => {
                        return (
                            <>
                                <div key={i} className={`inside-product-menu-list ${isProductMenu ? "open-product-list" : "close-product-list"}`}>
                                    <div className='product-mob-list'>
                                        <div className='all-menu'>
                                            <img src={t.img} alt="" />
                                            <h1>{t.title}</h1>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                <a href="#sub">Pricing</a>
                <a href="#sub">Customers</a>
                <a href="#">Docs</a>
                <a href="#">Company</a>
            </div>
        </>
    )
};
export default SegmentNav;
