import "./ClerkNav.css";
import React from 'react';
import './ClerkNavResponsive.css'
import ProductMenu from "./ProductsMenu";

const Product = () => (
    <div className="menuList">
        <div>
            <h1>Product</h1>
            <h2>FEATURES</h2>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/pass.svg" alt="" />
                <p>Password</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/email.svg" alt="" />
                <p>Email magic link</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/social.svg" alt="" />
                <p>Social SSO</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/email and social.svg" alt="" />
                <p>Email & SMS passcodes(OTP)</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/web.svg" alt="" />
                <p>Web3 authentication</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/auth.svg" alt="" />
                <p>Multifactor authentication</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/auth user.svg" alt="" />
                <p>Authentication at the edge</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/season.svg" alt="" />
                <p>Season management</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/security.svg" alt="" />
                <p>Security</p>
            </div>
            <h3>COMPONENTS</h3>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/auth.svg" alt="" />
                <p>Auth & User Components</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/b2b.svg" alt="" />
                <p>B2B Saas Components</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/comp.svg" alt="" />
                <p>Components Customization</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/see.svg" alt="" />
                <p>See All Components</p>
            </div>

        </div>
        <div>
            <h4>JAMSTACK FRAMEWORK INTEGRATIONS</h4>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/auth.svg" alt="" />
                <p>Next.js</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/b2b.svg" alt="" />
                <p>Remix</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/see.svg" alt="" />
                <p>RedwoodJS</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/auth user.svg" alt="" />
                <p>Gatsby</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/email.svg" alt="" />
                <p>React</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/pass.svg" alt="" />
                <p>React Native / Expo</p>
            </div>
            <h5>JAMSTACK DATABASE INTEGRATIONS</h5>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/comp.svg" alt="" />
                <p>Hasura</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/season.svg" alt="" />
                <p>Supabase</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/comp.svg" alt="" />
                <p>Fauna</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/auth.svg" alt="" />
                <p>Firebase</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/auth user.svg" alt="" />
                <p>Grafbase</p>
            </div>
            <h5>TRADITIONAL FRAMEWORK INTEGRATIONS</h5>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/season.svg" alt="" />
                <p>Node / Express</p>
            </div>
            <div className="feature-list">
                <img src="./img/sections/navigations/ClerkNavigation/b2b.svg" alt="" />
                <p>Ruby / Rails</p>
            </div>
        </div>
    </div>
)


const Clerk = () => {
    const [isOpen, setOpen] = React.useState(false)
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
                    <div className="nav-a-tag">
                        <a href="">
                            <div onClick={(e) => {
                                e.preventDefault();
                                setOpen(!isOpen)
                            }}>
                                <span>Product</span>
                                {isOpen && (<Product />)}
                            </div>
                        </a>
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
                    {ProductMenu.map((t, i) => {
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
