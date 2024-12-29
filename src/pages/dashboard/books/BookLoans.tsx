import { useState, useEffect } from "react";
import BookService from "../../../services/BookService";
import { Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import { BookLoanInterface } from "../../../interfaces/book-loan-interface";

const BookLoans = () => {
  const [BookLoans, setBookLoans] = useState<BookLoanInterface[]>([]);
  const auth = useAuth();

  useEffect(() => {
    const getBookLoans = async () => {
      const bookLoans = await BookService.getBorrowed(
        auth?.user?.profile.sub || ""
      );
      setBookLoans(bookLoans || []);
    };
    getBookLoans();
  }, [auth]);

  const handleBookReturn = async (id: string) => {
    const isReturned = await BookService.returnBook(
      id,
      auth?.user?.profile.sub || ""
    );
    if (isReturned)
      setBookLoans(BookLoans.filter((bookLoan) => bookLoan.book.id !== id));
  };

  return (
    <div className="account_dashboard_body">
      <div className="account_dashboard_content">
        <div className="account_dashboard_content_header d-flex justify-content-between align-items-center">
          <div>
            My Book List
            <p>Your Total List: {BookLoans.length}</p>
          </div>

          <Link to="/shop" className="bj_theme_btn">
            Find More Books
          </Link>
        </div>
        <div className="content_body">
          <div className="my_book_list my_list_details">
            {BookLoans.map((bookLoan) => (
              <div className="best_product_item best_product_item_two">
                <div className="img">
                  <a href="#">
                    <img src="/assets/img/choice2.png" alt="book" />
                  </a>
                  <button
                    type="button"
                    className="bj_theme_btn add-to-cart-automated"
                    onClick={() => handleBookReturn(bookLoan?.book.id || "")}
                  >
                    Return
                  </button>
                </div>
                <div className="bj_new_pr_content">
                  <Link to={`/shop/${bookLoan?.book.id}`}>
                    <h6 className="book_title">{bookLoan?.book.title}</h6>
                  </Link>
                  <div className="writer_name">
                    By -{" "}
                    <Link to={`/shop/${bookLoan?.book.id}`}>
                      {bookLoan?.book.author}
                    </Link>
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

export default BookLoans;
