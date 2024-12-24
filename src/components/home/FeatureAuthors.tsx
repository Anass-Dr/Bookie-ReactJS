const FeatureAuthors = () => {
  return (
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
  );
};

export default FeatureAuthors;
