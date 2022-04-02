import styled from "styled-components";

let Nav = styled.nav`
  color: #767676;
  position: sticky;
  top: 0px;
  z-index: 1;
  box-shadow: 3px 3px 14px 1px rgba(158, 156, 156, 0.4);
  background-color: #ffffff;

  #top {
    padding: 16px 1.1vw;
    display: flex;
    align-items: center;
  }

  #top div {
    flex-grow: 1;
    display: flex;
    align-items: center;
    margin: 0 1vw;
    border-radius: 2rem;
    padding: 7px 13px;
    background-color: #eeeeee;
  }

  #top div input {
    flex-grow: 1;
    border: none;
    padding: 0 10px;
    background-color: inherit;
  }
  #top input:focus {
    outline: none;
  }

  #top p {
    font-size: 13.5px;
    margin: 0 0.8vw;
  }

  #top button {
    background-color: inherit;
    border: none;
    margin-left: 0.4vw;
  }

  #top #line {
    transform: scaleY(2.5);
    margin: 0.4vw;
    cursor: default;
  }

  #bottom {
    display: flex;
    padding: 16px 1.1vw 0;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  #bottom p {
    font-size: 12px;
    margin: 0 1vw 18px;
  }

  svg,
  p {
    cursor: pointer;
  }
`;

export { Nav };
