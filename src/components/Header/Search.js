import { InputContainer, SearchButton, SearchContainer, SearchUserList, UserAlreadySearched } from "./HeaderStyle";
import { GoSearch } from "react-icons/go";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { Link } from "react-router-dom";

export default function Search() {
    const [usersList, setUsersList] = useState([]); //salvar aqui a lista de usuarios que vai pegar do localstorage
    const [display, setDisplay] = useState(false);
    //const [usersList, setUsersList] = useState(null);

    const [input, setInput] = useState("");
    let time = null;
   
    function handleChange(e) { 
        setInput(e.target.value);        
        if (e.target.value.length > 2) {
            debounceEvent(e); 
        };   
    };   

    function debounceEvent(e) {
        clearTimeout(time)        
        time = setTimeout(() => {filterUsers(e.target.value)}, 3000);
    };

    function filterUsers(input) {
        console.log(input)
        const user = JSON.parse(localStorage.getItem("linkr"));
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        
        axios
          .get(`${BASE_URL}/search/${input}`, config)
          .then((res) => {
            setUsersList(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
          console.log(usersList)
    };

    // export default function useDebounce(fn, delay) {
    //     const timeoutRef = useRef(null);
    
    //     function debounceFn(...params) {
    //         window.clearTimeout(timeoutRef.current);
    //         timeoutRef.current = window.setTimeout(() => {fn(...params)}, delay);
    //         fn(...params);
    
    //     };
    //     return debounceFn;
    // };

    return (
        <SearchContainer>
            <InputContainer>
                <input
                    type="search"
                    value={input}
                    placeholder="Search for people"
                    onClick={() => setDisplay(!display)}
                    onChange={handleChange}
                />
                <SearchButton type="submit">
                    <GoSearch size="small" color="#C6C6C6" />
                </SearchButton>
            </InputContainer>
            <SearchUserList
                display={usersList.length !== 0 && display === true ? "flex" : "none"}
            >
                {/* {usersList.map((user, index) => (
                    <UserAlreadySearched key={index} >
                        <Link to={{BASE_URL}/user/10}>
                        <img
                            src={user.picture}
                            alt="profile"
                        />
                        <p>{user.username}</p>
                        </Link>
                    </UserAlreadySearched>
                ))} */}
            </SearchUserList>
        </SearchContainer>
    );
};