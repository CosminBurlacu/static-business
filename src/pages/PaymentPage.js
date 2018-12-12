import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import BookingDetailsComponent from "../components/BookingDetailsComponent";
import PriceSummaryComponent from "../components/PriceSummaryComponent";
class PaymentPage extends Component {
  render() {
    return (
<div className="overview__page">
        {/* OverviewPage */}
          <HeaderComponent/>
          <div className="main__navigation">
              <div className="main__navigation--wrapper">
                  <NavLink 
                      exact={true} 
                      to="/home" 
                      activeClassName="active__navigation"
                      className="search__icon"
                  >
                      <svg>
                          <use href="image/sprite.svg#icon-search"></use>
                      </svg>
                      Search
                  </NavLink>
                  <NavLink 
                      to="/overview" 
                      activeClassName="active__navigation"
                      className="time__icon"
                  >
                      <svg>
                          <use href="image/sprite.svg#icon-time"></use>
                      </svg>
                      Trips overview
                  </NavLink>
              </div>
          </div>
          <div className="overview__page--wrapper">
          {/* BOOKING STAGES */}
              <div className="booking__stage">
              <NavLink 
                to="/overview" 
                exact={true}
                activeClassName="active__stages"
                >
              <span className="stage__number">
                <svg className="icons__stages">
                    <use href="image/sprite_primary.svg#icon-check"></use>
                </svg>
              </span>
              <span className="stages__description">Chose accomodation</span>
              </NavLink>
              <NavLink 
                to="/booking-details"
              >
                <span className="stage__number">
                <svg className="icons__stages">
                    <use href="image/sprite_primary.svg#icon-check"></use>
                </svg>
                </span>
                <span className="stages__description">Enter booking details</span>
              </NavLink>
              <NavLink 
                to="/payment"
                activeClassName="active__stages"
              >
                <span className="stage__number">3</span>
                <span className="stages__description">Confirm and pay</span>
              </NavLink>
              </div>
            </div>
          {/* BOOKING STAGES */}

          {/* CONTENT GLOBAL */}
            <div className="content__globalOverview">
                <div className="left__overview--details">
                    <BookingDetailsComponent/>
                    <PriceSummaryComponent/>
                </div>
                <div className="right__overview--details">
                    <div className="right__overview--details--wrapper">
                        <h2>Payment details</h2>
                        <div className="payment__areas">
                            <div className="payment__areas--wrapper">
                                <div className="payment__areas--wrapper--method">
                                    <label>Payment method:</label>
                                    <select>
                                        <option value="card1-xzcqw123456789">card-1</option>
                                        <option value="card1-xzcqw123456789">card-2</option>
                                        <option value="card1-xzcqw123456789">card-3</option>
                                        <option value="card1-xzcqw123456789">card-4</option>
                                        <option value="card1-xzcqw123456789">card-5</option>
                                    </select>
                                </div>
                                <div className="payment__areas--wrapper--datas">
                                    <p>The invoice will be sent to the finance department</p>
                                    <p>The travel confirmation will be sent by email to the selected employees</p>
                                </div>
                            </div>
                            <div className="payment__areas--confirm">
                                <div className="cardInformation">
                                    <p>Card 1</p>
                                    <span>VISA ****4333</span>
                                </div>
                                <div className="priceInformation">
                                    <p>Total price</p>
                                    <span>5107 dkk</span>
                                </div>
                                <div className="confirmInformation">
                                    <NavLink to="/test">Confirm and Pay</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
          {/* CONTENT GLOBAL */}
      </div>
    )
  }
}
export default PaymentPage;