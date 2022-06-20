import styled from "styled-components";

export const List = styled.div`
  background: #07182e;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 1rem;
  width: 90%;

  ::before {
    content: "";
    position: absolute;
    width: 100px;
    background-image: linear-gradient(
      180deg,
      rgb(0, 183, 255),
      rgb(255, 48, 255)
    );
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  ::after {
    content: "";
    position: absolute;
    background: #07182e;
    inset: 5px;
    border-radius: 15px;
  }

  .projectDetails {
    z-index: 5;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
