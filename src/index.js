import express from "express";
import morgan from "morgan";
import routes from "./routes/pictures.js";
// import imageController from "./controllers/imageController.js";

const app = express();
const port = 3000;

// Sử dụng middleware
app.use(morgan("combined"));
app.use(express.json()); // Cho phép xử lý JSON data

// Kết nối routes vào ứng dụng
app.use("/", routes); // Sử dụng các routes từ file Routes/index.js

// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
