import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class BookingStage extends Component {
  render(props) {
    return (
      <div className="booking__stage">
        {/* booking__stage */}
        <NavLink to="/overview">1</NavLink>
        <NavLink to="/overview">2</NavLink>
        <NavLink to="/overview">3</NavLink>
      </div>
    )
  }
}
export default BookingStage;