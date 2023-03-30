import "./ClerkNav.css";
import React from 'react';
import './ClerkNavResponsive.css'
import { webProductMenu, productMenu } from "./ProductsMenu";


const Clerk = () => {
    const [isHamburger, setHamburger] = React.useState(false)
    const [isArrowOpen, setArrowOpen] = React.useState(false)
    const [isProductList, setProductList] = React.useState(false)
    return (
        <>
            <nav className="clerk-navigation">
                <div className="clerk-logo">
                    <div>
                        <img src='./img/sections/navigations/ClerkNavigation/logo.svg' alt="" />
                        <h1>Clerk</h1>
                    </div>
                    <div className={`nav-a-tag ${isHamburger ? "open-web-menu" : "close-web-menu"}`}>
                        <div>
                            <span >
                                <p className="web-product-item" onClick={() => {
                                    setProductList(!isProductList)
                                }}>Product</p>
                            </span>
                            <div className={`all-products-items ${isProductList ? "open-web-list" : "close-web-list"}`}>
                                <p>Products</p>
                                <p>FEATURES</p>
                                {webProductMenu.map((t, i) => {
                                    return (
                                        <>
                                            <div key={i} className="web-mob-list" >
                                                <div>
                                                    <img src={t.img} alt="" />
                                                    <h1>{t.title}</h1>
                                                </div>
                                                <div className="second-menu-list">
                                                    <img src={t.img} alt="" />
                                                    <h1>{t.title}</h1>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}

                            </div>
                        </div>
                        <a href="" >Developers</a>
                        <a href="" >Company</a>
                        <a href="" >For startups</a>
                        <a href="" >Pricing</a>
                    </div>
                    <div className="nav-button">
                        <button className="sign-in">Book a demo</button>
                        <button className="sign-up">Sign up</button>
                    </div>
                </div >
                <div className={`hamburger ${isHamburger ? "open-hamburger" : "close-hamburger"}`}
                    onClick={() => setHamburger(!isHamburger)}>
                    <div className="slice slice-1"></div>
                    <div className="slice slice-2"></div>
                    <div className="slice slice-3"></div>
                </div>
            </nav >
            <div className={`mobile-nav-list ${isHamburger ? "open-sub-menu" : "close-sub-menu"}`}>
                <div>
                    <span className="product-main-item" onClick={() => {
                        setProductList(!isProductList)
                    }}>
                        <p>Product</p>
                        <img onClick={() => {
                            setArrowOpen(!isArrowOpen)
                        }} className={`arrow-rotate ${isArrowOpen ? "open-arrow" : "close-arrow"}`} src="./img/sections/navigations/ClerkNavigation/right.svg" alt="" />
                    </span>
                    {productMenu.map((t, i) => {
                        return (
                            <>
                                <div key={i} className={`sub-mob-list ${isProductList ? "open-sub-list" : "close-sub-list"}`}>
                                    <div>
                                        <img src={t.img} alt="" />
                                        <h1>{t.title}</h1>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                <a href="" >Developers</a>
                <a href="" >Company</a>
                <a href="" >For startups</a>
                <a href="" >Pricing</a>
            </div>
        </>
    )
}

export default Clerk;
