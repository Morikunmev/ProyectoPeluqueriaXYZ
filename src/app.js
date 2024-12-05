import express from "express";
import morgan from "morgan";
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ruta principal
app.get("/", (req, res) => {
  res.json({ message: "welcome to my API" });
});
//middleware de manejo de errores
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});
export default app;
