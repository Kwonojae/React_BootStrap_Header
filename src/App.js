import { Route, Router, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Questions from "./screens/Questions";
import ReactDoc from "./screens/ReactDoc";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/reactdoc" element={<ReactDoc />} />
      </Route>
    </Routes>
  );
}

export default App;
