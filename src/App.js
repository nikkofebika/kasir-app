import { Component, createContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import GlobalProvider from "./context/Context";
import { About, Home, Success } from "./pages/Index";
import Redux from "./pages/Redux";
import Redux2 from "./pages/Redux2";

class App extends Component {
  render() {
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
  }
};

export default GlobalProvider(App);

// pake context tanpa HOC
// import { Component, createContext } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import NavbarComponent from "./components/NavbarComponent";
// import { About, Home, Success } from "./pages/Index";
// import Redux from "./pages/Redux";
// import Redux2 from "./pages/Redux2";

// export const RootContext = createContext();
// const Provider = RootContext.Provider;

// class App extends Component {
//   state = {
//     order: 3,
//     name: 'Okin'
//   }

//   dispatch = (action) => {
//     switch (action.type) {
//       case 'CHANGE_ORDER':
//         if (action.cond === 'plus') {
//           this.setState({ order: this.state.order + 1 })
//         } else {
//           this.setState({ order: this.state.order - 1 })
//         }
//         console.log('state skg', this.state)
//         break;
//       case 'CHANGE_NAME':
//         this.setState({ name: action.newName })
//         break;
//       default:
//         return this.state
//         break;
//     }
//   }
//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//           <Provider value={{ state: this.state, dispatch: this.dispatch }}>
//             <NavbarComponent />
//             <Switch>
//               <Route path="/" exact component={Home} />
//               <Route path="/success" component={Success} />
//               <Route path="/about" component={About} />
//               <Route path="/redux" component={Redux} />
//               <Route path="/redux2" component={Redux2} />
//             </Switch>
//           </Provider>
//         </BrowserRouter>
//       </div>
//     );
//   }
// };

// export default App;
