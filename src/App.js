
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AddDestination from './components/AdminPanel/AddDestination/AddDestination'
import OrderPlace from './components/OrderPlace/OrderPlace'
import BookingList from "./components/AdminPanel/BookingList/BookingList";
import NotFound from './components/NotFound/NotFound'
import Login from "./components/Login/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home> 
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/add-destination">
            <AddDestination></AddDestination>
          </PrivateRoute>

          <PrivateRoute path="/orders/:id">
          <OrderPlace></OrderPlace>
          </PrivateRoute>
          
         

      
          <PrivateRoute path='/booking'>
            <BookingList></BookingList>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="*">
          <NotFound></NotFound>
          </Route>


        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
