import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';



const Search = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  }; 
  const [username, setUsername] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (username.trim() === "") {
        setSuggestions([]);
        return;
      }
      
      const q = query(
        collection(db, "users"),
        where("displayName", ">=", username),
        where("displayName", "<=", username + "\uf8ff"),
        orderBy("displayName")
      );

      try {
        const querySnapshot = await getDocs(q);
        const users = querySnapshot.docs.map((doc) => doc.data().displayName);
        setSuggestions(users);
      } catch (error) {
        console.error(t("Error fetching suggestions: "), error);
      }
    };

    fetchSuggestions();
  }, [username]);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSelect = (selectedUsername) => {
    setUsername(selectedUsername);
    setSuggestions([]);
  };

  return (
    <div className="search" >
      <input style={{ width: '100%', backgroundColor: '#507050'}}
        type="text"
        placeholder={t("find a user")}
        value={username}
        onChange={handleInputChange}
      />
      <ul>
        {suggestions.map((username, index) => (
          <li style={{   listStyleType: 'none', backgroundColor: '#ccc', width: 'auto', Padding: '0%', borderRadius: '5px', textAlign: 'center'
          }} key={index} onClick={() => handleSelect(username)}>
            {username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
