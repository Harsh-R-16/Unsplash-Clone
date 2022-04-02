import React from "react";
import { Main } from "./Styled-Topics";
import { data } from "./data";

export default function Topics() {
  return (
    <Main>
      <h1>Topics</h1>
      <p>
        Explore the world through topics of beautiful photos free to use under
        the <span>Unsplash License.</span>
      </p>
      <h2>Featured</h2>
      <section>
        <div>
          <img
            src="https://media.istockphoto.com/photos/cherry-blossom-picture-id1297835513?b=1&k=20&m=1297835513&s=170667a&w=0&h=Buazol-go5ErQbU7BFG04SZCgMyYiDjZ58uadIvPZ7k="
            alt=""
            className="main-img"
          />
          <img
            src="https://images.unsplash.com/profile-1647896834497-6be7da399e3fimage?dpr=2&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff"
            alt=""
            className="logo"
          />
          <h3>Act For Nature</h3>
          <h5>by UN Environment Programme (UNEP)</h5>
          <p>
            This year marks UNEP’s 50th birthday, and they’ve asked the Unsplash
            community to take part in....
          </p>
          <p>936 contributions</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1596487162379-fbab6c590a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHdhdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="main-img"
          />
          <img
            src="https://images.unsplash.com/profile-1647896834497-6be7da399e3fimage?dpr=2&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff"
            alt=""
            className="logo"
          />
          <h3>Color of Water</h3>
          <h5>by Water Programme (UNEP)</h5>
          <p>
            This year marks UNEP’s 50th birthday, and they’ve asked the Unsplash
            community to take part in....
          </p>
          <p>6.7K contributions</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="main-img"
          />
          <img
            src="https://images.unsplash.com/profile-1647896834497-6be7da399e3fimage?dpr=2&auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff"
            alt=""
            className="logo"
          />
          <h3>Current Events</h3>
          <h5>by Peace Programme (UNEP)</h5>
          <p>
            This year marks UNEP’s 50th birthday, and they’ve asked the Unsplash
            community to take part in....
          </p>
          <p>10K+ contributions</p>
        </div>
      </section>

      <h2>All Topics</h2>
      <section>
        {data.map((i, index) => (
          <div key={index}>
            <img
              src={`https://source.unsplash.com/random?sig=${
                Math.random() * 1000
              }`}
              alt=""
              className="main-img"
            />
            <img
              src={`https://source.unsplash.com/random?sig=${
                Math.random() * 1000
              }`}
              alt=""
              className="logo"
            />
            <h3>{i}</h3>
            <h5>by Unsplash (Stock Photos Api)</h5>
            <p>
              This year marks UNEP’s 50th birthday, and they’ve asked the
              Unsplash community to take part in....
            </p>
            <p>Total {Math.floor(Math.random() * 2500 + 1000)} contributions</p>
          </div>
        ))}
      </section>
    </Main>
  );
}
