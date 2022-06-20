import styled from "styled-components";

export const Goto = styled.button`
  padding: 0.9em 1.6em;
  border: none;
  outline: none;
  color: #fff;
  font-family: inherit;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 12px;
  width: 100%;

  color: ${(props) => props.type === "github" && "#000000"};
  color: ${(props) => props.type === "demo" && "#4b1606"};

  ::after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.type === "github" && "#219ebc"};
    background-color: ${(props) => props.type === "demo" && "#ffb703"};
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  ::before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #002bff,
      #ff00c8,
      #002bff,
      #ff0000,
      #002bff,
      #ff00c8,
      #002bff
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 600%;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(8px);
    animation: glowing 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
    opacity: 0;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 400% 0;
    }

    100% {
      background-position: 0 0;
    }
  }

  /* hover */
  :hover::before {
    opacity: 1;
  }

  :active:after {
    background: transparent;
  }

  :active {
    color: #000;
    font-weight: bold;
  }
`;
