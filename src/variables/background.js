import React from "react";

import bg from '../../assets/img/bg.mp4';

const BG = () => {
  return (
    <Container fluid={true} className="bg">
        <video className='videoTag' autoPlay loop muted style={videobg}>
          <source src={bg} type='video/mp4' />
        </video>
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

export default BG;