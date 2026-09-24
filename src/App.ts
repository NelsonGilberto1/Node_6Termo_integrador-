import express from "express";
import produtoRoutes from "./routes/produtoRoutes";

const app = express();

app.use(express.json());

app.use("/produtos", produtoRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});