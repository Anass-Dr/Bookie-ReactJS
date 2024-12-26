import { useState, useEffect } from "react";
import BookService from "../../../services/BookService";
import { Link, useNavigate } from "react-router-dom";
import { BookInterface } from "../../../interfaces/book.interface";

const BookList = () => {
  const [Books, setBooks] = useState<BookInterface[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    BookService.getAll().then((data) => setBooks(data));
  }, []);

  return (
    <div className="account_dashboard_body">
      <div className="account_dashboard_content">
        <div className="account_dashboard_content_header d-flex justify-content-between align-items-center">
          <div>
            All Books
            <p>Your Total List: {Books.length}</p>
          </div>

          <Link to="/dashboard/book-create" className="bj_theme_btn">
            Add New Book
          </Link>
        </div>
        <div className="content_body">
          <div className="my_book_list my_list_details">
            {Books.map((book) => (
              <div className="best_product_item best_product_item_two">
                <div className="img">
                  <a href="#">
                    <img src="/assets/img/home-two/choice2.png" alt="book" />
                  </a>
                  <button
                    type="button"
                    className="bj_theme_btn add-to-cart-automated"
                    onClick={() => navigate(`/dashboard/book-update/${book.id}`)}
                  >
                    edit
                  </button>
                </div>
                <div className="bj_new_pr_content">
                  <a href="product-single.html">
                    <h6 className="book_title">{book.title}</h6>
                  </a>
                  <div className="writer_name">
                    By - <a href="author-single.html">{book.author}</a>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
