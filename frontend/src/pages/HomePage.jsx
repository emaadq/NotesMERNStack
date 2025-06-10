import Navbar from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import RateLimitedUI from "../components/RateLimitedUI";
import axios from "axios";


const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(true);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await axios.post("http://localhost:5001/api/notes");
                console.log(res.data)
            }
            catch (error) {
                console.log("Error fetching notes");
            }
        };
        fetchNotes();
    }, []);

    return  (
    <div className="min-h-screen">
         < Navbar /> 
         {isRateLimited && <RateLimitedUI/>}
    </div>
    );
};
export default HomePage;