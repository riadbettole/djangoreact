import axios from "axios";
export const generate = async (prompt,userImage) => {
   
    return await axios.post(`http://127.0.0.1:8000/api/`, {
      promptWeb: prompt,
      imageOfUser: userImage,
    });
    
  };