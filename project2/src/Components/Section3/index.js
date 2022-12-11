import React from 'react'
import './Section3.css'
import Group from '../img/Group.png'
import Group2 from '../img/Group2.png'
import Group3 from '../img/Group3.png'
import { Container } from 'react-bootstrap'
import LAP from '../img/LAP.png'

function Section3() {
    return (
        <div className='section3'>
            <img src={LAP}/>
            <div className='our'>
            <p>Our Core Features</p>
            <h2>Our Services</h2></div>
            <Container>
                <div className='row'>

                    <div className='col-md-4 col-sm-6'>
                        <img src={Group} />
                        <h6>Web Design</h6>
                        <p>Suspendisse varius enim in</p>
                        <p>cursus id rutrum imperdiet. eros elementum tristique.</p>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <img src={Group2} />
                        <h6>UI/UX Design</h6>
                        <p>Suspendisse varius enim in</p>
                        <p>cursus id rutrum imperdiet. eros elementum tristique.</p>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <img src={Group3} />
                        <h6>SEO & Marketing</h6>
                        <p>Suspendisse varius enim in</p>
                        <p>cursus id rutrum imperdiet. eros elementum tristique.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Section3
