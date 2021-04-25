import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import { Home, Success } from "./pages/Index";

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/success" component={Success} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
