import styles from "./Home.module.css";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

// components
import PostDetail from "../../components/PostDetail";

const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.home}>
      <h1>Recent posts</h1>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Search</button>
      </form>
      <div>
        {loading && <p>Loading...</p>}
        {posts && posts.map((post) => <PostDetail post={post} key={post.id} />)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Posts not found</p>
            <Link to="/posts/create" className="btn">
              Create first post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
