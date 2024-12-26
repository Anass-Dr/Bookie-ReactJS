import { useState, useEffect } from "react";
import CategoryService from "../../services/CategoryService";
import { CategoryInterface } from "../../interfaces/category.interface";

const ShopSidebar = ({
  currentCategory,
  setCurrentCategory,
}: {
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
}) => {
  const [categories, setCategories] = useState<CategoryInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const categories = await CategoryService.getAll();
      setCategories(categories);
    };
    fetchData();
  }, []);
  return (
    <div className="shop_sidebar">
      <div className="widget filter_widget">
        <h3 className="shop_sidebar_title">
          <a href="#">
            <img src="/assets/img/shop/filter.svg" alt="" />
          </a>
          Filter
        </h3>
      </div>
      <div className="widget shop_category_widget">
        <h4 className="shop_sidebar_title_small">
          <i className="icon-category-icon"></i>Category
        </h4>
        <ul className="list-unstyled shop_category_list">
          <li style={{ cursor: "pointer" }}>
            <span
              className={!currentCategory ? "fw-bold" : ""}
              onClick={() => setCurrentCategory("")}
            >
              All categories
            </span>
          </li>
          {categories.map((category) => (
            <li
              style={{ cursor: "pointer" }}
              className={currentCategory === category.name ? "fw-bold" : ""}
              key={category.id}
              onClick={() => setCurrentCategory(category.name)}
            >
              <span className="link">{category.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopSidebar;
