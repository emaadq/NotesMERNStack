import Note from "../models/Note.js";

export async function getAllNotes(_, res) // _ -> skip the value; do not read it
{
    try {
        const notes = await Note.find().sort({createdAt:-1}); // .sort... shows the newest note first (filtering option). -1 shows in reverse, 1 shows in normal 
        res.status(200).json(notes);
    }
    catch (error) {
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message:"Internal server error"});
    }
};

// Creating a note route D
export async function createNote (req, res)
{
    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content});
        await newNote.save();
        res.status(201).json({message: "Note created successfully"});
    }
    catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({message: "Internal server errror"});
    }
};

// Updating a note route 
export async function updateNote (req, res)
{
    try {
        const {title, content} = req.body;
        // Can only use await in async function
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id, 
            {title, content},
            {
                new: true, // gives new note with updated fields
            }
        );

         // correspond to router.put("//.{value}")
        if (!updatedNote) return res.status(404).json({message: "Note not found"});

        res.status(200).json({updatedNote});
    }
    catch (error) {
        console.error("Error in updateNote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export async function deleteNote (req, res)
{
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) return res.status(404).json({message: "Not not found"});
        res.status(200).json({message: "Note deleted successfully."});
    }
    catch (error) {
        console.error("Error in deleteNote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export async function getNoteById (req, res)
{
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({message: "Note not found"});
        res.json(note);
    }
    catch (error) {
        console.error("Error in getNoteById controller", error);
        res.status(500).json({message: "Internal server error"});
    }
};