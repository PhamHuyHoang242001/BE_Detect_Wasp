import express from "express";
import bookController from "../controllers/picturesController.js";
import imageController from "../controllers/imageController.js";

const router = express.Router();

// Định nghĩa route và gán hàm xử lý từ controller
router.get("/books", bookController.getAllBooks);
router.post("/books", bookController.createBook);
router.put("/books/:id", bookController.updateBook);
router.delete("/books/:id", bookController.deleteBook);

router.get("/api/upload", imageController.getImageAsBase64);
router.post("/api/download", imageController.downloadImage);

export default router;
