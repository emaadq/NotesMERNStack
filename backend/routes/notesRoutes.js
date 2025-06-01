import express from "express";

const router = express.Router(); 

// Getting the note route
router.get("/", (req, res) => {
         res.status(200).send("You just fetched the notes.");
     });

// Creating a note route 
router.post("/", (req, res) => {
    res.status(201).json({message:"Note created successfully"})
});

// Updating a note route 
router.put("/:id", (req, res) => {
    res.status(200).json({message:"Note updated successfully"})
});

// Deleting notes route 
router.delete("/:id", (req, res) => {
    res.status(200).json({message:"Note deleted successfully"})
});


export default router;





