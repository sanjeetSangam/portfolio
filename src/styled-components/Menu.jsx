import styled from "styled-components";

export const Menu = styled.button`
  border: none;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding: 0 1rem;
  outline: none;
  background: transparent;
  height: 100%;
  color: var(--highlight);

  :hover {
    color: black;
  }

  :after {
    content: "";
    background: var(--highlight);
    position: absolute;
    z-index: -1;
    left: -20%;
    right: -20%;
    top: 0;
    bottom: 0;
    transform: skewX(-45deg) scale(0, 1);
    transition: all 0.5s;
  }

  :hover:after {
    transform: skewX(-45deg) scale(1, 1);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
`;
