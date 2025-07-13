import { Component } from "react";
import './index.css'

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="home-page-image-one-container">
                    <div className="welcome-section">
                        <h1 >Welcome, Gopu</h1>
                        <p>We are here to Serve You.</p>
                    </div>
                </div>
                
                <div className="homepage-second-section">
 
                    <div className="homepage-para-parttwo">
                        <h1 className="overview-heading">Overview</h1>
                        <p className="overview-paragraph">Srithin's Hospital is a beacon of modern healthcare,
                            committed to delivering exceptional medical services with
                            compassion, precision, and care. Our facility combines cutting-edge
                            technology with a patient-first philosophy, offering advanced diagnostics,
                            expert specialists, and a healing environment designed for comfort and recovery.
                            We take pride in creating a space where every patient is treated with dignity,
                            and every treatment is guided by excellence and integrity.
                        </p>
                    </div>
                    
                    <div className="homepage-image-parttwo">
                        <img className="homepage-parttwo-img" src="/srithin's hospital image.png" alt="hospital-front"/>

                    </div>

                </div>
                
                <div className="homepage-third-section">
                    <div className="homepage-vision-text-part-third">
                          <h1 className="vision-h1-text">The vision <br/> 'affordable,<br/> accessible and <br/> quality healthcare <br/>for all
                          </h1>
                    </div>

                </div>
                {/* <div className="carousel-main-cont">
                    <div class="carousel-container">
                        <div class="carousel-track">
                            <div class="carousel-slide"><img src="/patient room.png" alt="Advanced Lab" /></div>
                            <div class="carousel-slide"><img src="/scanning room.png" alt="Patient Rooms" /></div>
                            <div class="carousel-slide"><img src="/emergency wing.png" alt="Emergency Wing" /></div>
                        </div>
                    </div>
                </div> */}


                {/* <div className="homepage-second-part">
                    <div className="infrastructure-section">
                        <p>
                            Our hospital is equipped with state-of-the-art medical technology and carefully designed patient facilities that prioritize safety, efficiency, and comfort...
                        </p>
                    </div>
                </div> */}
            </div>
        )
    }
}
export default Home