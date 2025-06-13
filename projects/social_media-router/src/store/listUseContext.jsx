import { createContext, useReducer } from "react";

const postListReducer = (state, action) => {
  let newPostList = state;
  if (action.type === "DELETE_POST") {
    newPostList = state.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...state];
  }
  return newPostList;
};

// const defaultPostList = [
//   {
//     id: "1",
//     title: "First Post",
//     body: "This is the first post lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quis nam, eveniet reiciendis deserunt ex iure, ab corporis voluptatum velit porro quia magni nulla architecto!",
//     reactions: 3,
//     userId: "user-9",
//     tags: ["post1", "post2"],
//   },
//   {
//     id: "2",
//     title: "Playing Cricket",
//     body: "I am playing cricket like a pro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quis nam, eveniet reiciendis deserunt ex iure, ab corporis voluptatum velit porro quia magni nulla architecto!",
//     reactions: 2,
//     userId: "user-6",
//     tags: ["cricket", "virat kohli"],
//   },
// ];

const postListContext = createContext({
  postList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <postListContext.Provider
      value={{ postList, addPost, addInitialPost, deletePost }}
    >
      {children}
    </postListContext.Provider>
  );
};

export { PostListProvider, postListContext };
