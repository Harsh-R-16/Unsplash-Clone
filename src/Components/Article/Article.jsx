import React from "react";

export default function Article({ images }) {
  return (
    <article>
      {images.map(
        (
          {
            urls: { raw },
            user: { name },
            user: {
              profile_image: { large },
            },
            user: {
              links: { html },
            },
            sponsorship,
          },
          index
        ) => (
          <div key={index}>
            <button className="collection">
              <i className="fa fa-plus"></i>
            </button>
            <button className="download">
              <i className="fa fa-download"></i>
            </button>
            <button className="like">
              <i className="fa fa-heart"></i>
            </button>
            <img src={raw} alt="" />
            <img src={large} alt="" className="logo" />
            <h3>
              <a href={html}>{name}</a>
            </h3>
            <p>{sponsorship ? sponsorship.tagline : "Just Do It!!!"}</p>
          </div>
        )
      )}
    </article>
  );
}
