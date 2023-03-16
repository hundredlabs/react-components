import './NavclickUp.css';
import React from 'react';

const ProductBar = () => (
    <div className="menuList">
        <div className='menuBar'>
            <div className='list'>
                <div>
                    <img className='img-list' src='./NavBarImg/logo192.png' alt="Tash-logo" />
                </div>
                <div>
                    <h1>Tasks</h1>
                    <p>Break down any size product</p>
                    <p>Break down any size product</p>
                </div>
            </div>
            <div className='list'>
                <div>
                    <img className='img-list' src='./NavBarImg/logo192.png' alt="Tash-logo" />
                </div>
                <div>
                    <h1>Docs</h1>
                    <p>Break down any size product</p>
                    <p>Break down any size product</p>
                </div>
            </div>
            <div className='list'>
                <div>
                    <img className='img-list' src='./NavBarImg/logo192.png' alt="Tash-logo" />
                </div>
                <div>
                    <h1>Goals</h1>
                    <p>Break down any size product</p>
                    <p>Break down any size product</p>
                </div>
            </div>
        </div>

        <div className='menuBar'>
            <div className='list1'>
                <div>
                    <img className='img-list' src='./NavBarImg/logo192.png' alt="Tash-logo" />
                </div>
                <div>
                    <h1>WhiteBoard</h1>
                    <p>Break down any size product</p>
                    <p>Break down any size product</p>
                </div>
            </div>
            <div className='list1'>
                <div>
                    <img className='img-list' src='./NavBarImg/logo192.png' alt="Tash-logo" />
                </div>
                <div>
                    <h1>Dashboard</h1>
                    <p>Break down any size product</p>
                    <p>Break down any size product</p>
                </div>
            </div>
            <div className='list1'>
                <div>
                    <img className='img-list' src='./NavBarImg/logo192.png' alt="Tash-logo" />
                </div>
                <div>
                    <h1>Chat</h1>
                    <p>Break down any size product</p>
                    <p>Break down any size product</p>
                </div>
            </div>
        </div>
    </div >
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
                <div onClick={(e) => {
                    e.preventDefault();
                    modifystate(!isOpen)
                }}>
                    <span>Product</span>
                    {isOpen && (<ProductBar />)}
                </div>
            </a>
            <a href="#sub">Solution</a>
            <a href="#sub">Learn</a>
            <a href="#sub">Pricing</a>
            <a href="#">Enterprises</a>
            <a className='contact' href="#">Contact Sales</a>
            <div className='buttons'>
                <button className='sign'>Sign Up</button>
                <button className='log'>Log in</button>
            </div>
        </nav >

    );
}
export default NavclickUp;
