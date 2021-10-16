import "./App.css";
import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";
import Home from "./screens/Home/Home";
import Layout from "./components/Layout/Layout";
import Projects from "./screens/Projects/Projects";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Layout>
      </Switch>
    </div>
  );
}
