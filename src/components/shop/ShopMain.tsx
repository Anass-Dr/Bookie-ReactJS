import { useState, useEffect } from "react";
import BookService from "../../services/BookService";
import ShopSidebar from "./ShopSidebar";
import { Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";

const ShopMain = () => {
  const [books, setBooks] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [search, setSearch] = useState("");
  const auth = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const books = await BookService.getAvailable();
      setBooks(books);
    };
    fetchData();
  }, []);

  const handleBorrow = async (id) => {
    if (!auth.isAuthenticated) return auth.signinRedirect();
    const isBorrowed = await BookService.borrow(id, auth.user?.profile.sub);
    if (isBorrowed) setBooks((state) => state.filter((book) => book.id !== id));
  };

  const filterBooks = () => {
    let filterBooks = books;
    if (currentCategory)
      filterBooks = books.filter((book) => book.category === currentCategory);
    if (search)
      filterBooks = filterBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
      );
    return filterBooks;
  };

  return (
    <section className="bj_shop_area sec_padding" data-bg-color="#f5f5f5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ShopSidebar
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />
          </div>
          <div className="col-lg-9">
            <form
              role="search"
              method="get"
              className="pr_search_form input-group"
              action="#"
            >
              <input
                type="text"
                name="s"
                value={search}
                className="form-control search-field"
                id="search"
                placeholder="Serach  off book store.."
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="button">
                <i className="ti-search"></i>
              </button>
            </form>
            <div className="shop_top d-flex align-items-center justify-content-between">
              <div className="shop_menu_left">{books.length} Books</div>
              <div className="shop_menu_right d-flex align-items-center justify-content-end">
                Sort by
                <form className="woocommerce-ordering" method="get">
                  <select name="orderby" className="orderby selectpickers">
                    <option value="menu_order" selected="selected">
                      Default sorting
                    </option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by latest</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                </form>
              </div>
            </div>
            <div className="row">
              {filterBooks().map((book, key) => (
                <div
                  key={key}
                  className="col-xl-3 col-lg-4 col-sm-6 projects_item"
                >
                  <div className="best_product_item best_product_item_two shop_product">
                    <div className="img">
                      <a href="#">
                        <img src="/assets/img/author_book1.jpg" alt="book" />
                      </a>
                      <div className="pr_ribbon">
                        <span className="product-badge">New</span>
                        <div className="ratting">
                          <img src="/assets/img/star-1.png" alt="" />
                          4.9
                        </div>
                      </div>
                      <button
                        type="button"
                        className="bj_theme_btn add-to-cart-automated"
                        data-name="A Storytelling Workbook"
                        data-img="/assets/img/author_book1.jpg"
                        data-price="25"
                        data-mrp="120"
                        onClick={() => handleBorrow(book.id)}
                      >
                        <i className="icon_cart_alt"></i>Borrow
                      </button>
                    </div>
                    <div className="bj_new_pr_content">
                      <Link to={`/shop/${book.id}`}>
                        <h4 className="bj_new_pr_title">{book.title}</h4>
                      </Link>
                      <div className="bj_pr_meta d-flex">
                        <div>{book.author}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <nav aria-label="...">
                <ul className="pagination pagi-content">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="ti-angle-left"></i>Prev
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">1</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next<i className="ti-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopMain;
