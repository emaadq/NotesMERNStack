import Note from "../models/Note.js";

export async function getAllNotes(req, res) 
{
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    }
    catch (error) {
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message:"Internal server error"});
    }
};

// Creating a note route D
export function createNote (req, res)
{
    res.status(201).json({message:"Note created successfully"})
};

// Updating a note route 
export function updateNote (req, res)
{
    res.status(200).json({message:"Note updated successfully"})
};

export function deleteNote (req, res)
{
    res.status(200).json({message:"Note deleted successfully"})
};