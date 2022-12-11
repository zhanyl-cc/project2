import React from 'react'
import './Section5.css'
import fc from '../img/fc.png'
import logo from '../img/logo.png'
import inst from '../img/inst.png'
import tw from '../img/tw.png'
import { Container } from 'react-bootstrap'


function Section5() {
    return (
        <div className='section5'>
            <h3>Subscribe to Atelier Newsletter</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <Container>
                <input id='text' type="text" name="name" placeholder='Введите свою электронную почту' />
                <input id='btn' type="submit" value="Отправить" />
            </Container>

            <p>* By clicking</p>
            <p>button, you agree to our Terms and that you have read our</p>
            <p>Data Use Policy.</p>

            <div className='container-logo'>
                <img src={fc} />
                <img src={tw} />
                <img src={inst} />
                <img src={logo} />
            </div>
        </div>
    )
}

export default Section5
