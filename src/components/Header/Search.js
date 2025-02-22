import { InputContainer, SearchButton, SearchContainer, SearchUserList, UsersSearched, UserSearched } from "./HeaderStyle";
import { GoSearch } from "react-icons/go";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { Link } from "react-router-dom";

export default function Search() {
    const [usersList, setUsersList] = useState(null);
    const [display, setDisplay] = useState(false);
    const [input, setInput] = useState("");
    let time = null;

    const user = JSON.parse(localStorage.getItem("linkr"));
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    };

    function handleChange(e) {
        setInput(e.target.value);
        if (e.target.value.length > 2) {
            debounceEvent(e);
        };
    };

    function debounceEvent(e) {
        clearTimeout(time)
        time = setTimeout(() => { filterUsers(e.target.value) }, 3000);
    };

    function filterUsers(input) {     
        axios
            .get(`${BASE_URL}/search/${input}`, config)
            .then((res) => {
                setUsersList(res.data);
            })
            .catch((err) => {
                setInput("");
                console.log(err.message);
            });
    };

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
            {usersList !== null &&
                <SearchUserList
                    display={usersList.length !== 0 && display === true ? "flex" : "none"}
                >
                    {usersList.map((user, index) => (
                        <UsersSearched key={index} >
                            <Link to={`/user/${user.id}`}>
                                <UserSearched>
                                    <img
                                        src={user.picture}
                                        alt="profile"
                                    />
                                    {user.followed === false ? <p>{user.username}</p> : <p>{user.username} ⊛ following</p>}
                                </UserSearched>
                            </Link>
                        </UsersSearched>
                    ))}
                </SearchUserList>
            }
        </SearchContainer>
    );
};