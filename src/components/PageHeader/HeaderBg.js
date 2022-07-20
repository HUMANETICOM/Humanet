import React from 'react';
import {
    Container,
} from "reactstrap";
import bg from '../../assets/img/bg.mp4';

const HeaderBg = () => {
    return (
        <Container fluid={true}>
        <video className='videoTag' autoPlay loop muted style={videobg}>
          <source src={bg} type='video/mp4'/>
        </video>
        <div className="Wave" style={wave}>
        <svg width="100%" height="355px" viewBox="0 0 1920 355" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Apple-TV" transform="translate(0.000000, -402.000000)" fill="#FFFFFF">
              <path
                d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z"
                id="Path"></path>
            </g>
          </g>
        </svg>
        </div>
      </Container>
    );
}

  const videobg = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    objectFit: 'fit',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  }

  const wave = {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    marginTop: 300,
  }

export default HeaderBg;