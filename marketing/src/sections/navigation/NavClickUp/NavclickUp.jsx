import './NavclickUp.css';

const NavclickUp = ({ image }) => {
    return (
        <nav className='clickup-navigation'>
            <div>
                <img src={image} alt="design" />
                <h1>ClickUp</h1>
            </div>
            <select>
                <option >Solutions</option>
                <option >new</option>
                <option >item</option>
                <option >about</option>
            </select>
            <select>
                <option >Solutions</option>
                <option >new</option>
                <option >item</option>
                <option >about</option>
            </select>
            <a href="#Pricing">Pricing</a>
            <a href="#Enterprises">Enterprises</a>
            <span>Contact Sales</span>
            <button className='sign'>Sign Up</button>
            <button className='log'>Log in</button>
        </nav>
    );
}
export default NavclickUp;
