import React from "react";
import Pooja from "../../assets/pooja.png";
import Darshan from "../../assets/darshan.png";
import Aarti from "../../assets/aarti.png";
import Accommodity from "../../assets/Accommodation.png";
import Publications from "../../assets/publications.png";
import "./HomeServices.css"

const HomeServices = () => {
  return (
    <>
          <section className="services-section mt-32">
      <div className="title-wrapper about-title-wrapper">
        <div className="about-head">
          <h3>
            <span className="about-head-span"> Devotional Sevas</span>
          </h3>
        </div>
      </div>

      <div className="services">
        <p>
        Welcome to the sacred abode of Lord Mahadev, where spirituality and devotion meet in a serene environment. Our temple offers a range of divine services designed to uplift your soul and deepen your connection with the divine.
          <hr className="bl" />
        </p>
        <div className="ser-icons">
          {/* <div className="first"> */}
           <a href="#"> <div
              className="e-card playing"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <img src={Darshan} alt="" className="image  " />
                <br />
                Darshan
                <br />
              </div>
            </div></a>

           <a href="#"> <div
              className="e-card playing"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <img src={Aarti} alt="" className="image" />
                <br />
                Aarti
                <br />
              </div>
            </div>
            </a>
              
            <a href="#">
            <div
              className="e-card playing"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <img src={Pooja} alt="" className="image" />
                <br />
                Pooja
                <br />
              </div>
            </div></a>

            <a href="#">
            <div
              className="e-card playing"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <img src={Publications} alt="" className="image" />
                <br />
                Astrological Consultations
                <br />
              </div>
            </div></a>

            <a href="#">
            <div
              className="e-card playing"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <img src={Accommodity} alt="" className="image" />
                <br />
                Cultural & Spiritual Events
                <br />
              </div>
            </div>
            </a>
          {/* </div> */}

          {/* <div className="second"> */}
           {/* <a href="https://online.sai.org.in/#/donation"> <div
              className="e-card playing"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <img src={Donate} alt="" className="image circle" />
                <br />
                Donation
                <br />
              </div>
            </div></a> */}
            
            {/* <a href="https://online.sai.org.in/#/login">
            <div
              className="e-card playing"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <img src={membership} alt="" className="image circle" />
                <br />
                Membership
                <br />
              </div>
            </div>
            </a> */}

            {/* <a href="https://sai.org.in/online_services/">
            <div
              className="e-card playing"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div class="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <img src={temple} alt="" className="image circle" />
                <br />
                Temple Registration
                <br />
              </div>
            </div>
            </a> */}
  
            {/* <a href="https://sai.org.in/online_services/">
            <div
              className="e-card playing"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div class="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <img src={palaki} alt="" className="image circle" />
                <br />
                Palkhi Registration
                <br />
              </div>
            </div>
            </a> */}
              
              {/* <a href="https://online.sai.org.in/#/login">
            <div
              className="e-card playing"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div class="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop">
                <img src={magzine} alt="" className="image circle" />
                <br />
                Saileela Magazine Subscription
                <br />
              </div>
            </div>
            </a> */}



                
{/* <div className="coin">
  <div className="side heads">
  <img src={Donate} alt="" className="image white-image" />
  </div>
  <div className="side tails">
  <img src={Donate} alt="" className="image white-image" />
</div>
</div>

<div class="badge-container">
  <div class="badge yellow">
  <img src={Donate} alt="" className="image white-image" />
  </div>
  <div class="badge gray">
    <h3>Tailwind CSS badge design</h3>
  </div>
</div> */}


          {/* </div> */}
        </div>
        
      </div>
    </section>
    </>
  )
}

export default HomeServices
