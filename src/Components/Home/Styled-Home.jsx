import styled from "styled-components";

let Main = styled.main`
  height: 85vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  #hero-img {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    top: 0;
    opacity: 0.5;
  }

  h3 + div {
    position: absolute;
    left: 1.1vw;
    right: 1.1vw;
    bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 13.4px;
      span {
        font-weight: 900;
      }
    }
  }

  h1 {
    font-size: 55px;
    margin-bottom: 20px;
  }

  h2 {
    width: 490px;
    font-size: 17px;
    line-height: 130%;
  }

  h3 {
    font-size: 14px;
    text-transform: capitalize;
  }

  div#input-div {
    display: flex;
    align-items: center;
    margin: 20px 0;
    border-radius: 8px;
    padding: 10px 13px;
    background-color: #ffffff;
    width: 800px;

    input {
      flex-grow: 1;
      border: none;
      padding: 0 10px;
      background-color: inherit;
      font-size: 14px;

      &:focus {
        outline: none;
      }
    }
  }
`;

let Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 50px 5vw;
`;

export { Main, Section };
