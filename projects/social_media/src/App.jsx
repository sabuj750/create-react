import MyHeader from "./components/header";
import Footer from "./components/Footer";
import SlidePanel from "./components/SlidePanel";
import css from "./App.module.css";
import CreatePost from "./components/createNewPost";
import AllPostList from "./components/allPostList";
import { useState } from "react";
import { PostListProvider } from "./store/listUseContext";
import "./components/style.css";

function App() {
  const [posts, setPosts] = useState("Home");

  return (
    <PostListProvider>
      <div className={css.MyContainer}>
        <SlidePanel headerOption={posts} setPosts={setPosts} />
        <div className={css.Headings}>
          <MyHeader />
          {posts === "Home" ? <AllPostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
