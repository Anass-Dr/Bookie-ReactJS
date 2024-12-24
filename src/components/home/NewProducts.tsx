const NewProducts = () => {
  return (
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
            <div className="bj_new_pr_item wow fadeInUp" data-wow-delay="0.2s">
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
            <div className="bj_new_pr_item wow fadeInUp" data-wow-delay="0.3s">
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
            <div className="bj_new_pr_item wow fadeInUp" data-wow-delay="0.4s">
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
            <div className="bj_new_pr_item wow fadeInUp" data-wow-delay="0.5s">
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
  );
};

export default NewProducts;
