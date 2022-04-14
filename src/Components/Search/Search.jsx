import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { H1, Section } from "./Styled-Search";
import Article from "../Article/Article";
import { imgs } from "../Home/images";

export default function Search() {
  let { query } = useParams();
  let [images, setImages] = useState(imgs);
  useEffect(() => {
    fetch(`https://unsplash.com/napi/search?query=${query}&per_page=30`)
      .then((res) => res.json())
      .then((res) => {
        setImages(res.photos.results);
      });
  }, [query]);
  // console.log(images);
  return (
    <>
      <H1>Showing search results for {query}</H1>
      <Section>
        <Article images={images.slice(0, 10)} />
        <Article images={images.slice(10, 20)} />
        <Article images={images.slice(20)} />
      </Section>
    </>
  );
}
