import React from 'react';
import socialIcon from '../../../asset/image'
import './style.css'

const SocialConnect = () => {
    return (
        <div className='socialConnect'>
            <p className='mlr-10'> Follow me on :</p>
            <a className='socialLink' href='https://github.com/rifqi-luthfi?tab=repositories'>
                <img src={socialIcon.github} alt=''/>
            </a>
            <a className='socialLink' href='https://www.instagram.com/rifqi.luthfi/'>
                <img src={socialIcon.instagram} alt=''/>
            </a>
        </div>
    );
}

export default SocialConnect;
