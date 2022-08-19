import React from "react";
import "./CreateStory.css";

const CreateStory = () => {
  return (
    <div>
      <h1>Create Story</h1>
      <div className="create-story-div">
        <img src="./Images/Vector.png" alt="" />
        <input className="create-story-input" type="text" placeholder="Title" />
      </div>

      <div className="create-story-div">
        <img src="./Images/Vector.png" alt="" />
        <input
          className="create-story-input"
          type="options"
          placeholder="Tags"
        />
      </div>

      <div className="create-story-div-3">
        <img src="./Images/Vector (1).png" alt="" />
        <input
          className="create-story-input"
          type="text"
          placeholder="Choose cover image from file..."
        />
        <button className="upload-image-btn">Upload Cover Image</button>
      </div>
      <div className="create-story-div-4">
        <img src="./Images/Vector.png" alt="" />
        <input
          className="create-story-input"
          type="text"
          placeholder="Write your story"
        />
      </div>
      <div className="publish-story-btn-div">
        <button className="publish-story-btn">Publish Story</button>
      </div>
    </div>
  );
};

export default CreateStory;
