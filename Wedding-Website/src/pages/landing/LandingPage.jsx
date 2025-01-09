import React, { useState } from 'react';
import 'assets/css/landing';
import * as images from 'assets/images';

export const LandingPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    };
    
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + 5) % 3);
    };
  
    return (
        <div className="carousel-container">
            <div className="heart-decoration">
                <img 
                    src={images.heartLogo}
                    className="heart-image"
                />
            </div>
        
            <div className="carousel-wrapper">
                <button className="nav-button prev" onClick={prevSlide}>
                    &lt;
                </button>
          
          <div className="image-container">
            <img 
              src={images[`carousel${currentSlide + 1}`]} 
              alt={`Carousel image ${currentSlide + 1}`}
            />
          </div>
          
          <button className="nav-button next" onClick={nextSlide}>
            &gt;
          </button>
          
          <div className="pagination">
            {[...Array(3)].map((_, index) => (
              <span 
                key={index} 
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="names">
            Jamiee + Bryan
          </div>
          <div className="footer">
            <div className="footer-content">
              <img 
                src={images.weddingArc} 
                alt="Wedding arch decoration"
                className="footer-icon"
              />
              <div className="footer-text">
                <h2>Our Story</h2>
                <p>
                  Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.
                </p>
              </div>
            </div>
          </div>
        </div>
    );
  };