import React from 'react';
import Card from '../UI/Card';
import Language from '../UI/Language';
import MediumHeader from '../UI/MediumHeader';
import SmallHeading from '../UI/SmallHeading';
import { colors } from '../../style' 

const Aboutme = (props) => {

    const languages = [
        {
            languageName : 'react js',
            desc : 'Hands on experience in react native',
            value : 50,
            textColor : colors.primaryColor,
            pathColor : 'yellow',
            trailColor : 'gold'
        },
        {
            languageName : 'react native',
            desc : 'Hands on experience in react native',
            value : 50,
            textColor : colors.primaryColor,
            pathColor : 'yellow',
            trailColor : 'gold'
        },
        {
            languageName : 'JavaScript',
            desc : 'Hands on experience in JavaScript',
            value : 60,
            textColor : colors.primaryColor,
            pathColor : 'yellow',
            trailColor : 'gold'
        },
        {
            languageName : 'HTML/CSS',
            desc : 'Hands on experience in HTML/CSS',
            value : 70,
            textColor : colors.primaryColor,
            pathColor : 'green',
            trailColor : 'gold'
        },
        {
            languageName : 'wordpress cms',
            desc : 'Hands on experience in cms',
            value : 60,
            textColor : colors.primaryColor,
            pathColor : 'yellow',
            trailColor : 'gold'
        },
    ];


    return (
        <div className="container"> 
            <Card style={{padding: '50px'}}>
                <SmallHeading text="What I do"/>
                <MediumHeader text="Language and Framework"/>
                <div data-aos='fade-up' className='flexRow wrap justify-sb ' style={{padding: '20px'}}>
                    {languages.map((language, index) =>(
                         <Language
                            key={index}
                            lgName = {language.languageName}
                            desc = {language.desc}
                            value = {language.value}
                            textColor = {colors.primaryColor}
                            pathColor = {language.pathColor }
                            trailColor= {language.trailColor}
                        />
                    ))}     
                </div>
            </Card>
        </div>
    );
}

export default Aboutme;
