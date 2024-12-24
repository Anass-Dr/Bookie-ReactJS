import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookService from "../services/BookService";
import { useAuth } from "react-oidc-context";

const BookDetails = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();
  const auth = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const book = await BookService.getOne(id);
      setBook(book);
    };
    fetchData();
  }, []);

  const handleBookBorrow = async () => {
    if (book.status === "borrowed") return;
    if (!auth.isAuthenticated) return auth.signinRedirect();
    const isBorrowed = await BookService.borrow(id, auth.user?.profile.sub);
    if (isBorrowed) setBook((state) => ({ ...state, status: "borrowed" }));
  };

  return (
    <section
      className="product_details_area sec_padding"
      data-bg-color="#f5f5f5"
    >
      <div className="container">
        <div className="row gy-xl-0 gy-3">
          <div className="col-xl-9">
            <div className="bj_book_single me-xl-3">
              <div className="bj_book_img flip">
                <div className="front">
                  <img
                    className="img-fluid"
                    src="/assets/img/book-single1.jpg"
                    alt=""
                  />
                </div>
                <div className="back">
                  <img
                    className="img-fluid"
                    src="/assets/img/book-single.jpg"
                    alt=""
                  />
                </div>
                <div className="pr_ribbon">
                  <span className="product-badge">New</span>
                </div>
              </div>
              <div className="bj_book_details">
                <h2>{book.title}</h2>
                <ul className="list-unstyled book_meta">
                  <li>
                    By:<a href="author-single.html">{book.author}</a>
                  </li>
                  <li>
                    Category:<a href="shop-sidebar.html">{book.category}</a>
                  </li>
                </ul>
                <div className="ratting review">
                  <div className="star-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-stroke"></i>
                    <span>4.5</span>
                  </div>
                  <a href="#product_review" className="woocommerce-review-link">
                    <span className="count"> 50 </span>Reviews
                  </a>
                </div>
                <p className="mt-3">{book.description}</p>
                <ul className="product_meta list-unstyled">
                  <li>
                    <span>Publication date:</span>
                    {book.publicationYear}
                  </li>
                  <li>
                    <span>Print length:</span>320 pages
                  </li>
                  <li>
                    <span>ISBN:</span>3288365629
                  </li>
                  <li>
                    <span>Language:</span>English
                  </li>
                </ul>
                <div className="d-flex">
                  <a href="#" className="bj_theme_btn strock_btn flip_btn">
                    Flip to Back
                  </a>
                  <a
                    href="../../www.googleguide.com/print/adv_op_ref.pdf"
                    className="bj_theme_btn strock_btn gallerypdf"
                  >
                    <i className="fa-regular fa-eye"></i>
                    Look inside
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="product_sidbar">
              <div className="borrow_rules">
                <h3>Borrowing Rules:</h3>
                <ul className="list-unstyled">
                  <li>
                    <div className="icon">
                      <img src="/assets/img/arrow.png" alt="" />
                    </div>
                    Books can be borrowed for a maximum of 14 days.
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/assets/img/arrow.png" alt="" />
                    </div>
                    A maximum of 5 books can be borrowed at a time.
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/assets/img/arrow.png" alt="" />
                    </div>
                    Borrowed books must be returned in the same condition as
                    received.
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/assets/img/arrow.png" alt="" />
                    </div>
                    Late returns will incur a fine of $1 per day.
                  </li>
                </ul>
              </div>

              <div className="d-flex flex-column gap-3">
                <button
                  className="bj_theme_btn d-flex align-items-center justify-content-center gap-2"
                  style={{
                    backgroundColor: book.status === "borrowed" ? "gray" : "",
                  }}
                  type="button"
                  onClick={handleBookBorrow}
                  disabled={book.status === "borrowed"}
                >
                  {" "}
                  <i className="icon_cart_alt"></i>
                  {book.status === "borrowed" ? "Borrowed" : "Borrow"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
