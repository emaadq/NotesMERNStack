
export function getAllNotes(req, res) 
{
    res.status(200).send("You just fetched the notes.");
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
}