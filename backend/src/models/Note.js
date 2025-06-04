import mongoose from "mongoose"; 

// 1) Create a Schema
// 2) Create a model based off of that schema (rules/attributes for table)

const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, { timestamps: true } // createdAt, updatedAt fields will be included as a result of this
);

const Note = mongoose.model("Note", noteSchema);

export default Note;