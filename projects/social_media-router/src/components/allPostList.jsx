import { useContext, useEffect, useState } from "react";
import { postListContext } from "../store/listUseContext";
import Post from "./Post";
import LoadingSpinner from "./loadingSpinner";
import Welcome from "./welcomeMessage";

const AllPostList = () => {
  const { postList, addInitialPost } = useContext(postListContext);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="container">
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <Welcome />}
      <div className="row">
        {!fetching &&
          postList.map((post) => (
            <div key={post.id}>
              <Post
                postId={post.id}
                title={post.title}
                body={post.body}
                tags={post.tags}
                reactions={post.reactions}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllPostList;
