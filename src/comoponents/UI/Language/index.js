import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.css'

const Language = (props) => {
    return (
        <div className='flexRow align-center mtb-10'>
            <div className="languageContainer">
                <CircularProgressbar
                    value={props.value}
                    text = {`${props.value}%`}
                    styles={buildStyles({
                    textColor: props.textColor,
                    pathColor: props.pathColor,
                    trailColor: props.trailColor,
                    })}
                />
            </div>
            <div className="mlr-10 ">
                <p className='font-16 bold-500 textColor mtb-10'>{props.lgName}</p>
                <p className='font-16 bold-500 grey mtb-10'>{props.desc}</p>
            </div>
        </div>
                            
    );
}

export default Language;
