import React from 'react'
import './Section2.css'
import IMAGE1 from '../img/IMAGE1.png'
import IMAGE2 from '../img/IMAGE2.png'
import IMAGE3 from '../img/IMAGE3.png'
import IMAGE4 from '../img/IMAGE4.png'
import IMAGE5 from '../img/IMAGE5.png'
import IMAGE6 from '../img/IMAGE6.png'
import IMAGE7 from '../img/IMAGE7.png'
import IMAGE21 from '../img/IMAGE21.png'
import IMAGE22 from '../img/IMAGE22.png'
import IMAGE23 from '../img/IMAGE23.png'
import IMAGE24 from '../img/IMAGE24.png'
import IMAGE26 from '../img/IMAGE26.png'
import IMAGE27 from '../img/IMAGE27.png'
import IMAGE28 from '../img/IMAGE28.png'
import IMAGE31 from '../img/IMAGE21.png'
import IMAGE32 from '../img/IMAGE22.png'
import IMAGE33 from '../img/IMAGE23.png'
import IMAGE34 from '../img/IMAGE24.png'
import IMAGE35 from '../img/IMAGE26.png'
import IMAGE36 from '../img/IMAGE27.png'
import IMAGE37 from '../img/IMAGE28.png'
import { Container } from 'react-bootstrap'

function Section2() {
    return (
        <div className='section2'>
            <p>Our Core Layouts</p>
            <h3>Template Pages</h3>
            <Container>
                <div className='row'>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE1} />
                        <p>Landing vr.1</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE21} />
                        <p>Landing vr.1</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE31} />
                        <p>Landing vr.1</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE2} />
                        <p>Portfolio 1</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE22} />
                        <p>Portfolio 1</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE32} />
                        <p>Portfolio 1</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE3} />
                        <p>Portfolio 1</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE23} />
                        <p>Single Project</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE33} />
                        <p>About Company</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE4} />
                        <p>Portfolio 1</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE24} />
                        <p>Single Team Member</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE34} />
                        <p>FAQ PAge</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE5} />
                        <p>Contact Us</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE26} />
                        <p>Blog 1</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE35} />
                        <p>Blog 2</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE6} />
                        <p>Pricing</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE27} />
                        <p>Style guide</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={IMAGE36} />
                        <p>Licenses</p>
                    </div>


                </div>
            </Container>
        </div>
    )
}

export default Section2
