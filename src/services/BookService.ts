import axiosInstance from "../config/axios";
import { toast } from "react-toastify";
import { BookInterface } from "../interfaces/book.interface";

class BookService {
  static async getAll() {
    try {
      const res = await axiosInstance.get("/books");
      return res.data;
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  }

  static async getAvailable() {
    try {
      const res = await axiosInstance.get("/books/available");
      return res.data;
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  }

  static async getBorrowed(sub: string) {
    if (!sub) return;
    try {
      const res = await axiosInstance.get(`/books/borrowed/${sub}`);
      return res.data;
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  }

  static async getOne(id: string) {
    try {
      const res = await axiosInstance.get(`/books/${id}`);
      return res.data;
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  }

  static async borrow(id: string, sub: string) {
    try {
      const res = await axiosInstance.post(`/books/${id}/borrow`, {
        userId: sub,
      });
      toast.success(res.data.message);
      return true;
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  }

  static async returnBook(id: string, sub: string) {
    try {
      await axiosInstance.post(`/books/${id}/return`, { userId: sub });
      toast.success("Book returned successfully");
      return true;
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  }

  static async create(book: BookInterface) {
    try {
      await axiosInstance.post("/books", book);
      toast.success("Book created successfully");
      return true;
    } catch (error: any) {
      const resErrorMsgs = error?.response?.data?.message;
      if (resErrorMsgs) resErrorMsgs.forEach((msg: string) => toast.error(msg));
      else toast.error(error.message);
    }
  }

  static async update(id: string, book: BookInterface) {
    try {
      await axiosInstance.patch(`/books/${id}`, book);
      toast.success("Book updated successfully");
      return true;
    } catch (error: any) {
      const resErrorMsgs = error?.response?.data?.message;
      if (resErrorMsgs) resErrorMsgs.forEach((msg: string) => toast.error(msg));
      else toast.error(error.message);
    }
  }

  static async delete(id: string) {
    try {
      await axiosInstance.delete(`/books/${id}`);
      toast.success("Book deleted successfully");
      return true;
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  }
}

export default BookService;
