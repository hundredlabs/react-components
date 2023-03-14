import './NavclickUp.css';

const NavclickUp = ({ image }) => {
    return (
        <nav className='clickup-navigation'>
            <div>
                <img src={image} alt="design" />
                <h1>ClickUp</h1>
            </div>
            <ul className='list-nav'>
                <li className='li-nav'><a href="#sub">Products v</a>
                    <ul class="dropdown">
                        <li><a href="#sub">Sub-1</a></li>
                        <li><a href="#sub">Sub-2</a></li>
                        <li><a href="#sub">Sub-3</a></li>
                    </ul>
                </li>
                <li className='li-nav'><a href="#sub">Solution</a></li>
                <li className='li-nav'><a href="#sub">Learn</a></li>
                <li className='li-nav'><a href="#sub">Pricing</a></li>
                <li className='li-nav'><a href="#">Enterprises</a></li>
                <li className='li-nav'><a href="#">Contact Sales</a></li>
            </ul>
            <a href="#Pricing"></a>
            <a href="#Enterprises"></a>
            <span></span>
            <button className='sign'>Sign Up</button>
            <button className='log'>Log in</button>
        </nav>

    );
}
export default NavclickUp;
