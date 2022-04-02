import styled from "styled-components";
let Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 50px 5vw;
`;

let Info = styled.section`
  padding: 50px 5vw 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10vw;

  h1 {
    font-size: 40px;
    margin-bottom: 20px;
    text-transform: capitalize;
  }

  #top p {
    margin: 10px 0;
    line-height: 26px;
  }

  #top span {
    color: #6e6e6e;
    text-decoration: underline;
    padding-bottom: 2px;
    font-weight: bold;
  }

  #bottom {
    padding-left: 10vw;

    div {
      border: 1px solid #c8c8c8;
      padding: 20px;
      border-radius: 5px;
    }

    p {
      display: flex;
      align-items: center;
      margin: 13px 0;
    }

    p span {
      flex-grow: 1;
    }

    img {
      border-radius: 50%;
      height: 26px;
      aspect-ratio: 1;
    }

    svg {
      margin-right: 12px;
    }

    button {
      width: 100%;
      padding: 12px 0;
      margin-top: 13px;
      background-color: #000;
      color: white;
      border: none;
      border-radius: 4px;
      text-transform: capitalize;
    }
  }
`;

export { Section, Info };
