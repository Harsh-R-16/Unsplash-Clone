import { useState, useEffect } from "react";
import { Main, Section } from "./Styled-Home";
import { heroImgs, imgs } from "./images";
import Article from "../Article/Article";
import { useNavigate } from "react-router-dom";
let page = Math.floor(Math.random() * 50);

export default function Home() {
  let index = Math.floor(Math.random() * heroImgs.length);
  let [images, setImages] = useState(imgs);
  useEffect(() => {
    fetch(`https://unsplash.com/napi/photos?per_page=30&page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setImages(res);
      });
  }, []);
  let navigate = useNavigate();
  const func = (e) => {
    e.preventDefault();
    let inp = e.target.elements[0].value;
    navigate(`/s/photos/${inp}`);
  };
  return (
    <>
      <Main>
        <img src={heroImgs[index]} alt="" id="hero-img" />
        <section id="hero">
          <h1>Unsplash</h1>
          <h2>
            The internet’s source of freely-usable images. Powered by creators
            everywhere.
          </h2>
          <form id="input-div" onSubmit={func}>
            <svg
              width="25"
              height="25"
              className="DFW_E nT46U VETef"
              viewBox="0 0 32 32"
              version="1.1"
              aria-hidden="false"
            >
              <path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search free high-resolution photos"
            />
            <svg
              width="25"
              height="25"
              className="VdNCI nT46U VETef"
              viewBox="0 0 32 32"
              version="1.1"
              aria-hidden="false"
            >
              <path d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2 4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4 25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6 0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"></path>
            </svg>
          </form>
          <h3>
            <span>Trending: </span>flower, wallpapers, backgrounds, happy, love
          </h3>
          <div>
            <p>
              Photo of the Day by <span>Negley Stockman</span>
            </p>
            <p>
              Read more about the <span>Unsplash License</span>
            </p>
            <p>
              <img
                src="https://images.unsplash.com/file-1606177908946-d1eed1cbe4f5image"
                alt=""
              />
              All you need to create a website.
            </p>
          </div>
        </section>
      </Main>
      <Section>
        <Article images={images.slice(0, 10)} />
        <Article images={images.slice(10, 20)} />
        <Article images={images.slice(20)} />
      </Section>
    </>
  );
}
