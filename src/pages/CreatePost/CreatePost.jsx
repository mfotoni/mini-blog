import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("posts");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validate image url
    try {
      new URL(image);
    } catch (error) {
      setFormError("The image must be a URL.");
      return;
    }

    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check all values
    if (!title || !image || !tags || !body) {
      setFormError("Please fill all fields.");
      return;
    }

    // if (formError) {
    //   return false;
    // }

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect to home page
    navigate("/");
  };

  return (
    <div className={styles.create_post}>
      <h2>Create Post</h2>
      <p>Write about whatever you want and share.</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title: </span>
          <input
            type="text"
            name="title"
            placeholder="Think about a good title..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Image URL: </span>
          <input
            type="text"
            name="image"
            placeholder="Insert an image that represents your post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            required
          />
        </label>
        <label>
          <span>Content: </span>
          <textarea
            name="body"
            placeholder="Insert the post content"
            onChange={(e) => setBody(e.target.value)}
            value={body}
            required
          ></textarea>
        </label>
        <label>
          <span>Tags: </span>
          <input
            type="text"
            name="tags"
            placeholder="Insert the post tags separated by comma"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!response.loading && <button className="btn">Create Post</button>}
        {response.loading && (
          <button className="btn" disabled>
            Loading...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
