import './App.css';
import Checkout from './components/Checkout';
import CreateCoupon from './components/CreateCoupon';
import ViewCoupons from './components/ViewCoupons';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Checkout /></Route>
        <Route exact path="/coupon/create"><CreateCoupon /></Route>
        <Route exact path="/coupon/view"><ViewCoupons /></Route>
      </Switch>
   
    </Router >

  );
}

export default App;
