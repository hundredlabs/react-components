import './SegmentNav.css';
import React from 'react';


const ProductBar = () => (
    <div className="menuList">
        <div>
            <h1>hello</h1>
        </div>
    </div>
)


const SegmentNav = ({ image }) => {
    const [isOpen, modifystate] = React.useState(false)
    return (
        <nav className='segment-Navigation'>
            <div>
                <img src={image} alt="logo" />
            </div>
            <div className='features'>
                <a href="" className="lists">
                    <div onClick={(e) => {
                        e.preventDefault();
                        modifystate(!isOpen)
                    }}>
                        <span>Product</span>
                        {isOpen && (
                            <ProductBar />)}
                    </div>
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