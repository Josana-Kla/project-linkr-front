import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL, loading_url } from "../../constants/url";
import { Container, Main } from "../../assets/styles/styles";
import Header from "../../components/Header/Header";
import Post from "../../components/Post";
import { ContainerPosts, Gif, Title } from "./UserPageStyle";
import Trending from "../../components/Trending";

export default function UserPage() {
  //let { id } = useParams();
  const id = 10;
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("linkr"));
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    console.log(`${BASE_URL}/user/${id}`, config);
    axios
      .get(`${BASE_URL}/user/${id}`, config)
      .then((res) => {
        setUserData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading === true) {
    return (
      <Main>
        <Header />
        <Gif>
          <img src={loading_url} alt="loading" />
        </Gif>
      </Main>
    );
  }

  return (
    <Container>
      <Header />
      <Main>
        <ContainerPosts>
          <Title>
            <img src={userData.picture} alt="profile identification" />
            <h1>{userData.username}'s posts</h1>
          </Title>
          {userData.posts.map((p, index) => (
            <Post
              key={index}
              picture={userData.picture}
              name={userData.name}
              content={p.content}
              url={p.url}
            />
          ))}
        </ContainerPosts>
      </Main>
      <Trending />
    </Container>
  );
}
