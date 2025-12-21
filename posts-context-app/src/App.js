import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { PostContext } from "./context/PostContext";
import PostList from "./components/PostList";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="theme" style={{minHeight:"100vh", padding:"20px"}}>
      <ThemeToggle />
      <PostList />
    </div>
  );
}

export default App;