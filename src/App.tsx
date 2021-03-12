import Home from "./components/Home";
import Basket from "./components/Basket";
import { BrowserRouter as Router,Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/basket" exact>
          <Basket />
        </Route>
      </Router>
    </div>
  );
};

export default App;
