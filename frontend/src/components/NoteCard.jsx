import { PenSquareIcon, Trash2Icon, CalendarIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    
    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.error("Delete error:", error);
      if (error.response?.status === 404) {
        toast.error("Delete route not found - check your backend");
      } else {
        toast.error("Failed to delete note");
      }
    }
  };

  // Remove the handleEdit function that was preventing navigation
  // OR keep it but remove e.preventDefault()
  const handleEdit = (e) => {
    e.stopPropagation(); // Only stop bubbling, allow navigation
  };

  return (
    <div className="group card bg-base-100 hover:shadow-2xl transition-all duration-300 border border-base-content/10 hover:border-primary/30 transform hover:-translate-y-1">
      {/* Gradient accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-t-2xl"></div>
      
      <div className="card-body p-6">
        {/* Note content */}
        <h3 className="card-title text-base-content text-xl font-semibold mb-3 line-clamp-2">
          {note.title}
        </h3>
        <p className="text-base-content/70 line-clamp-3 text-sm leading-relaxed mb-4">
          {note.content}
        </p>
        
        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-base-content/10">
          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-base-content/60">
            <CalendarIcon className="size-4" />
            <span>{formatDate(new Date(note.createdAt))}</span>
          </div>
          
          {/* Action buttons */}
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Link 
              to={`/edit/${note._id}`}
              className="btn btn-ghost btn-sm text-base-content/60 hover:text-primary hover:bg-primary/10"
              onClick={handleEdit}
            >
              <PenSquareIcon className="size-4" />
            </Link>
            <button
              className="btn btn-ghost btn-sm text-base-content/60 hover:text-error hover:bg-error/10"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;