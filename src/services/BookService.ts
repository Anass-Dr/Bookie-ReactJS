import axiosInstance from "../config/axios";
import { toast } from "react-toastify";

class BookService {
  static async getAll() {
    try {
      const res = await axiosInstance.get("/books");
      return res.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  static async getAvailable() {
    try {
      const res = await axiosInstance.get("/books/available");
      return res.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  static async getOne(id) {
    try {
      const res = await axiosInstance.get(`/books/${id}`);
      return res.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  static async borrow(id) {
    try {
      const res = await axiosInstance.post(`/books/${id}/borrow`);
      toast.success(res.data.message);
      return true;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
}

export default BookService;
