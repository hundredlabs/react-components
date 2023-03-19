import "./ClerkNav.css";
import React from 'react';

const Product = () => (
    <div className="menuList">
        <div>
            <h1>Product</h1>
            <h2>FEATURES</h2>
            <div className="feature-list">
                <img src="./imgClerk/password.svg" alt="" />
                <p>Password</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/email.svg" alt="" />
                <p>Email magic link</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/social.svg" alt="" />
                <p>Social SSO</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/sms.svg" alt="" />
                <p>Email & SMS passcodes(OTP)</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/email.svg" alt="" />
                <p>Web3 authentication</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/multifactor.svg" alt="" />
                <p>Multifactor authentication</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/email.svg" alt="" />
                <p>Authentication at the edge</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/season.svg" alt="" />
                <p>Season management</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/security.svg" alt="" />
                <p>Security</p>
            </div>
            <h3>COMPONENTS</h3>
            <div className="feature-list">
                <img src="./imgClerk/auth.svg" alt="" />
                <p>Auth & User Components</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/b2b.svg" alt="" />
                <p>B2B Saas Components</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/comp.svg" alt="" />
                <p>Components Customization</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/see.svg" alt="" />
                <p>See All Components</p>
            </div>

        </div>
        <div>
            <h4>JAMSTACK FRAMEWORK INTEGRATIONS</h4>
            <div className="feature-list">
                <img src="./imgClerk/next.svg" alt="" />
                <p>Next.js</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/security.svg" alt="" />
                <p>Remix</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/redwood.svg" alt="" />
                <p>RedwoodJS</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/gats.svg" alt="" />
                <p>Gatsby</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/react.svg" alt="" />
                <p>React</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/expo.svg" alt="" />
                <p>React Native / Expo</p>
            </div>
            <h5>JAMSTACK DATABASE INTEGRATIONS</h5>
            <div className="feature-list">
                <img src="./imgClerk/hasura.svg" alt="" />
                <p>Hasura</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/security.svg" alt="" />
                <p>Supabase</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/fauna.svg" alt="" />
                <p>Fauna</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/firebase.svg" alt="" />
                <p>Firebase</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/graf.svg" alt="" />
                <p>Grafbase</p>
            </div>
            <h5>TRADITIONAL FRAMEWORK INTEGRATIONS</h5>
            <div className="feature-list">
                <img src="./imgClerk/node.svg" alt="" />
                <p>Node / Express</p>
            </div>
            <div className="feature-list">
                <img src="./imgClerk/ruby.svg" alt="" />
                <p>Ruby / Rails</p>
            </div>
        </div>
    </div>
)


const Clerk = ({ image }) => {
    const [isOpen, setOpen] = React.useState(false)
    return (
        <nav className="clerk-navigation">
            <div className="clerk-logo">
                <img src={image} alt="" />
                <div className="nav-a-tag">
                    <a href="">
                        <div onMouseOver={(e) => {
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
        </nav>
    )
}

export default Clerk;