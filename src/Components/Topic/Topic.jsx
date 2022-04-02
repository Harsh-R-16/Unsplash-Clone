import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Article from "../Article/Article";
import "./Topic.css";

export default function Topic() {
  let { topic } = useParams();
  let [images, setImages] = useState([]);
  useEffect(() => {
    fetch(`https://unsplash.com/napi/topics/${topic}/photos?page=1&per_page=30`)
      .then((res) => res.json())
      .then((res) => {
        setImages(res);
        console.log(res);
      });
  }, [topic]);
  return (
    <>
      <section id="images">
        <Article images={images.slice(0, 10)} />
        <Article images={images.slice(10, 20)} />
        <Article images={images.slice(20)} />
      </section>
    </>
  );
}
