import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cupboard from './components/Cupboard';
import Fridge from './components/Fridge';
import Freezer from './components/Freezer';
import Spices from './components/Spices';
import GroceryContextProvider from './contexts/GroceryContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <GroceryContextProvider>
            <Route exact path="/" component={Home} />
            <Route exact path="/cupboard" component={Cupboard} />
            <Route exact path="/fridge" component={Fridge} />
            <Route exact path="/freezer" component={Freezer} />
            <Route exact path="/spices" component={Spices} />
          </GroceryContextProvider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
