import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
import HeaderComponent from "../components/HeaderComponent";
import FiltersComponent from "../components/FiltersComponent";
import ResultsComponent from "../components/ResultsComponent";
const bookings = [
    {
        nameValue: "cosmin",
        location: "address location",
        price: 210,
        image: "https://via.placeholder.com/300/09f.png/fff%20C/O%20https://placeholder.com/",
        rating: 5,
        roomTypes: "Deluxe" 
    },
    {
        nameValue: "iulia",
        location: "address location",
        price: 745,
        image: "https://via.placeholder.com/300/08f.png/fff%20C/O%20https://placeholder.com/",
        rating: 5,
        roomTypes: "Deluxe" 
    },
    {
        nameValue: "gabi",
        location: "address location",
        price: 550,
        image: "https://via.placeholder.com/300/07f.png/fff%20C/O%20https://placeholder.com/",
        rating: 5,
        roomTypes: "Deluxe" 
    }
    // {
    //     nameValue: "Sunset Hotel4",
    //     location: "address location",
    //     price: 445,
    //     image: "image/testimage.jpg",
    //     rating: 5,
    //     roomTypes: "Deluxe" 
    // },
    // {
    //     nameValue: "Sunset Hotel5",
    //     location: "address location",
    //     price: 945,
    //     image: "image/testimage.jpg",
    //     rating: 5,
    //     roomTypes: "Deluxe" 
    // }
]

const availableBookings = [
    {
        nameValue: "name 1",
        locationValue: "location value 1",
        price: 945,
        image: "https://via.placeholder.com/300/09f.png/fff%20C/O%20https://placeholder.com/",
        rating: 14,
        roomTypes: "Double bed",
        facilities: ["free_wifi"]
    },
    {
        nameValue: "name 1",
        locationValue: "location value 1",
        price: 945,
        image: "https://via.placeholder.com/300/09f.png/fff%20C/O%20https://placeholder.com/",
        rating: 14,
        roomTypes: "Double bed",
        facilities: ["breakfast_included","free_wifi"]
    }
]
class ResultsPage extends Component {
  constructor(props) {
      super(props)
      this.filterBookings = this.filterBookings.bind(this)
      this.businessFiltersChanged = this.businessFiltersChanged.bind(this)
      this.state = {
          bookingPlaces: bookings,
          bookingGlobal: availableBookings,
          filterBookingsInput: "",
          filtersParameters: [],
          businessFilters: []
      }
  }
  filterBookings = (ev) => {
    console.log(ev.target.value)
    this.setState({filterBookingsInput: ev.target.value})
  }
//   filterBookingFiltersBased = (ev) => {
//     // console.log(ev.target.value)
//     this.setState({filtersParameters: ev.target.value})
//     console.log(this.state.filtersParameters)
//   }
  businessFiltersChanged = (newFilter) => {
    this.setState({
      businessFilters: newFilter
    });
  }
  render() {
    const filteredByLocation = this.state.bookingPlaces.filter(bookings => {
        return bookings.nameValue.toLowerCase().includes(this.state.filterBookingsInput.toLowerCase())
    })
    const filteredByBusinessPrimary = this.state.bookingGlobal.filter(bookings => {
        return bookings.facilities.includes(this.state.businessFilters)
    }) 
    return (
      <div className="results__page">   
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
        <div className="content__divisionResults">
            <div className="content__divisionResults--wrapper">
                <BrowserView>
                <FiltersComponent 
                    filterBookingsByLocation={this.filterBookings}
                    filterBookingsByParameters={this.filterBookingFiltersBased}
                    businessFiltersChangedHandle={this.businessFiltersChanged}
                    />
                </BrowserView>
                <ResultsComponent 
                    filteredBookingsPlaces={filteredByLocation}
                    filteredByBusinessPrimary={filteredByBusinessPrimary}
                    initialValues={this.state.bookingGlobal}
                />
            </div>
        </div>
      </div>
    )
  }
}
export default ResultsPage;