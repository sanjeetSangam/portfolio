import styled from "styled-components";

export const Profile = styled.div`
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all 0.3s;
  overflow: hidden;
  cursor: pointer;

  .card2 {
    background: black;
    border-radius: 0;
    transition: all 0.2s;
    padding: 1rem;
    padding-bottom: 0;
    height: 20rem;
  }

  .card2 img {
    height: 100%;
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
  :hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
`;
