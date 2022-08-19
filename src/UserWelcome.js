import React from "react";

const UserWelcome = () => {
  return (
    <div>
      <section className="you-have-a-story d-lg-flex justify-content-between">
        <div>
          <h2>Welcome Maria!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            sapiente temporibus ducimus inventore laborum, laudantium tenetur
            nihil facere consequuntur mollitia saepe nulla doloribus minima in
            accusamus iste tempore reprehenderit cumque?
          </p>
          <button className="my-5 me-4">Create Story</button>
          <button>Go to Stories</button>
        </div>
        <div>
          <img src="./Images/unsplash_Z2bJeJQRbW0.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default UserWelcome;
