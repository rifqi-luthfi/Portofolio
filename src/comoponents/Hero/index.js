import React from 'react';
import me from "../../asset/image/leftiqi.png"
import Button from '../UI/Button';
import SocialConnect from '../UI/SocialConnect';
import './style.css'

const Hero = () => {
    return (
        <div className="container" style={{marginTop:"70px"}}>
            <div className="flexRow flexCol justify-sb align-center">
                <div data-aos='fade-right'>
                    <p className="uppercase bold-500 textColor ls-1 mtb-10"> 
                        <span className="primaryColor">Hello,</span> I am Rifqi Luthfi</p>
                    <h1 className="textColor ls-1 mtb-10">S1 Informatika Telkom University</h1>
                    <p className="font-12 grey mtb-10">frontend enthusiast</p>
                    {/* <div className='flexRow' style={{margin: '30px 0'}}>
                        <div>
                            <Button label="Hire Me"/>
                        </div>
                        <div className='mlr-10'>
                        <Button label="Download CV" inverse={true}/>
                        </div>
                    </div> */}
                </div>
                <div data-aos='fade-left'>
                    <div className="meRightImgContainer">
                        <img src={me} alt="" />
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Hero;
