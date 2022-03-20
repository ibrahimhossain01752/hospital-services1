import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i.ibb.co/Fk1J5kT/doctor5.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5 class="para1">Best Offers On</h5>
             <h1 class="beauti-title"><span class="colec2">Natural Cosmetics</span> <span class="colec">Collections</span></h1>
             <h5 class="para2">flat 30% off</h5>
             {/* <button class="btn btn-1">View More</button> */}
            </div>
           
          </div>
          <div class="carousel-item">
            <img src="https://i.ibb.co/tqdhmXF/doctor11.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption item-2  d-none d-md-block">
            <h5 class="para3">Best Offers On</h5>
             <h1 class="beauti-title para4"><span class="colec2">Natural Cosmetics</span> <span class="colec">Collections</span></h1>
             <h5 class="para2">flat 30% off</h5>
              {/* <div class="style-image">
                  <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/files/slider-logo_small.png?v=1572585343" alt="..."/>
                  
              </div> */}
             
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://i.ibb.co/k0P581D/doctor9.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption item-2  d-none d-md-block">
            <h5 class="para3">Best Offers On</h5>
             <h1 class="beauti-title para4"><span class="colec2">Natural Cosmetics</span> <span class="colec">Collections</span></h1>
             <h5 class="para2">flat 30% off</h5>
              {/* <div class="style-image">
                  <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/files/slider-logo_small.png?v=1572585343" alt="..."/>
                  
              </div> */}
             
            </div>
          </div>
          {/* <div class="carousel-item">
            <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/files/slider-3-1_2000x.jpg?v=1572863329
" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div> */}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default Banner;