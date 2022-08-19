import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="opening-section">
        <h1>Stay Curious</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque culpa
          assumenda modi mollitia consequuntur quidem vel. Corporis cumque
          pariatur nisi ad. Fugit ullam nulla aspernatur tenetur voluptate
          perspiciatis corporis error!
        </p>
        <input type="text" placeholder="Enter email address" />
        <button>Get Started</button>
      </section>

      <h2 className="mx-5 my-4">Trending Stories</h2>
      <section className="top-stories d-lg-flex mx-5 gap-2">
        <div className="top-story-1">
          <h6 className="category-1">Nature</h6>
          <h5>The 20 Biggest Agro Companies in Africa 2022</h5>
          <pre>June 24, 2022</pre>
        </div>
        <section className="top-stories-sec-2 me-5">
          <div className="top-story-2">
            <h6 className="category-2">Lifestyle</h6>
            <h6>The 20 Biggest Fashion Houses in Nigeria 2022</h6>

            <pre>June 24, 2022</pre>
          </div>
          <section className="top-stories-sec-3 d-lg-flex mt-2 gap-2">
            <div className="top-story-3">
              <h6 className="category-3">Technology</h6>
              <h6> The 20 Biggest Fashion Fintech in Nigeria 2022</h6>

              <pre>June 24, 2022</pre>
            </div>
            <div className="top-story-4">
              <h6 className="category-4">Sport</h6>
              <h6>The 20 Biggest Sport Houses in Nigeria 2022</h6>

              <pre>June 24, 2022</pre>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Home;
