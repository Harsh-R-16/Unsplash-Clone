import styled from "styled-components";
let Article = styled.article`
  div {
    margin-bottom: 30px;
    position: relative;
    background-color: #f1f5f8;
    padding-bottom: 20px;
    box-shadow: 1px 1px 7px 1px rgb(204, 204, 204);
  }

  button {
    position: absolute;
    cursor: pointer;
  }

  img {
    width: 100%;
    margin-bottom: 10px;
  }

  div .collection {
    right: 12px;
    top: 12px;
  }

  div .download {
    bottom: 20px;
    right: 12px;
    padding: 6px 7px 8px 8px;
  }

  div .like {
    right: 44px;
    top: 12px;
    i {
      margin-left: 5px;
    }
  }

  .logo {
    height: 40px;
    width: 40px;
    float: left;
    border-radius: 50%;
    margin: 0 10px 10px 10px;
  }

  h3 {
    font-size: 17px;
  }

  p {
    font-size: 13.4px;
    margin-top: 2px;
  }

  button {
    font-size: 12px;
    padding: 6px 8px;
    color: #f1f5f8;
    background-color: #000;
    border: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default Article;
