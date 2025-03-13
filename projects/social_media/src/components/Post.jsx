// import PropTypes from "prop-types";
import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { postListContext } from "../store/listUseContext";
const Post = ({ postId, title, body, tags, reactions }) => {
  const { deletePost } = useContext(postListContext);
  return (
    <div className="card my-3 myContainer">
      <div className="card-body">
        <h5 className="card-title">
          {title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {
              deletePost(postId);
            }}
          >
            <RiDeleteBin6Line />
          </span>
        </h5>
        <p className="card-text">{body}</p>
        <p className="card-text">
          {tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hastags">
              {tag}
            </span>
          ))}
        </p>
        <div className="alert alert-success" role="alert">
          This post has been reacted by{" "}
          {`${
            reactions.likes === true && reactions.dislikes === true
              ? reactions.likes
              : reactions
          }`}{" "}
          people.
        </div>
      </div>
    </div>
  );
};

// // Prop Type Validation
// Post.propTypes = {
//   title: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   reactions: PropTypes.number.isRequired,
// };

export default Post;
