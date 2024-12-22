const Home = () => {
  return (
    <>
      {/* <!-- banner area  --> */}
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
                  <a
                    href="shop.html"
                    className="bj_theme_btn wow fadeInLeft"
                    data-wow-delay="0.2s"
                  >
                    SHOP NOW
                  </a>
                  <a
                    href="#product_tab_showcase_id"
                    className="bj_theme_btn strock_btn wow fadeInLeft"
                    data-wow-delay="0.3s"
                  >
                    TAKE A TOUR
                  </a>
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
      {/* <!-- banner area  --> */}

      {/* <!-- product tab showcase area  --> */}
      <section
        className="product_tab_showcase_area sec_padding"
        id="product_tab_showcase_id"
      >
        <div className="container">
          <div className="section_title wow fadeInUp">
            <h2 className="title title_two">Browse By Genres</h2>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="0.2s">
            <div className="col-lg-4">
              <ul
                className="nav nav-pills tab_slider_thumb"
                id="pills-tab-one"
                role="tablist"
              >
                <li role="presentation" className="nav-item">
                  <a
                    className="nav-link active"
                    id="pills-adventure-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-adventure"
                    role="tab"
                    aria-controls="pills-adventure"
                    aria-selected="true"
                  >
                    <strong>Adventure</strong> <span>(250 Books)</span>
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-bio-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-bio"
                    role="tab"
                    aria-controls="pills-bio"
                    aria-selected="false"
                  >
                    <strong>Biography</strong> <span>(310 Books) </span>
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-classic-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-classic"
                    role="tab"
                    aria-controls="pills-classic"
                    aria-selected="false"
                  >
                    <strong>Classic</strong> <span>(450 Books)</span>
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-harvard-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-harvard"
                    role="tab"
                    aria-controls="pills-harvard"
                    aria-selected="false"
                  >
                    <strong>Harvard Classics</strong> <span>(150 Books)</span>
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-design-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-design"
                    role="tab"
                    aria-selected="false"
                  >
                    <strong>Designing Books</strong> <span> (250 Books) </span>
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-philosophy-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-philosophy"
                    role="tab"
                    aria-selected="false"
                  >
                    <strong>Philosophy</strong> <span> (590 Books) </span>
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-science-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-science"
                    role="tab"
                    aria-selected="false"
                  >
                    <strong>Science Fiction</strong> <span> (250 Books) </span>
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-short-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-short"
                    role="tab"
                    aria-selected="false"
                  >
                    <strong>Short Story</strong> <span>(190 Books) </span>
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-romantic-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-romantic"
                    role="tab"
                    aria-selected="false"
                  >
                    <strong>Romantic</strong> <span> (120 Books) </span>
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-thriller-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-thriller"
                    role="tab"
                    aria-selected="false"
                  >
                    <strong>Thriller</strong> <span> (140 Books) </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8">
              <div className="tab-content" id="pills-tabContent-two">
                <div
                  className="tab-pane fade show active"
                  id="pills-adventure"
                  role="tabpanel"
                  aria-labelledby="pills-adventure-tab"
                >
                  <div className="tab_slider_content slick_slider_tab">
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book2.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Songbird's Melody</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Muaz BK</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book2.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Songbird's Melody</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Muaz BK</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book2.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Songbird's Melody</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Muaz BK</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-bio"
                  role="tabpanel"
                  aria-labelledby="pills-bio-tab"
                >
                  <div className="tab_slider_content slick_slider_tab">
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book2.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book3.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book2.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-classic"
                  role="tabpanel"
                  aria-labelledby="pills-classic-tab"
                >
                  <div className="tab_slider_content slick_slider_tab">
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book3.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-harvard"
                  role="tabpanel"
                  aria-labelledby="pills-harvard-tab"
                >
                  <div className="tab_slider_content slick_slider_tab">
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book4.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book2.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-short"
                  role="tabpanel"
                  aria-labelledby="pills-short-tab"
                >
                  <div className="tab_slider_content slick_slider_tab">
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book2.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book2.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-philosophy"
                  role="tabpanel"
                  aria-labelledby="pills-philosophy-tab"
                >
                  <div className="tab_slider_content slick_slider_tab">
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book5.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book2.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-romantic"
                  role="tabpanel"
                  aria-labelledby="pills-romantic-tab"
                >
                  <div className="tab_slider_content slick_slider_tab">
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book2.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book2.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-science"
                  role="tabpanel"
                  aria-labelledby="pills-science-tab"
                >
                  <div className="tab_slider_content slick_slider_tab">
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book2.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book2.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-thriller"
                  role="tabpanel"
                  aria-labelledby="pills-thriller-tab"
                >
                  <div className="tab_slider_content slick_slider_tab">
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book3.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book2.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-design"
                  role="tabpanel"
                  aria-labelledby="pills-design-tab"
                >
                  <div className="tab_slider_content slick_slider_tab">
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book4.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book3.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book2.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Austin Kelon</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bj_new_pr_item">
                        <a href="product-single.html" className="img">
                          <img src="assets/img/home/tab_book1.png" alt="book" />
                        </a>
                        <a
                          href="my-wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add to Wishlist"
                          className="wish_btn"
                          tabIndex="-1"
                        >
                          <i className="icon_heart_alt"></i>
                        </a>
                        <div className="bj_new_pr_content_two">
                          <div className="d-flex justify-content-between">
                            <a href="product-single.html">
                              <h5>The Midnight Library</h5>
                            </a>
                            <div className="book_price">
                              <sup>$</sup>25<sup>.00</sup>
                            </div>
                          </div>
                          <div className="writer_name">
                            <i className="icon-user"></i>
                            <a href="author-single.html">Rick Riordan</a>
                          </div>
                          <div className="ratting">
                            <div className="ratting_icon">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <span>(252)</span>
                          </div>
                          <a href="checkout.html" className="bj_theme_btn">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- product tab showcase area  --> */}

      {/* <!-- best selling product area  --> */}
      <section
        className="best_selling_pr_area sec_padding"
        data-bg-color="#f5f5f5"
      >
        <div className="container">
          <div
            className="section_title section_title_two text-center wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <h2 className="title title_two">New Arrivals</h2>
            <p>Reading books helps you to develop your communication skill</p>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div
                className="bj_new_pr_item_two d-flex wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <a href="product-single.html" className="img">
                  <img src="assets/img/home/new_book_img1.jpg" alt="book" />
                </a>
                <div className="bj_new_pr_content_two">
                  <a href="shop-sidebar.html" className="category">
                    LIfe
                  </a>
                  <a href="product-single.html">
                    <h4 className="bj_new_pr_title">The light we can’t see</h4>
                  </a>
                  <div className="writer_name">
                    by <a href="author-single.html">Anthony Doerr </a>
                  </div>
                  <div className="book_price">
                    <sup>$</sup>25<sup>.00</sup>
                  </div>
                  <a href="checkout.html" className="bj_theme_btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="bj_new_pr_item_two d-flex wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <a href="product-single.html" className="img">
                  <img src="assets/img/home/new_book_img2.jpg" alt="book" />
                </a>
                <div className="bj_new_pr_content_two">
                  <a href="shop-sidebar.html" className="category">
                    Novel
                  </a>
                  <a href="product-single.html">
                    <h4 className="bj_new_pr_title">Where The Crawdads</h4>
                  </a>
                  <div className="writer_name">
                    by <a href="author-single.html">Anthony Doerr </a>
                  </div>
                  <div className="book_price">
                    <sup>$</sup>50<sup>.00</sup>
                  </div>
                  <a href="checkout.html" className="bj_theme_btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="bj_new_pr_item_two d-flex wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <a href="product-single.html" className="img">
                  <img src="assets/img/home/new_book_img3.jpg" alt="book" />
                </a>
                <div className="bj_new_pr_content_two">
                  <a href="shop-sidebar.html" className="category">
                    Comic
                  </a>
                  <a href="product-single.html">
                    <h4 className="bj_new_pr_title">Rich People Problems</h4>
                  </a>
                  <div className="writer_name">
                    by <a href="author-single.html">Anthony Doerr </a>
                  </div>
                  <div className="book_price">
                    <sup>$</sup>50<sup>.00</sup>
                  </div>
                  <a href="checkout.html" className="bj_theme_btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div
                className="bj_new_pr_item_two d-flex wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <a href="product-single.html" className="img">
                  <img src="assets/img/home/new_book_img5.jpg" alt="book" />
                </a>
                <div className="bj_new_pr_content_two">
                  <a href="shop-sidebar.html" className="category">
                    ROMANCE
                  </a>
                  <a href="product-single.html">
                    <h4 className="bj_new_pr_title">A heart so broken</h4>
                  </a>
                  <div className="writer_name">
                    by <a href="author-single.html">Anthony Doerr </a>
                  </div>
                  <div className="book_price">
                    <sup>$</sup>75<sup>.00</sup>
                  </div>
                  <a href="checkout.html" className="bj_theme_btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div
                className="bj_new_pr_item_two d-flex wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <a href="product-single.html" className="img">
                  <img src="assets/img/home/new_book_img1.jpg" alt="book" />
                </a>
                <div className="bj_new_pr_content_two">
                  <a href="shop-sidebar.html" className="category">
                    SUFI
                  </a>
                  <a href="product-single.html">
                    <h4 className="bj_new_pr_title">Follow me to ground</h4>
                  </a>
                  <div className="writer_name">
                    by <a href="author-single.html">Anthony Doerr </a>
                  </div>
                  <div className="book_price">
                    <sup>$</sup>50<sup>.00</sup>
                  </div>
                  <a href="checkout.html" className="bj_theme_btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div
                className="bj_new_pr_item_two d-flex wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <a href="product-single.html" className="img">
                  <img src="assets/img/home/new_book_img6.jpg" alt="book" />
                </a>

                <div className="bj_new_pr_content_two">
                  <a href="shop-sidebar.html" className="category">
                    POETRY
                  </a>
                  <a href="product-single.html">
                    <h4 className="bj_new_pr_title">Long Bright River</h4>
                  </a>
                  <div className="writer_name">
                    by <a href="author-single.html">Anthony Doerr </a>
                  </div>
                  <div className="book_price">
                    <sup>$</sup>90<sup>.00</sup>
                  </div>
                  <a href="#" className="bj_theme_btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a
              href="shop.html"
              className="bj_theme_btn strock_btn blue_strock_btn wow fadeInUp"
              data-wow-delay="0.4s"
            >
              View All
            </a>
          </div>
        </div>
      </section>

      <section className="best_selling_pr_area sec_padding">
        <div className="container">
          <div
            className="section_title section_title_two text-center wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <h2 className="title title_two">Peoples Choice</h2>
            <p>Reading books helps you to develop your communication skill</p>
          </div>

          <ul
            className="nav nav-pills best_pr_tab d-flex justify-content-center wow fadeInUp"
            data-wow-delay="0.4s"
            id="pills-tab"
            role="tablist"
          >
            <li role="presentation" className="nav-item">
              <a
                className="nav-link px-0 active"
                id="pills-best-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-best"
                role="tab"
                aria-controls="pills-best"
                aria-selected="true"
              >
                BEST SELLING BOOKS
              </a>
            </li>
            <li role="presentation" className="nav-item">
              <a
                className="nav-link px-0"
                id="pills-offer-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-offer"
                role="tab"
                aria-controls="pills-offer"
                aria-selected="false"
              >
                OFFER
              </a>
            </li>
            <li role="presentation" className="nav-item">
              <a
                className="nav-link px-0"
                id="pills-featured-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-featured"
                role="tab"
                aria-controls="pills-featured"
                aria-selected="false"
              >
                FEATURED BOOKS
              </a>
            </li>
            <li role="presentation" className="nav-item">
              <a
                className="nav-link px-0"
                id="pills-trending-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-trending"
                role="tab"
                aria-controls="pills-trending"
                aria-selected="false"
              >
                TRENDING
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-best"
              role="tabpanel"
              aria-labelledby="pills-best-tab"
            >
              <div className="best_slider">
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-4.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">
                            Echoes of Eternity
                          </h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-2.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">I Must Betray You</h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Muaz Bin</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-3.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">
                            How To Babysit A..
                          </h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-1.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">
                            Surprisingly Sarah
                          </h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-2.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">
                            Surprisingly Sarah
                          </h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade explore-menu"
              id="pills-offer"
              role="tabpanel"
              aria-labelledby="pills-offer-tab"
            >
              <div className="best_slider">
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-3.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">
                            Echoes of Eternity
                          </h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-4.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">I Must Betray You</h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-1.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">
                            How To Babysit A..
                          </h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-2.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">
                            Surprisingly Sarah
                          </h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-3.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">
                            Surprisingly Sarah
                          </h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade explore-menu"
              id="pills-featured"
              role="tabpanel"
              aria-labelledby="pills-featured-tab"
            >
              <div className="best_slider">
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-4.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">
                            Echoes of Eternity
                          </h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-3.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">I Must Betray You</h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-1.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">
                            How To Babysit A..
                          </h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-4.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">
                            Surprisingly Sarah
                          </h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-1.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">
                            Surprisingly Sarah
                          </h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade explore-menu"
              id="pills-trending"
              role="tabpanel"
              aria-labelledby="pills-trending-tab"
            >
              <div className="best_slider">
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-2.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">
                            Echoes of Eternity
                          </h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-3.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">I Must Betray You</h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-4.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">
                            How To Babysit A..
                          </h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-1.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">
                            Surprisingly Sarah
                          </h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="bj_new_pr_item">
                    <a href="product-single.html" className="img">
                      <img src="assets/img/home/choice-2.png" alt="book" />
                    </a>
                    <a
                      href="my-wishlist.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add to Wishlist"
                      className="wish_btn"
                      tabIndex="-1"
                    >
                      <i className="icon_heart_alt"></i>
                    </a>
                    <div className="bj_new_pr_content_two">
                      <div className="d-flex justify-content-between">
                        <a href="product-single.html">
                          <h4 className="bj_new_pr_title">
                            Surprisingly Sarah
                          </h4>
                        </a>
                        <div className="book_price">
                          <sup>$</sup>25<sup>.00</sup>
                        </div>
                      </div>
                      <div className="writer_name">
                        <i className="icon-user"></i>
                        <a href="author-single.html">Rick Riordan</a>
                      </div>
                      <div className="ratting">
                        <div className="ratting_icon">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span>(252)</span>
                      </div>
                      <a href="checkout.html" className="bj_theme_btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- best selling product area  --> */}

      {/* <!-- new product area  --> */}
      <section
        className="bj_new_product_area sec_padding"
        data-bg-color="#f5f5f5"
      >
        <div className="container">
          <div className="section_title section_title_two text-center">
            <h2 className="title title_two">Limited Offer</h2>
            <p>Get Special Promo All Books Are 50% Off Now!</p>
          </div>
          <div id="clockdiv" className="clock" data-date="2024-12-02"></div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="bj_new_pr_item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="ribon">30% off</div>
                <a href="product-single.html" className="img">
                  <img src="assets/img/home/book5.jpg" alt="book" />
                </a>
                <div className="bj_new_pr_content">
                  <a href="product-single.html">
                    <h4 className="bj_new_pr_title">The Sun And The Star</h4>
                  </a>
                  <div className="bj_pr_meta">
                    <div className="writer_name">
                      by <a href="author-single.html">Ann Napolitano </a>
                    </div>
                    <div className="book_price mt-2">
                      <del className="me-2">350</del> $125
                    </div>
                  </div>
                  <a href="checkout.html" className="bj_theme_btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="bj_new_pr_item wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="ribon">30% off</div>
                <a href="product-single.html" className="img">
                  <img src="assets/img/home/book6.jpg" alt="book" />
                </a>
                <div className="bj_new_pr_content">
                  <a href="product-single.html">
                    <h4 className="bj_new_pr_title">The Sun And The Star</h4>
                  </a>
                  <div className="bj_pr_meta">
                    <div className="writer_name">
                      by <a href="author-single.html">Rick Riordan </a>
                    </div>
                    <div className="book_price mt-2">
                      <del className="me-2">250</del> $125
                    </div>
                  </div>
                  <a href="checkout.html" className="bj_theme_btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="bj_new_pr_item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="ribon">30% off</div>
                <a href="product-single.html" className="img">
                  <img src="assets/img/home/book7.jpg" alt="book" />
                </a>
                <div className="bj_new_pr_content">
                  <a href="product-single.html">
                    <h4 className="bj_new_pr_title">The Sun And The Star</h4>
                  </a>
                  <div className="bj_pr_meta">
                    <div className="writer_name">
                      by <a href="author-single.html">Ann Napolitano </a>
                    </div>
                    <div className="book_price mt-2">
                      <del className="me-2">250</del> $125
                    </div>
                  </div>
                  <a href="checkout.html" className="bj_theme_btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="bj_new_pr_item wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="ribon">30% off</div>
                <a href="product-single.html" className="img">
                  <img src="assets/img/home/book8.jpg" alt="book" />
                </a>
                <div className="bj_new_pr_content">
                  <a href="product-single.html">
                    <h4 className="bj_new_pr_title">The Sun And The Star</h4>
                  </a>
                  <div className="bj_pr_meta">
                    <div className="writer_name">
                      by <a href="#">Rick Riordan</a>
                    </div>
                    <div className="book_price mt-2">
                      <del className="me-2">150</del> $125
                    </div>
                  </div>
                  <a href="checkout.html" className="bj_theme_btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a
              href="shop.html"
              className="bj_theme_btn strock_btn blue_strock_btn wow fadeInUp"
              data-wow-delay="0.4s"
            >
              View All
            </a>
          </div>
        </div>
      </section>
      {/* <!-- new product area  --> */}

      {/* <!-- product featured author area  --> */}
      <section className="pr_featured_author_area sec_padding">
        <div className="container">
          <div className="section_title">
            <h2 className="title title_two">Featured Author Of Month</h2>
          </div>

          <div className="row">
            <div className="col-xl-4">
              <div
                className="nav nav-pills tab_slider_thumb"
                id="pills-tab-two"
                role="tablist"
              >
                <a
                  className="nav-link active"
                  id="pills-functional-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-functional"
                  role="tab"
                  aria-controls="pills-functional"
                  aria-selected="true"
                >
                  <strong>Fictional</strong>
                </a>

                <a
                  className="nav-link"
                  id="pills-non-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-non"
                  role="tab"
                  aria-controls="pills-non"
                  aria-selected="false"
                >
                  <strong>Non Fictional</strong>
                </a>

                <a
                  className="nav-link"
                  id="pills-religious-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-religious"
                  role="tab"
                  aria-controls="pills-religious"
                  aria-selected="false"
                >
                  <strong>Religious</strong>
                </a>

                <a
                  className="nav-link"
                  id="pills-academic-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-academic"
                  role="tab"
                  aria-controls="pills-academic"
                  aria-selected="false"
                >
                  <strong>Academic Books</strong>
                </a>

                <a
                  className="nav-link"
                  id="pills-career-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-career"
                  role="tab"
                  aria-controls="pills-career"
                  aria-selected="false"
                >
                  <strong>Career Guideline</strong>
                </a>

                <a
                  className="nav-link"
                  id="pills-philosophys-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-philosophys"
                  role="tab"
                  aria-controls="pills-philosophys"
                  aria-selected="false"
                >
                  <strong>Philosophy</strong>
                </a>

                <a
                  className="nav-link"
                  id="pills-poetry-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-poetry"
                  role="tab"
                  aria-controls="pills-poetry"
                  aria-selected="false"
                >
                  <strong>Poetry</strong>
                </a>

                <a
                  className="nav-link"
                  id="pills-sufism-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-sufism"
                  role="tab"
                  aria-controls="pills-sufism"
                  aria-selected="false"
                >
                  <strong>Sufism</strong>
                </a>

                <a
                  className="nav-link"
                  id="pills-novel-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-novel"
                  role="tab"
                  aria-controls="pills-novel"
                  aria-selected="false"
                >
                  <strong>Novel</strong>
                </a>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="tab-arrow-controls">
                <button className="tab-arrow prev-tab">
                  <i className="arrow_carrot-left"></i>
                </button>
                <button className="tab-arrow next-tab">
                  <i className="arrow_carrot-right"></i>
                </button>
              </div>
              <div className="tab-content" id="pills-tabContent-three">
                <div
                  className="tab-pane fade show active"
                  id="pills-functional"
                  role="tabpanel"
                  aria-labelledby="pills-functional-tab"
                >
                  <div className="tab_slider_content">
                    <div className="bj_author_single d-flex align-items-center">
                      <img src="assets/img/home/author.jpg" alt="" />
                      <div className="bj_author_single_content">
                        <h2>Gustavo Carder</h2>
                        <p>
                          Diam, urna, ornare leo facilisis suspendisse eu rutrum
                          id augue cursus tincidunt nisl eget ornare pharetra ac
                          pharetra, pulvinar ipsum.
                        </p>
                        <ul className="book_info">
                          <li>
                            <span>Position:</span> Book Writer
                          </li>
                          <li>
                            <span>Book Count:</span>23
                          </li>
                          <li>
                            <span>Born:</span>1973
                          </li>
                          <li>
                            <span>Category:</span>
                            <a href="#">Biography,</a>
                            <a href="#">Fantasy,</a>
                            <a href="#">Sci-Fi</a>
                          </li>
                          <li>
                            <span>Language:</span>
                            <a href="#">English,</a>
                            <a href="#">German</a>
                          </li>
                        </ul>
                        <ul className="list-unstyled f_social_round">
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-reddit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-quora"></i>
                            </a>
                          </li>
                        </ul>
                        <a
                          href="author-single.html"
                          className="bj_theme_btn text_btn"
                        >
                          More Details<i className="arrow_right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-non"
                  role="tabpanel"
                  aria-labelledby="pills-non-tab"
                >
                  <div className="tab_slider_content">
                    <div className="bj_author_single d-flex align-items-center">
                      <img src="assets/img/home/author-9.jpg" alt="" />
                      <div className="bj_author_single_content">
                        <h2>Gustavo Carder</h2>
                        <p>
                          Diam, urna, ornare leo facilisis suspendisse eu rutrum
                          id augue cursus tincidunt nisl eget ornare pharetra ac
                          pharetra, pulvinar ipsum.
                        </p>
                        <ul className="book_info">
                          <li>
                            <span>Position:</span> Book Writer
                          </li>
                          <li>
                            <span>Book Count:</span>23
                          </li>
                          <li>
                            <span>Born:</span>1973
                          </li>
                          <li>
                            <span>Category:</span>
                            <a href="#">Biography,</a>
                            <a href="#">Fantasy,</a>
                            <a href="#">Sci-Fi</a>
                          </li>
                          <li>
                            <span>Language:</span>
                            <a href="#">English,</a>
                            <a href="#">German</a>
                          </li>
                        </ul>
                        <ul className="list-unstyled f_social_round">
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-reddit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-quora"></i>
                            </a>
                          </li>
                        </ul>
                        <a
                          href="author-single.html"
                          className="bj_theme_btn text_btn"
                        >
                          More Details<i className="arrow_right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-religious"
                  role="tabpanel"
                  aria-labelledby="pills-religious-tab"
                >
                  <div className="tab_slider_content">
                    <div className="bj_author_single d-flex align-items-center">
                      <img src="assets/img/home/author-2.jpg" alt="" />
                      <div className="bj_author_single_content">
                        <h2>Gustavo Carder</h2>
                        <p>
                          Diam, urna, ornare leo facilisis suspendisse eu rutrum
                          id augue cursus tincidunt nisl eget ornare pharetra ac
                          pharetra, pulvinar ipsum.
                        </p>
                        <ul className="book_info">
                          <li>
                            <span>Position:</span> Book Writer
                          </li>
                          <li>
                            <span>Book Count:</span>23
                          </li>
                          <li>
                            <span>Born:</span>1973
                          </li>
                          <li>
                            <span>Category:</span>
                            <a href="#">Biography,</a>
                            <a href="#">Fantasy,</a>
                            <a href="#">Sci-Fi</a>
                          </li>
                          <li>
                            <span>Language:</span>
                            <a href="#">English,</a>
                            <a href="#">German</a>
                          </li>
                        </ul>
                        <ul className="list-unstyled f_social_round">
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-reddit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-quora"></i>
                            </a>
                          </li>
                        </ul>
                        <a
                          href="author-single.html"
                          className="bj_theme_btn text_btn"
                        >
                          More Details<i className="arrow_right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-academic"
                  role="tabpanel"
                  aria-labelledby="pills-religious-tab"
                >
                  <div className="tab_slider_content">
                    <div className="bj_author_single d-flex align-items-center">
                      <img src="assets/img/home/author-3.jpg" alt="" />
                      <div className="bj_author_single_content">
                        <h2>Gustavo Carder</h2>
                        <p>
                          Diam, urna, ornare leo facilisis suspendisse eu rutrum
                          id augue cursus tincidunt nisl eget ornare pharetra ac
                          pharetra, pulvinar ipsum.
                        </p>
                        <ul className="book_info">
                          <li>
                            <span>Position:</span> Book Writer
                          </li>
                          <li>
                            <span>Book Count:</span>23
                          </li>
                          <li>
                            <span>Born:</span>1973
                          </li>
                          <li>
                            <span>Category:</span>
                            <a href="#">Biography,</a>
                            <a href="#">Fantasy,</a>
                            <a href="#">Sci-Fi</a>
                          </li>
                          <li>
                            <span>Language:</span>
                            <a href="#">English,</a>
                            <a href="#">German</a>
                          </li>
                        </ul>
                        <ul className="list-unstyled f_social_round">
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-reddit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-quora"></i>
                            </a>
                          </li>
                        </ul>
                        <a
                          href="author-single.html"
                          className="bj_theme_btn text_btn"
                        >
                          More Details<i className="arrow_right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-career"
                  role="tabpanel"
                  aria-labelledby="pills-religious-tab"
                >
                  <div className="tab_slider_content">
                    <div className="bj_author_single d-flex align-items-center">
                      <img src="assets/img/home/author-4.jpg" alt="" />
                      <div className="bj_author_single_content">
                        <h2>Gustavo Carder</h2>
                        <p>
                          Diam, urna, ornare leo facilisis suspendisse eu rutrum
                          id augue cursus tincidunt nisl eget ornare pharetra ac
                          pharetra, pulvinar ipsum.
                        </p>
                        <ul className="book_info">
                          <li>
                            <span>Position:</span> Book Writer
                          </li>
                          <li>
                            <span>Book Count:</span>23
                          </li>
                          <li>
                            <span>Born:</span>1973
                          </li>
                          <li>
                            <span>Category:</span>
                            <a href="#">Biography,</a>
                            <a href="#">Fantasy,</a>
                            <a href="#">Sci-Fi</a>
                          </li>
                          <li>
                            <span>Language:</span>
                            <a href="#">English,</a>
                            <a href="#">German</a>
                          </li>
                        </ul>
                        <ul className="list-unstyled f_social_round">
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-reddit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-quora"></i>
                            </a>
                          </li>
                        </ul>
                        <a
                          href="author-single.html"
                          className="bj_theme_btn text_btn"
                        >
                          More Details<i className="arrow_right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-philosophys"
                  role="tabpanel"
                  aria-labelledby="pills-religious-tab"
                >
                  <div className="tab_slider_content">
                    <div className="bj_author_single d-flex align-items-center">
                      <img src="assets/img/home/author-5.jpg" alt="" />
                      <div className="bj_author_single_content">
                        <h2>Gustavo Carder</h2>
                        <p>
                          Diam, urna, ornare leo facilisis suspendisse eu rutrum
                          id augue cursus tincidunt nisl eget ornare pharetra ac
                          pharetra, pulvinar ipsum.
                        </p>
                        <ul className="book_info">
                          <li>
                            <span>Position:</span> Book Writer
                          </li>
                          <li>
                            <span>Book Count:</span>23
                          </li>
                          <li>
                            <span>Born:</span>1973
                          </li>
                          <li>
                            <span>Category:</span>
                            <a href="#">Biography,</a>
                            <a href="#">Fantasy,</a>
                            <a href="#">Sci-Fi</a>
                          </li>
                          <li>
                            <span>Language:</span>
                            <a href="#">English,</a>
                            <a href="#">German</a>
                          </li>
                        </ul>
                        <ul className="list-unstyled f_social_round">
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-reddit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-quora"></i>
                            </a>
                          </li>
                        </ul>
                        <a
                          href="author-single.html"
                          className="bj_theme_btn text_btn"
                        >
                          More Details<i className="arrow_right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-poetry"
                  role="tabpanel"
                  aria-labelledby="pills-religious-tab"
                >
                  <div className="tab_slider_content">
                    <div className="bj_author_single d-flex align-items-center">
                      <img src="assets/img/home/author-6.jpg" alt="" />
                      <div className="bj_author_single_content">
                        <h2>Gustavo Carder</h2>
                        <p>
                          Diam, urna, ornare leo facilisis suspendisse eu rutrum
                          id augue cursus tincidunt nisl eget ornare pharetra ac
                          pharetra, pulvinar ipsum.
                        </p>
                        <ul className="book_info">
                          <li>
                            <span>Position:</span> Book Writer
                          </li>
                          <li>
                            <span>Book Count:</span>23
                          </li>
                          <li>
                            <span>Born:</span>1973
                          </li>
                          <li>
                            <span>Category:</span>
                            <a href="#">Biography,</a>
                            <a href="#">Fantasy,</a>
                            <a href="#">Sci-Fi</a>
                          </li>
                          <li>
                            <span>Language:</span>
                            <a href="#">English,</a>
                            <a href="#">German</a>
                          </li>
                        </ul>
                        <ul className="list-unstyled f_social_round">
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-reddit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-quora"></i>
                            </a>
                          </li>
                        </ul>
                        <a
                          href="author-single.html"
                          className="bj_theme_btn text_btn"
                        >
                          More Details<i className="arrow_right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-sufism"
                  role="tabpanel"
                  aria-labelledby="pills-religious-tab"
                >
                  <div className="tab_slider_content">
                    <div className="bj_author_single d-flex align-items-center">
                      <img src="assets/img/home/author-7.jpg" alt="" />
                      <div className="bj_author_single_content">
                        <h2>Gustavo Carder</h2>
                        <p>
                          Diam, urna, ornare leo facilisis suspendisse eu rutrum
                          id augue cursus tincidunt nisl eget ornare pharetra ac
                          pharetra, pulvinar ipsum.
                        </p>
                        <ul className="book_info">
                          <li>
                            <span>Position:</span> Book Writer
                          </li>
                          <li>
                            <span>Book Count:</span>23
                          </li>
                          <li>
                            <span>Born:</span>1973
                          </li>
                          <li>
                            <span>Category:</span>
                            <a href="#">Biography,</a>
                            <a href="#">Fantasy,</a>
                            <a href="#">Sci-Fi</a>
                          </li>
                          <li>
                            <span>Language:</span>
                            <a href="#">English,</a>
                            <a href="#">German</a>
                          </li>
                        </ul>
                        <ul className="list-unstyled f_social_round">
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-reddit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-quora"></i>
                            </a>
                          </li>
                        </ul>
                        <a
                          href="author-single.html"
                          className="bj_theme_btn text_btn"
                        >
                          More Details<i className="arrow_right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-novel"
                  role="tabpanel"
                  aria-labelledby="pills-religious-tab"
                >
                  <div className="tab_slider_content">
                    <div className="bj_author_single d-flex align-items-center">
                      <img src="assets/img/home/author-8.jpg" alt="" />
                      <div className="bj_author_single_content">
                        <h2>Gustavo Carder</h2>
                        <p>
                          Diam, urna, ornare leo facilisis suspendisse eu rutrum
                          id augue cursus tincidunt nisl eget ornare pharetra ac
                          pharetra, pulvinar ipsum.
                        </p>
                        <ul className="book_info">
                          <li>
                            <span>Position:</span> Book Writer
                          </li>
                          <li>
                            <span>Book Count:</span>23
                          </li>
                          <li>
                            <span>Born:</span>1973
                          </li>
                          <li>
                            <span>Category:</span>
                            <a href="#">Biography,</a>
                            <a href="#">Fantasy,</a>
                            <a href="#">Sci-Fi</a>
                          </li>
                          <li>
                            <span>Language:</span>
                            <a href="#">English,</a>
                            <a href="#">German</a>
                          </li>
                        </ul>
                        <ul className="list-unstyled f_social_round">
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-reddit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-quora"></i>
                            </a>
                          </li>
                        </ul>
                        <a
                          href="author-single.html"
                          className="bj_theme_btn text_btn"
                        >
                          More Details<i className="arrow_right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- product featured author area   --> */}

      {/* <!-- bj testimonial area --> */}
      <section
        className="bj_testimonial_area sec_padding"
        data-bg-color="#f5f5f5"
      >
        <div className="container">
          <div
            className="section_title section_title_two text-center wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <h2 className="title title_two">Testimonial</h2>
            <p>What Our Happy Client Said</p>
          </div>
          <div
            className="swiper mySwiper bj_testimonial_inner wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <img
                      className="testimonail_img"
                      src="assets/img/home/testimonial1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-8">
                    <div className="bj_testimonial_content">
                      <h4>
                        “My experience with Mark is a complete sucess, from
                        customer service, wide range of products, clean store,
                        purchasing experience, the newsletter.Thank you.”
                      </h4>
                      <div className="author">
                        <h5>Leona Paul</h5>
                        <span className="position">CEO of Floatcom</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <img
                      className="testimonail_img"
                      src="assets/img/home/testimonial2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-8">
                    <div className="bj_testimonial_content">
                      <h4>
                        “My experience with Mark is a complete sucess, from
                        customer service, wide range of products, clean store,
                        purchasing experience, the newsletter.Thank you.”
                      </h4>
                      <div className="author">
                        <h5>Michael Anderson</h5>
                        <span className="position">Senior Product Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <img
                      className="testimonail_img"
                      src="assets/img/home/testimonial3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-8">
                    <div className="bj_testimonial_content">
                      <h4>
                        “My experience with Mark is a complete sucess, from
                        customer service, wide range of products, clean store,
                        purchasing experience, the newsletter.Thank you.”
                      </h4>
                      <div className="author">
                        <h5>Jennifer Lee</h5>
                        <span className="position">Creative Director</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <img
                      className="testimonail_img"
                      src="assets/img/home/testimonial4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-8">
                    <div className="bj_testimonial_content">
                      <h4>
                        “My experience with Mark is a complete sucess, from
                        customer service, wide range of products, clean store,
                        purchasing experience, the newsletter.Thank you.”
                      </h4>
                      <div className="author">
                        <h5>Robert Turner</h5>
                        <span className="position">IT Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <img
                      className="testimonail_img"
                      src="assets/img/home/testimonial5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-8">
                    <div className="bj_testimonial_content">
                      <h4>
                        “My experience with Mark is a complete sucess, from
                        customer service, wide range of products, clean store,
                        purchasing experience, the newsletter.Thank you.”
                      </h4>
                      <div className="author">
                        <h5>John Smith</h5>
                        <span className="position">Co-founder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <img
                      className="testimonail_img"
                      src="assets/img/home/testimonial6.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-8">
                    <div className="bj_testimonial_content">
                      <h4>
                        “My experience with Mark is a complete sucess, from
                        customer service, wide range of products, clean store,
                        purchasing experience, the newsletter.Thank you.”
                      </h4>
                      <div className="author">
                        <h5>Richard Brown</h5>
                        <span className="position">Financial Analyst</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="slider_pagination_inner">
              <div className="swiper-pagination"></div>
              <a href="#" className="bj_theme_btn text_btn">
                See all reviews<i className="arrow_right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- bj testimonial area --> */}

      {/* <!-- bj subscribe area --> */}
      <section className="bj_subscribe_area_two">
        <div className="container">
          <div
            className="bj_subscribe_inner_two text-center wow fadeInUp banner_animation_03"
            data-wow-delay="0.2s"
            data-bg-color="#f5f5f5"
          >
            <div className="bg_shap">
              <div className="shap_one">
                <img
                  className="layer"
                  data-depth="-0.15"
                  src="assets/img/home/round_s1.png"
                  alt=""
                />
              </div>
              <div className="shap_one">
                <img
                  className="layer"
                  data-depth="-0.25"
                  src="assets/img/home/star_s_2.png"
                  alt=""
                />
              </div>
              <div className="shap_one">
                <img
                  className="layer"
                  data-depth="0.15"
                  src="assets/img/home/star_s_1.png"
                  alt=""
                />
              </div>
              <div className="shap_one">
                <img
                  className="layer"
                  data-depth="-0.25"
                  src="assets/img/home/cube.png"
                  alt=""
                />
              </div>
            </div>
            <h2>Online Book Fairs 2024</h2>
            <p>
              Our authors are devoted to their writing and are eager to share
              more information about their books with you. After that, you can
              Explore anywhere.
            </p>
            <a href="#" className="bj_theme_btn">
              REGISTRATION NOW
            </a>
          </div>
        </div>
      </section>
      {/* <!-- bj subscribe area --> */}
    </>
  );
};

export default Home;
