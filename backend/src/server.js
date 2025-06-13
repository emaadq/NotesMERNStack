// Package Imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// Route imports 
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001; // If this is undefined, we get 5001
const __dirname = path.resolve()

if (process.env.NODE_ENV != "production") {
    app.use(
        cors({
            origin: "http://localhost:5173",
        })
    );
}
app.use(express.json()); // middleware: parses JSON bodies: req.body
app.use(rateLimiter); // checks rate limiting

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    app.get("*",(req,res) => {
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
        }
    )
}

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