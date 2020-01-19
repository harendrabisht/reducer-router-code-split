import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import initStore from "./store/store";
import "./styles.css";
const store = initStore();

// const Home = lazy(() => import("./components/Home"))
// const About = lazy(() => import("./components/About"));

// ./modules/home file exports reducer under "reducer" named export
const Home = lazy(() =>
  import("./modules/Home").then(module => {
    store.injectReducer("home", module.reducer);
    return import("./components/Home");
  })
);

// ./modules/about file exports reducer under "reducer" named export
// const About = lazy(() =>
//   import("./modules/about").then(module => {
//     store.injectReducer("about", module.reducer);

//     return import("./components/About");
//   })
// );

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Suspense fallback={<div>loading</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/about" component={About} /> */}
            </Switch>
          </Suspense>
        </Router>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
