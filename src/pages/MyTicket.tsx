import Navbar from "../templates/Navbar"
import axios from "axios"
import { useState } from "react";

function MyTicket() {
    const [long_url, setLongUrl] = useState("");
    const [custom_name, setCustomName] = useState("");
    const [short_url, setShortLink] = useState("");
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      try {
        const response = await axios.post("http://localhost:4000/api/url", {
          long_url,
          custom_name,
        });

        setShortLink(response.data.short_url);

        setLongUrl("");
        setCustomName("");
      } catch (error) {
        console.error("Error posting URL:", error);
      }
    };
  
    return (
      <div>
        <Navbar />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <label htmlFor="long_url">Long URL:</label>
          <input
            type="text"
            id="long_url"
            value={long_url}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLongUrl(e.target.value)
            }
          />
  
          <label htmlFor="custom_name">Custom Name:</label>
          <input
            type="text"
            id="custom_name"
            value={custom_name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCustomName(e.target.value)
            }
          />
  
          <button type="submit">Submit</button>
  
          {short_url && <a>Your short URL is: <a href={short_url}>{short_url}</a> </a>}
        </form>
      </div>
    );
  }
  
  export default MyTicket;
  