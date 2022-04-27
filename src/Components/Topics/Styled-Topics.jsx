import styled from "styled-components";

let Main = styled.main`
  padding: 60px 5vw;
  background-color: #fff;

  h1 {
    font-size: 44px;
  }

  h1 + p {
    margin: 30px 0 40px;
    line-height: 25px;

    span {
      font-weight: bold;
      color: rgb(63, 63, 63);
      display: block;
      text-decoration: underline;
    }
  }
  h2 {
    font-size: 28px;
  }

  section {
    padding: 40px 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    div {
      background-color: #f1f5f8;
      padding-bottom: 15px;
      border-radius: 2px;
      overflow: hidden;
      box-shadow: 3px 3px 6px 0px rgb(189, 189, 189);

      * {
        margin: 5px 12px 6px;
      }
      .main-img {
        height: 220px;
        width: 100%;
        margin: 0;
      }

      .logo {
        float: right;
        height: 55px;
        border-radius: 50%;
        aspect-ratio: 1;
      }
      h3 a {
        color: inherit;
        text-decoration: none;
        margin-left: 0;
      }
      h5 {
        color: rgb(126, 125, 124);
      }

      h5 + p {
        font-size: 13.5px;
        line-height: 150%;
        margin: 25px 12px 20px;
      }
    }
  }
`;

export { Main };
