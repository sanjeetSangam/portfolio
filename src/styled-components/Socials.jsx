import styled from "styled-components";

export const Socials = styled.button`
  /* border: 0.2rem solid #ffffff; */
  border: transparent;
  animation: none;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  background: ${(props) => props.icon === "linkedin" && "blue"};
  background: ${(props) => props.icon === "github" && "black"};
  background: ${(props) => props.icon === "youtube" && "red"};
  background: ${(props) => props.icon === "insta" && "#EB12BC"};
  border-radius: 50%;
  font-size: 2rem;
  color: white;

  :hover {
    border-radius: 30px 30px 0px 30px;
    box-shadow: inset 0px 30px 10px -25px black;
    transition: all 0.5s ease-in-out;
    animation: bounce42 1.6s infinite;
  }

  @keyframes bounce42 {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(-5px);
    }

    60% {
      transform: translateY(-5px);
    }
  }
`;
