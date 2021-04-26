import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import { About, Home, Success } from "./pages/Index";
import Redux from "./pages/Redux";
import Redux2 from "./pages/Redux2";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/success" component={Success} />
          <Route path="/about" component={About} />
          <Route path="/redux" component={Redux} />
          <Route path="/redux2" component={Redux2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
