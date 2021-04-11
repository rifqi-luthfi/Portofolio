import React from 'react';

const Tile = ({ title, mediumTitle, desc }) => {
    return (
        <div data-aos='zoom-in-up' className='mtb-10' style={{background: '#fff', padding: '20px', width: '300px'}}>
            <p className= 'primaryColor font-12 bold-500 mtb-10 uppercase'>{title}</p>
            <p className= 'textColor font-12 bold-500 uppercase mtb-10'>{mediumTitle}</p>
            <p className= 'grey font-12'>{desc}</p>
        </div>
    );
}

export default Tile;
