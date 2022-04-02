import styled from "styled-components";

let Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 50px 5vw;
`;
let Divs = styled.section`
  padding: 40px 5vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  div {
    background-color: #f1f5f8;
    padding-bottom: 15px;
    border-radius: 2px;
    overflow: hidden;
    position: relative;
    box-shadow: 3px 3px 6px 0px rgb(189, 189, 189);
    text-align: center;
    padding-bottom: 15px;

    img {
      height: 260px;
      width: 100%;
    }
    p {
      font-size: 13px;
      margin: 10px;
    }
    button {
      color: white;
      background-color: black;
      border: none;
      padding: 7px 10px;
      border-radius: 3px;
      font-size: 10px;
      margin: 2px 8px;
    }

    .title {
      color: white;
      font-size: 20px;
      font-weight: 900;
      position: absolute;
      top: 40%;
      left: 50%;
      margin: 0;
      transform: translate(-50%, -50%);
    }
  }
`;

let Main = styled.main`
  padding: 50px 5vw 20px;
  h1 {
    font-size: 40px;
    margin: 20px 0 40px;
  }
  p:nth-of-type(2) {
    font-size: 14px;
    line-height: 150%;
    margin-bottom: 30px;

    span {
      text-decoration: underline;
      font-weight: bold;
    }
  }
`;

export { Main, Divs, Section };
