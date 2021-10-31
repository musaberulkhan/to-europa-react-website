import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';
import Packages from './Components/Packages/Packages';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Booking from './Components/Booking/Booking';
import Success from './Components/Booking/Success/Success';
import MyOrders from './Components/MyOrders/MyOrders';
import AddNewPackage from './Components/AddNewPackage/AddNewPackage';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/packages">
              <Packages></Packages>
            </Route>
            
            <PrivateRoute path="/booking/:packageId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/bookingSuccessful">
              <Success></Success>
            </PrivateRoute>
            <PrivateRoute path="/my-orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/add-a-new-package">
              <AddNewPackage></AddNewPackage>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>

            {/* <Route path="/services">
            <Services />
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/livechat">
            <LiveChat></LiveChat>
          </PrivateRoute>
          <PrivateRoute path="/myprofile">
            <MyProfile></MyProfile>
          </PrivateRoute>
          <PrivateRoute path="/servicedetails/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route> */}
          </Switch>
        </Router>
        <Footer></Footer>
      </div>

    </AuthProvider>

  );
}

export default App;
