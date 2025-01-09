import { Heart } from 'lucide-react'
import 'assets/css/landing';

export const LandingPage = () => {
    return (
        <div className="page-container">
        <div className="content-wrapper">
          <div className="logo-container">
            <Heart className="logo" fill="#ffb3b3" strokeWidth={1} />
          </div>
          
          <div className="slider-container">
            <button className="nav-button left" aria-label="Previous image">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            
            <div className="image-container">
              <div className="image-placeholder">
                Wedding photo
              </div>
            </div>
            
            <button className="nav-button right" aria-label="Next image">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
          
          <div className="dots-container">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`dot ${i === 0 ? 'active' : ''}`} />
            ))}
          </div>
          
          <h1 className="couple-names">Jamiee + Bryan</h1>
        </div>
      </div>
    )
  }