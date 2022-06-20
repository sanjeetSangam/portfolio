import styled from "styled-components";

export const Heading = styled.button`
  padding: 0.8em 2em;
  background-color: #000;
  border: 3px solid yellow;
  border-radius: 1em;
  font-weight: bolder;
  transition: cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s;
  box-shadow: -5px 5px 0px 0px yellow;
  cursor: pointer;
  margin-top: 3rem;

  :hover {
    transform: translate(5px, -5px);
  }

  h2 {
    color: white;
  }
`;
