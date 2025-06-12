// Package Imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Route imports 
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001; // If this is undefined, we get 5001

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use(express.json()); // middleware: parses JSON bodies: req.body
app.use(rateLimiter); // checks rate limiting

// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

// Debug route to test backend
app.get("/test", (req, res) => {
    res.json({ message: "Backend is working!" });
});

// Load database THEN start server
connectDB().then(() => {
    app.listen(5001, () => {
        console.log("Server started on PORT:", PORT);
    });
});