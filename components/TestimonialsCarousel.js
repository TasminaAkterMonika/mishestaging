// components/TestimonialsCarousel.js

import React from 'react';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


// Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const TestimonialsCarousel = () => {
  const options = {
    loop: true,
    margin: 30,
    navText: [
      '<span class="icon-arrow-left"></span>', 
      '<span class="icon-arrow-right"></span>'
    ],
    autoplay: true,
    autoplayTimeout: 4000,
    items: 1,
    dots: true,
  };

  return (
    <div className="testimonials-one__carousel">
      <OwlCarousel 
        className="owl-carousel owl-theme thm-owl__carousel" 
        {...options}
      >
        <div className="item-custom">
          <div className="testimonial">
            <span><p>Dolor massa, a pellentesque nulla congue quis fusce convallis diam. Nam
            torister
            tempor faucibus imperdiet feli sed, vestibulligula. remove the politices
            for
            this projects marketing reserch business high levels in the process we
            try
            to
            best consultations in our work for futures..</p></span>
            <h4>- Ramitas Malika</h4>
            <span>Co-Founder</span>
          </div>
        </div>
        <div className="item-custom">
        <div className="testimonial">
        <span><p>Dolor massa, a pellentesque nulla congue quis fusce convallis diam. Nam
        torister
        tempor faucibus imperdiet feli sed, vestibulligula. remove the politices
        for
        this projects marketing reserch business high levels in the process we
        try
        to
        best consultations in our work for futures..</p></span>
        <h4>- Ramitas Malika</h4>
        <span>Co-Founder</span>
      </div>
        </div>
       
      </OwlCarousel>
    </div>
  );
};

export default TestimonialsCarousel;
