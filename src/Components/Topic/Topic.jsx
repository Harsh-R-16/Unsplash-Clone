import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Article from "../Article/Article";
import { Info, Section } from "./Styled-Topic";
import { para1, para2 } from "./data";

export default function Topic() {
  let { topic } = useParams();
  let [images, setImages] = useState([]);
  let index = Math.floor(Math.random() * para1.length);
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
      <Info>
        <article id="top">
          <h1>{topic.replace(/-/g, " ")}</h1>
          <p>{para1[index]}</p>
          <p>{para2[index]}</p>
          <p>
            Learn more <span>here.</span>
          </p>
        </article>
        <article id="bottom">
          <div>
            <p>
              <svg
                width="24"
                height="24"
                className="qZLl_"
                viewBox="0 0 32 32"
                version="1.1"
                aria-hidden="false"
              >
                <path d="M16 2.7C8.7 2.7 2.7 8.7 2.7 16s6 13.3 13.3 13.3 13.3-6 13.3-13.3S23.3 2.7 16 2.7zm-.7 24v-8.3h-4.6l6.7-13v8.3h4.5l-6.6 13z"></path>
              </svg>
              <span>Status</span>
              <img
                src="https://images.unsplash.com/profile-1643303684669-d002462b5ed5image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                alt=""
              />
            </p>
            <p>
              <svg
                width="24"
                height="24"
                className="qZLl_"
                viewBox="0 0 32 32"
                version="1.1"
                aria-hidden="false"
              >
                <path d="M16 2.7C8.7 2.7 2.7 8.7 2.7 16s6 13.3 13.3 13.3 13.3-6 13.3-13.3S23.3 2.7 16 2.7zm-.7 24v-8.3h-4.6l6.7-13v8.3h4.5l-6.6 13z"></path>
              </svg>
              <span>Curator</span>
              <img
                src="https://images.unsplash.com/profile-1643303684669-d002462b5ed5image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                alt=""
              />
            </p>
            <p>
              <svg
                width="24"
                height="24"
                className="qZLl_"
                viewBox="0 0 32 32"
                version="1.1"
                aria-hidden="false"
              >
                <path d="M16 2.7C8.7 2.7 2.7 8.7 2.7 16s6 13.3 13.3 13.3 13.3-6 13.3-13.3S23.3 2.7 16 2.7zm-.7 24v-8.3h-4.6l6.7-13v8.3h4.5l-6.6 13z"></path>
              </svg>
              <span>contributions</span>
              <img
                src="https://images.unsplash.com/profile-1643303684669-d002462b5ed5image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                alt=""
              />
            </p>
            <p>
              <svg
                width="24"
                height="24"
                className="qZLl_"
                viewBox="0 0 32 32"
                version="1.1"
                aria-hidden="false"
              >
                <path d="M16 2.7C8.7 2.7 2.7 8.7 2.7 16s6 13.3 13.3 13.3 13.3-6 13.3-13.3S23.3 2.7 16 2.7zm-.7 24v-8.3h-4.6l6.7-13v8.3h4.5l-6.6 13z"></path>
              </svg>
              <span>Top Contributors</span>
              <img
                src="https://images.unsplash.com/profile-1643303684669-d002462b5ed5image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                alt=""
              />
            </p>
          </div>
          <button>
            Submit to <span>{topic.replace(/-/g, " ")}</span>
          </button>
        </article>
      </Info>
      <Section>
        <Article images={images.slice(0, 10)} />
        <Article images={images.slice(10, 20)} />
        <Article images={images.slice(20)} />
      </Section>
    </>
  );
}
