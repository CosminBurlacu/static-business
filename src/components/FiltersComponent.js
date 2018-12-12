import React, { Component } from "react";
import Dropdown from 'react-dropdown';
import CurrencyInput from 'react-currency-input';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
const options = [
    "1", "2", "3", "4", "5"
]
const defaultOption = options[0]
// const bookings = [
//     {
//         name: "Sunset Hotel1",
//         locationArea: "address location",
//         price: 550,
//         image: "image/image.jpg",
//         rating: 5,
//         roomTypes: "Deluxe" 
//     },
//     {
//         name: "Sunset Hotel2",
//         locationArea: "address location",
//         price: 550,
//         image: "image/image.jpg",
//         rating: 5,
//         roomTypes: "Deluxe" 
//     },
//     {
//         name: "Sunset Hotel3",
//         locationArea: "address location",
//         price: 550,
//         image: "image/image.jpg",
//         rating: 5,
//         roomTypes: "Deluxe" 
//     },
//     {
//         name: "Sunset Hotel4",
//         locationArea: "address location",
//         price: 550,
//         image: "image/image.jpg",
//         rating: 5,
//         roomTypes: "Deluxe" 
//     },
//     {
//         name: "Sunset Hotel5",
//         locationArea: "address location",
//         price: 550,
//         image: "image/image.jpg",
//         rating: 5,
//         roomTypes: "Deluxe" 
//     }
// ]
class FiltersComponent extends Component {
    constructor(props) {
        super(props)
        this.getInitialState = this.getInitialState.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            amount: 0,
            // businessFilters: [],
            // filteredBookings: bookings,
            // addressField: ""
        }
    }
    getInitialState(){
        return ({amount: "0.00"});
    }
        
    handleChange(event, maskedvalue, floatvalue){
        this.setState({amount: maskedvalue});
    }
    render(props) {
        return(
            <div className="filters__component">
                {/* filters__component */}
                <div className="filters__component--wrapper">
                    <form className="filters__forms">
                        {/* destination group */}
                        <div className="formgroup__filters destination__filters">
                            <label className="label__title">Destination</label>
                            <div className="group__address__input">
                                <svg>
                                    <use href="image/sprite.svg#icon-search"></use>
                                </svg>
                                <input type="text" className="address__input" onChange={this.props.filterBookingsByLocation}/>
                            </div>
                        </div>
                        {/* dates group */}
                        <div className="formgroup__filters dates__filters">
                        <label className="label__title">Dates</label>
                            <div className="group__address__calendar">
                                <svg>
                                    <use href="image/sprite.svg#icon-calendar"></use>
                                </svg>
                                <input type="text" className="dates__input"/>
                            </div>
                        </div>
                        {/* double people and budget group */}
                        <div className="formgroup__filters dual__formgroup">
                            <div className="people__formgroup">
                                <label className="label__title">People</label>
                                <Dropdown className='number__people' options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                            </div>
                            <div className="budget__formgroup">
                                <label className="label__title">Budget per night per person</label>
                                <CurrencyInput className="amount__payment" value={this.state.amount} onChangeEvent={this.handleChange}/>
                            </div>
                        </div>
                        {/* business filters */}
                        <div className="formgroup__filters business__filters">
                            <label className="label__title">Business filters</label>
                            <CheckboxGroup
                                checkboxDepth={2} // This is needed to optimize the checkbox group
                                name="filters"
                                value={this.state.businessFilters}
                                onChange={this.props.businessFiltersChangedHandle}
                                // onChange={this.props.filterBookingsByParameters}
                            >
                                <label><Checkbox value="breakfast_included"/> breakfast included</label>
                                <label><Checkbox value="free_wifi"/> free wifi</label>
                                <label><Checkbox value="parking"/> parking</label>
                                <label><Checkbox value="airport_shuttle"/> airport shuttle</label>
                                <label><Checkbox value="fitness_center"/> fitness center</label>
                                <label><Checkbox value="free_cancellation"/> free cancellation</label>
                            </CheckboxGroup>
                        </div>
                        <div className="formgroup__filters additional__filters">
                        <label className="label__title">Additional filters</label>
                            <CheckboxGroup
                                checkboxDepth={2} // This is needed to optimize the checkbox group
                                name="filters"
                                value={this.state.businessFilters}
                                onChange={this.businessFiltersChanged}
                                onChange={this.props.filterBookingsByParameters}
                            >
                                <label><Checkbox value="24_hour_reception"/> 24 hour reception</label>
                                <label><Checkbox value="sauna"/> sauna</label>
                                <label><Checkbox value="city_center"/> city center</label>
                                <label><Checkbox value="restaurant"/> restaurant</label>
                                <label><Checkbox value="fitness_center"/> fitness center</label>
                                <label><Checkbox value="meeting_rooms"/> meeting rooms</label>
                            </CheckboxGroup>
                        </div>
                        <div className="formgroup__filters search__button">
                            <button className="search__bookings">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    // businessFiltersChanged = (newFilter) => {
    //     this.setState({
    //       businessFilters: newFilter
    //     });
    //   }
}
export default FiltersComponent;