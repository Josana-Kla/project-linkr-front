import styled from "styled-components";
import { logoFont, titleFont } from "../../constants/fonts";

export const PublicMain = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.onlyColumn ? "column" : "row")};
  }
`;

export const LogoBox = styled.div`
  display: flex;
  font-weight: 700;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: ${logoFont};
    font-size: 76px;
    line-height: 84px;
  }
  h2 {
    font-size: 23px;
    line-height: 34px;
    text-align: center;
  }

  width: 100%;
  height: 175px;
  color: #ffffff;
  background-color: #151515;

  @media (min-width: 768px) {
    width: 60%;
    height: 100vh;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 106px;
      line-height: 117px;

      letter-spacing: 0.05em;
    }
    h2 {
      font-size: 43px;
      line-height: 64px;
    }
  }
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  height: 60%;
  padding: 20px;
  gap: 20px;

  @media (min-width: 768px) {
    margin: 0 50px;
    width: 40%;
    height: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 100%;

  input {
    width: 100%;
    height: 65px;
    background: #ffffff;
    border-radius: 6px;
  }
  button {
    width: 100%;
    height: 55px;
    background: #1877f2;
    border-radius: 5px;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    cursor: pointer;
    color: #ffffff;
    font-family: ${titleFont};
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-decoration-line: underline;

  color: #ffffff;
`;

export const CreationBox = styled.div`
  width: 100vw;
  height: 25vh;

  margin: 5vh auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  padding: 10px;

  background-color: #ffff;

  h1 {
    font-size: 17px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    width: 70%;
  }

  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;
    position: relative;
  }

  img {
    width: 50px;
    height: 50px;

    position: absolute;
    top: 10px;
    left: 10px;

    display: none;

    border-radius: 26.5px;
  }

  button {
    font-size: 13px;
    font-weight: 700;
    color: #ffff;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;

    background: #1877f2;
    border-radius: 5px;

    width: 30%;
    height: 13%;

    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  ::placeholder {
    color: #949494;

    font-size: 15px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
  }
  @media (min-width: 768px) {
    width: 42vw;
    height: 20vh;

    border-radius: 16px;

    button {
      height: 31px;
    }

    img {
      display: initial;
    }
  }
`;

export const PostCard = styled.div`
  width: 100vw;
  height: 35vh;

  margin: 5vh auto;

  padding: 10px;

  background-color: #171717;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: #ffff;

  img {
    width: 50px;
    height: 50px;

    position: absolute;
    top: 10px;
    left: 10px;

    display: none;

    border-radius: 26.5px;
  }

  h1 {
    font-size: 17px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    width: 70%;
    color: #ffff;
  }

  p {
    width: 70%;
  }

  @media (min-width: 768px) {
    width: 42vw;
    height: 27vh;

    border-radius: 16px;

    button {
      height: 31px;
    }

    img {
      display: initial;
    }
  }
`;
