import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import { About, Home, Success } from "./pages/Index";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/success" component={Success} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
