import React from "react";
import "./TrueworkNav.css"

const SolutionMenu = ({ show }) => (

    <nav className="solution-list">
        <div className={`solution-menu-list`}>
            <ul className={show ? 'open' : 'closed'}>
                <li>

                    <div>
                        <div className="submeniu-title"><h5>Built for Different Industries</h5></div>
                        <hr />
                        <div className="sub-menu-link">
                            <div>
                                <img src="/img/sections/hero/TrueWork/home.svg" alt="" />
                            </div>
                            <div >
                                <h3>Mortgage</h3>
                                <p className="menu-p">Close Loans Faster</p>
                            </div>
                        </div>
                        <div className="sub-menu-link">
                            <div>
                                <img src="/img/sections/hero/TrueWork/tick-mark.svg" height={15} alt="" />
                            </div>
                            <div className="tick">
                                <h3>Consumer Lending</h3>
                                <p>Approve More Borrowers</p>
                            </div>
                        </div>
                        <div className="sub-menu-link">
                            <div>
                                <img src="/img/sections/hero/TrueWork/user-plus.svg" alt="" />
                            </div>
                            <div>
                                <h3>Pre-employment</h3>
                                <p>Verify Employment History</p>
                            </div>
                        </div>
                        <div className="sub-menu-link">
                            <div>
                                <img src="/img/sections/hero/TrueWork/search.svg" alt="" />
                            </div>
                            <div>
                                <h3>Tenant Screening</h3>
                                <p>Mitigate Fraud Risk</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="submeniu-title"><h5>Flexible Integrations to Accelerate Verifications</h5></div>
                        <hr />
                        <div className="sub-menu-link">
                            <div>
                                <img src="/img/sections/hero/TrueWork/zap.svg" alt="" />
                            </div>
                            <div>
                                <h3>Truework</h3>
                                <p>Overview of the Truework platform</p>
                            </div>
                        </div>
                        <div className="sub-menu-link">
                            <div>
                                <img src="/img/sections/hero/TrueWork/settings.svg" alt="" />
                            </div>
                            <div>
                                <h3>Truework & Encompass®</h3>
                                <p>Connect Truework to your loan origination system</p>
                            </div>
                        </div>
                        <div className="sub-menu-link">
                            <div>
                                <img src="/img/sections/hero/TrueWork/zap.svg" alt="" />
                            </div>
                            <div>
                                <h3>Pricing</h3>
                                <p>Enterprise plans and volume-based discounts available</p>
                            </div>
                        </div>

                    </div>
                    <button>Start a Verification <b>&#62;</b></button>

                </li>
            </ul>
        </div>
    </nav>
);

const TrueworkNav = () => {

    const [isOpen, setOpen] = React.useState(false)

    return (

        <nav className="truework-nav">
            <div>

                <a className="" href="">
                    <div style={{ display: "inline-block" }} onClick={(e) => {
                        e.preventDefault();
                        console.log('clicked')
                        if (!isOpen) {
                            document.body.style.backgroundColor = "#eee"
                        } else {
                            document.body.style.backgroundColor = "#fff";
                        }
                        setOpen(!isOpen);

                    }}
                    >
                        <span className="btn">Solutions <img className={isOpen ? 'clicked' : ''} src='/img/sections/hero/HeadStream/drop-down.png' alt="" height={10} /></span>
                    </div>
                    <SolutionMenu show={isOpen} />

                </a>
                <a href=""><span>How It Works</span></a>
                <a href=""><span>Documentation</span></a>
                <a href=""><span>About</span></a>
            </div>
            <div>
                <a href="https://getlogo.net/truework-logo-vector-svg/" target="_blank"><img src="https://getlogo.net/wp-content/uploads/2020/11/truework-logo-vector.png" height={70} /></a>
            </div>
            <div className="truework-right-nav">
                <a className="truework-right-nav-sign" href=""><span>Sign In</span></a>
                <a href=""><span className="verify">Start a Verification <hr /><img src="/img/sections/hero/HeadStream/search-icon.svg" alt="" /></span></a>
            </div>


            {/* {isOpen && ()} */}
        </nav>

    );
};

export default TrueworkNav;