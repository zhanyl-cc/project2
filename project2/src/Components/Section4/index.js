import React from 'react'
import './Section4.css'
import IMAGE41 from '../img/IMAGE41.png'
import IMAGE42 from '../img/IMAGE42.png'
import IMAGE43 from '../img/IMAGE43.png'
import IMAGE44 from '../img/IMAGE44.png'
import Vector from '../img/Vector.png'
import small from '../img/small.png'
import { Container } from 'react-bootstrap'



function Section4() {
    return (
        <div className='section4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2 col-sm-6' >
                        <div className='sm'>
                            <img src={small} /></div>
                        <img width='100%' src={IMAGE41} />
                    </div>
                    <div className='col-md-2 col-sm-6'>
                        <div className='sm2'>
                            <img src={small} /></div>
                        <img width='100%' src={IMAGE42} /></div>

                    <div className='col-md-4'>
                        <h3>Follow me on</h3>
                        <button>follow</button>
                        <img width='100%' src={Vector} />
                    </div>
                    <div className='col-md-2 col-sm-6'>
                        <div className='sm3'>
                            <img src={small} /></div>
                        <img width='100%' src={IMAGE43} /></div>
                    <div className='col-md-2 col-sm-6'>
                        <div className='sm4'>
                            <img src={small} /></div>
                        <img width='100%' src={IMAGE44} /></div>

                </div>
            </div>
        </div>
    )
}

export default Section4
