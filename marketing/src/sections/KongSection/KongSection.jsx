import "./KongSection.css"
import image2 from "../../img/sections/hero/arrowCircle.png"
import image3 from "../../img/sections/hero/rocket.png"
import image1 from "../../img/sections/hero/Kong-img.png"
import image4 from "../../img/sections/hero/shield.png"

const KongSection = () => {
    return (
        <div className="kongSection-container">
            <section className="hero-section">
                <div>
                    <h1>Empower Developers. Wow Customers.</h1>
                    <p>
                        Build delightful customer experiences and unleash developer productivity with Kong,<br />
                        the fastest cloud native API platform.
                    </p>
                    <div>
                        <button className="demoBtn"> Start for Free</button>
                        <button className="startBtn"> Get a Demo</button>
                    </div>
                </div>
                <div className="hero-container">
                    <div className="section-description">
                        <div>Why Kong</div>
                        <h2>The Future of API Management <br /> is Here</h2>
                        <p>
                            APIs are the building blocks of modern applications, making up <br />
                            80% of internet traffic. Take control of these connections across <br />
                            any environment with Kong. <br /></p>

                        <p> Kong helps you stay ahead of customer demand (and the <br />
                            competition) with connected, scaled, and secured applications.
                        </p>
                        <a href="">Why Kong <span>&rarr;</span></a>
                    </div>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src={image2} alt="" />
                        <h4>Grow faster,scale reliably</h4>
                        <p>Start where you are and scale. Kong’s <br />
                            future-proof platform handles complex <br />
                            mixes of legacy and cutting-edge tech.</p>
                    </div>
                    <div>
                        <img src={image3} alt="" />
                        <h4>Speed up time to market</h4>
                        <p>
                            Tap into developer-led innovation. Get <br />
                            flexibility they love in an automated <br />
                            environment that lets them ship fast.
                        </p>
                    </div>
                    <div>
                        <img src={image4} alt="" />
                        <h4>Automate security</h4>
                        <p>
                            Trust your APIs and services are <br />
                            secure. We’ve got you covered with <br />
                            built-in security, governance, and <br />
                            compliance.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default KongSection;