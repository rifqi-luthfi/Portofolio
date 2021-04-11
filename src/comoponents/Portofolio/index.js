import React from 'react';
import Port1 from '../../asset/image/Kategori.png'
import Port2 from '../../asset/image/kos.png'
import Card from '../UI/Card'
import SmallHeading from '../UI/SmallHeading'
import './style.css'

const Portofolio = () => {
    const blogs = [
        {
            id: 1,
            image: Port1,
            title: 'Website Obati',
            link: 'https://github.com/rifqi-luthfi/obati',
            descr : 'Code Igniter, Bootstrap, php, javascript, MySql ',
            penjelasan: 'Website obati adalah pelayanan kesehatan yang memiliki fitur jual beli obat dan artikel-artikel kesehatan.',
            year: ' April 2020'
        },
        {
            id: 2,
            image: Port2,
            title: 'Website Kosutan',
            link: 'https://github.com/rifqi-luthfi/rpl-kosutan',
            descr : 'React JS, Tailwind CSS, Node JS, Express JS, PostgreSQL',
            penjelasan: 'Kosu-tan sendiri merupakan sebuah aplikasi berbasis web yang dapat menghubungkan seseorang yang sedang mencari kost dan orang lain yang memiliki kost. Kosu-tan dapat membantu proses penyewaan dan pencarian kost serta dapat membantu pemilik kost-an untuk menyebarkan informasi kost-an yang dimilikinya di kosu-tan.',
            year: 'Maret 2021'
        },
    ];
    
    return (
        <div 
            className='container'
            style={{ marginTop: '50px', marginBottom: '50px'}}
        
        >
            <Card>
                <div className='ptb '>
                    <SmallHeading  text="Portofolios"/>               
                </div>
                <div  className='PortofolioPage'>
                    {
                        blogs.map((blog)=>{
                            return <div className='blog' key={blog.id}>
                                <div data-aos='flip-up' className='blog-content plr-20'>
                                    <img src={blog.image} alt=''/>
                                    <a data-aos='zoom-in'href={blog.link} className='blog-link ls-1 capitalize bold-500 font-25'>
                                        {blog.title}   
                                    </a>
                                    <p className='primaryColor'
                                        style={{marginBottom: '10px'}}
                                    >{blog.descr} ( {blog.year} ) </p> 
                                    <p
                                        style={{color: '#536162'}}>
                                        {blog.penjelasan}
                                    </p>
                                </div>      
                            </div>    
                        })
                    }
                        
                </div>
            </Card>

        </div>
    );
}

export default Portofolio;
