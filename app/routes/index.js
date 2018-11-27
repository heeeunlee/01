import React from "react";
import HomePage from "./HomePage";
import WorkPage from "./WorkPage";
import Sketchbook from "./Sketchbook";
import AboutPage from "./AboutPage";
import Resume from "./Resume";

class App extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default {
  path: "/",
  component: App,
  indexRoute: { component: HomePage },
  childRoutes: [
    {
      path: "/home",
      name: "/home",
      component: HomePage
    },
    {
      path: "/work",
      name: "/work",
      component: WorkPage
    },
    {
      path: "/sketch",
      name: "/sketch",
      component: Sketchbook
    },
    {
      path: "/about",
      name: "/about",
      component: AboutPage
    },
    {
      path: "/resume",
      name: "/resume",
      component: Resume
    }
  ]
};
