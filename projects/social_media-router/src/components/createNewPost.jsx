import { useContext, useRef } from "react";
import { postListContext } from "../store/listUseContext";

const CreatePost = () => {
  const { addPost } = useContext(postListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const BodyPostElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const HandleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const BodyPost = BodyPostElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    BodyPostElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    addPost(userId, postTitle, BodyPost, reactions, tags);
  };

  return (
    <div className="bd-example m-0 border-0">
      <form className="formStyle" onSubmit={HandleSubmit}>
        <div className="headingPost">
          <h2>Create Post</h2>
        </div>
        <div className="mb-3">
          <label htmlFor="user_id" className="form-label">
            Enter your user Id here
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="user_id"
            placeholder="Your user id..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="post_area" className="form-label">
            Post Area
          </label>
          <textarea
            type="text"
            ref={BodyPostElement}
            className="form-control"
            id="post_area"
            placeholder="Type your toughts here..."
            rows="4"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
            placeholder="How meny people have reacted..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Enter your tags after space..."
          />
        </div>

        <button type="submit" className="btn btn-primary" fdprocessedid="d6dm8">
          Submit
        </button>
      </form>
    </div>
  );
};
export default CreatePost;
