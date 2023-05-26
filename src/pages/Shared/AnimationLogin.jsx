import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../public/loginAnimation.json';

const AnimationLogin = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div>
            <Lottie 
	    options={defaultOptions}
        height={500}
        width={500}
      />
        </div>
    );
};

export default AnimationLogin;