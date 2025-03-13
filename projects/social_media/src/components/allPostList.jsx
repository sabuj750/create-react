import { useContext } from "react";
import { postListContext } from "../store/listUseContext";
import Post from "./Post";
import Welcome from "./welcomeMessage";

const AllPostList = () => {
  const { postList, addInitialPost } = useContext(postListContext);
  const handleButtonClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        addInitialPost(data.posts);
      });
  };
  return (
    <div className="container">
      {postList.length === 0 && <Welcome ButtonClick={handleButtonClick} />}
      <div className="row">
        {postList.map((post) => (
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
