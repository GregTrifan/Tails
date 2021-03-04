import { h } from "preact";
import Navbar from "./Navbar";
import { Route, Router } from "preact-router";
import Home from "../routes/Home";
import Todos from "../routes/Todos";
const Main = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/todos" component={Todos} />
      </Router>
    </div>
  );
};
export default Main;
