import { h } from "preact";
import Navbar from "./Navbar";
import { Route, Router } from "preact-router";
import Home from "../routes/Home";
import Todos from "../routes/Todos";
import {selectTheme} from "../storage/themeSlice";
import {useSelector} from "react-redux";

const Main = () => {
  const theme = useSelector(selectTheme);
  
  return (
    <div className={theme?"dark":""}>
      <Navbar />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/todos" component={Todos} />
      </Router>
    </div>
  );
};
export default Main;
