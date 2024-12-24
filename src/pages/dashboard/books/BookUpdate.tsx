import { useState, useEffect } from "react";
import BookService from "../../../services/BookService";
import CategoryService from "../../../services/CategoryService";
import { BookInterface } from "../../../interfaces/book.interface";
import { useNavigate, useParams } from "react-router-dom";

const BookUpdate = () => {
  const { id } = useParams();
  const [book, setBook] = useState<BookInterface>({
    title: "",
    author: "",
    category: "",
    publicationYear: "",
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBook = async () => {
      const book = await BookService.getOne(id);
      setBook(book);
    };
    const getCategories = async () => {
      const categories = await CategoryService.getAll();
      setCategories(categories);
    };
    getBook();
    getCategories();
  }, []);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isUpdated = await BookService.update(id, book);
    if (isUpdated) navigate("/dashboard/book-list");
  };

  const handleDelete = async () => {
    const isDeleted = await BookService.delete(id);
    if (isDeleted) navigate("/dashboard/book-list");
  };

  return (
    <div className="account_dashboard_body">
      <div className="account_dashboard_content">
        <div className="account_dashboard_content_header d-flex justify-content-between align-items-center">
          <span>Update Book</span>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        <div className="content_body">
          <form onSubmit={handleSubmit}>
            <div className="row gy-3">
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Title: *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Enter Your Book Name"
                    value={book.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Author: *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    name="author"
                    placeholder="Enter Your Book Name"
                    value={book.author}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Category: *
                  </label>
                  <select
                    className="form-select"
                    id="category"
                    name="category"
                    value={book.category}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    {categories.map((category, key) => (
                      <option key={key} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Publication Year: *
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="publicationYear"
                    name="publicationYear"
                    value={book.publicationYear}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookUpdate;
