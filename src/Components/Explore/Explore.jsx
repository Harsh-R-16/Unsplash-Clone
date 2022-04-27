import { useState, useEffect } from "react";
import { topics, heroImgs } from "./data";
import { imgs } from "../Home/images";
import Article from "../Article/Article";
import { Main, Divs, Section } from "./Styled-Explore";
let page = Math.floor(Math.random() * 50);

export default function Explore() {
  let [images, setImages] = useState(imgs);
  console.log(images);
  useEffect(() => {
    fetch(`https://unsplash.com/napi/photos?per_page=30&page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setImages(res);
      });
  }, []);
  return (
    <>
      <Main>
        <p>Explore</p>
        <h1>Explore Unsplash photos</h1>
        <p>
          Unsplash has over a million free high-resolution photos. Explore these
          popular
          <br />
          photo categories on Unsplash. All photos here are free to download and
          use
          <br />
          under the <span>Unsplash License.</span>
        </p>

        <h2>Browse thousands of free images on Unsplash</h2>
      </Main>
      <Divs>
        {heroImgs.map((i, index) => (
          <div key={index}>
            <img src={i} alt="" />
            <p className="title">{topics[index]}</p>
            <p>Download free desktop and mobile backgrounds.</p>
            <button>Cool {topics[index]}</button>
            <button>Desktop {topics[index]}</button>
          </div>
        ))}
      </Divs>
      <Section>
        <Article images={images.slice(0, 10)} />
        <Article images={images.slice(10, 20)} />
        <Article images={images.slice(20)} />
      </Section>
    </>
  );
}
