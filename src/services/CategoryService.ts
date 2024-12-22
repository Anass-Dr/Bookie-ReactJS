import axiosInstance from "../config/axios";
import { toast } from "react-toastify";

class CategoryService {
  static async getAll() {
    try {
        const res = await axiosInstance.get("/categories");
        return res.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
  }
}

export default CategoryService;
