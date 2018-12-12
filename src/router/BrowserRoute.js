import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
// import Drilldown from 'react-router-drilldown';
import HeaderComponent from "../components/HeaderComponent";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import ResultsPage from "../pages/ResultsPage";
import OverviewPage from "../pages/OverviewPage";
import BookingDetails from "../pages/BookingDetails";
import PaymentPage from "../pages/PaymentPage";
import PaymentFinish from "../pages/PaymentFinish";
import PageNotFound from "../pages/PageNotFound";
class BrowserRoute extends Component {
  render() {
    return (
      <div className="browser__router">
        <BrowserRouter>
          <div>
            {/* <HeaderComponent></HeaderComponent> */}
            <Switch>
            {/* <Drilldown transitionDuration={945}> */}
              {/* <Route path="/signup" component={Signup}/> */}
              <Route exact={true} path="/login" component={Login}/>
              <Route path={process.env.PUBLIC_URL} exact={true}  component={HomePage}/>
              <Route path={process.env.PUBLIC_URL + '/results'} component={ResultsPage}/>
              <Route path={process.env.PUBLIC_URL + '/overview'} component={OverviewPage}/>
              <Route path={process.env.PUBLIC_URL + '/booking-details'} component={BookingDetails}/>
              <Route path={process.env.PUBLIC_URL + '/payment'} component={PaymentPage}/>
              <Route path={process.env.PUBLIC_URL + '/confirm-payment'} component={PaymentFinish}/>
              <Route component={PageNotFound}/>
            {/* </Drilldown> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default BrowserRoute;