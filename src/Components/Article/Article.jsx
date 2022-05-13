import React from "react";
import Article from "./Styled-Article";

export default function MainArticle({ images }) {
  return (
    <Article>
      {images.map(
        (
          {
            urls: { regular },
            user: { name },
            user: {
              profile_image: { large },
            },
            user: {
              links: { html },
            },
            sponsorship,
            likes,
          },
          index
        ) => (
          <div key={index}>
            <button className="collection">
              <i className="fa fa-plus"></i>
            </button>
            <a href={regular} download target="_blank" rel="noreferrer">
              <button className="download">
                <i className="fa fa-download"></i>
              </button>
            </a>
            <button className="like">
              {likes}
              <i className="fa fa-heart"></i>
            </button>
            <img src={regular} alt="" />
            <img src={large} alt="" className="logo" />
            <h3>
              <a href={html}>{name}</a>
            </h3>
            <p>{sponsorship ? sponsorship.tagline : "Just Do It!!!"}</p>
          </div>
        )
      )}
    </Article>
  );
}
