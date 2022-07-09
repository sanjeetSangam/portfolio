import styled from "styled-components";

export const HomeButton = styled.button`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 10px 30px;
  transition: 0.5s;
  position: relative;
  font-size: 17px;
  background: #ffffff;

  border: none;
  color: #fff;
  cursor: pointer;

  :hover {
    letter-spacing: 0.25em;
    background: #ff1867;
    color: ${(props) => (props.contact ? "#e6bd57" : "#000000")};
    box-shadow: 0 0 45px #ff1867;
  }

  ::before {
    content: "";
    position: absolute;
    inset: 2px;
    background: ${(props) => (props.contact ? "#63044f" : "#0d5f5b")};
  }

  span {
    position: relative;
    z-index: 1;
  }

  i {
    position: absolute;
    inset: 0;
    display: block;
  }

  i::before {
    content: "";
    position: absolute;
    border: 2px solid #ff1867;
    width: 7px;
    height: 4px;
    top: -3.5px;
    left: 80%;
    background: #222222;
    transform: translateX(-50%);
    transition: 0.5s;
  }

  :hover i::before {
    width: 20px;
    left: 20%;
  }

  i::after {
    content: "";
    position: absolute;
    border: 2px solid #ff1867;
    width: 7px;
    height: 4px;
    bottom: -3.5px;
    left: 20%;
    background: #222222;
    transform: translateX(-50%);
    transition: 0.5s;
  }

  :hover i::after {
    width: 20px;
    left: 80%;
  }

  @media screen and (max-width: 400px) {
    font-size: 10px;
  }
`;
