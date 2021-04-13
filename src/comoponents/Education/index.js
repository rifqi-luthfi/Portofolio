import React from 'react'
import SmallHeading from '../UI/SmallHeading'
import MediumHeader from '../UI/MediumHeader'
import me from '../../asset/image/iqi2.png'
import './style.css'
import SocialConnect from '../UI/SocialConnect'
import Tile from '../UI/Tile'

const Education = () => {
    return (
        <div className="container" style={{padding: '50px 0'}}>
            <SmallHeading text='Organization'/>
            <MediumHeader text={'Experience'}/>
            <div className='flexRow flexCol justify-sb align-center'>
                <div data-aos='fade-up-right'>
                        <img 
                        style={{width: '420px'}}
                        src={me} />
                        <SocialConnect style={{position:'absolute'}}/>
                </div>
                <div >
                        <Tile
                            title='AL-Fath'
                            mediumTitle = 'Vice Leadder Al-Fath FIF'
                            desc='2019-2020'
                        />
                        <Tile
                            title='Al-FATH'
                            mediumTitle = ' Team Syiar Pusat '
                            desc='2020 - now'
                        />
                        <Tile
                            title='Lab TEL-C Research Group'
                            mediumTitle = ' FrontEnd '
                            desc=' 2020 - now '
                        />
                </div>
            </div>
        </div>
    );
}

export default Education;
