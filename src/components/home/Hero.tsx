import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="bj_banner_area banner_animation_03"
      data-bg-color="#f5f5f5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="bj_banner_content">
              <div className="offer_text wow fadeInUp">
                SALE UPTO <span>20% OFF</span>
              </div>
              <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                Meet your next favorite book
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                Unleash your imagination with epic fantasy sagas, mystical
                adventures, and tales of otherworldly realms. Embark on quests
                with heroes.
              </p>
              <div className="d-flex">
                <Link
                  to="/shop"
                  className="bj_theme_btn wow fadeInLeft"
                  data-wow-delay="0.2s"
                >
                  SHOP NOW
                </Link>
              </div>
              <div
                className="d-flex community_info_wrapper wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="community_info">
                  <h5>Our Community</h5>
                  <div className="people_img">
                    <div className="avater_img">
                      <img src="assets/img/home/avater_one.png" alt="" />
                    </div>
                    <div className="avater_img">
                      <img src="assets/img/home/avater2.png" alt="" />
                    </div>
                    <div className="avater_img">
                      <img src="assets/img/home/avater3.png" alt="" />
                    </div>
                    <div className="avater_img">
                      <img src="assets/img/home/avater4.png" alt="" />
                    </div>
                    <div className="avater_img">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
                <div className="community_info_number">
                  <div className="number">
                    <span className="counter">100</span>k+
                  </div>
                  <p>Book Readers worldwide</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bj_banner_img">
              <img
                className="wow fadeInRight"
                data-wow-delay="0.4s"
                src="assets/img/home/girl.png"
                alt=""
              />
              <div className="shape_one">
                <img
                  className="layer"
                  data-depth="-0.15"
                  src="assets/img/home/star-one.png"
                  alt=""
                />
              </div>
              <div className="shape_two">
                <img
                  className="layer"
                  data-depth="-0.25"
                  src="assets/img/home/star-two.png"
                  alt=""
                />
              </div>
              <div className="shape_three">
                <img
                  className="layer"
                  data-depth="-0.15"
                  src="assets/img/home/round.png"
                  alt=""
                />
              </div>
              <div className="shape_four">
                <img src="assets/img/home/dot.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
